import librosa
import numpy as np
from flask import Flask, request
from flask_cors import CORS, cross_origin
import wave
import os
import keras
from keras.models import load_model, model_from_json

# "COPD":0
# "Healthy":1
# "URTI":2
# "Bronchiectasis":3
# "Pneumonia":4
# "Bronchiolitis":5

json_file = open(r'model/model.json', 'r')
loaded_model_json = json_file.read()
json_file.close()

keras.backend.clear_session()
model = model_from_json(loaded_model_json)
model.load_weights(r"model/model.h5")
model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

app = Flask(__name__)
CORS(app, support_credentials=True)


def model_predict(AUDIO_FILE):
    sound, sample_rate = librosa.load(AUDIO_FILE)
    stft = np.abs(librosa.stft(sound))

    mfccs = np.mean(librosa.feature.mfcc(y=sound, sr=sample_rate, n_mfcc=40), axis=1)
    chroma = np.mean(librosa.feature.chroma_stft(S=stft, sr=sample_rate), axis=1)
    mel = np.mean(librosa.feature.melspectrogram(y=sound, sr=sample_rate), axis=1)
    contrast = np.mean(librosa.feature.spectral_contrast(S=stft, sr=sample_rate), axis=1)
    tonnetz = np.mean(librosa.feature.tonnetz(y=librosa.effects.harmonic(sound), sr=sample_rate), axis=1)

    concat = np.concatenate((mfccs, chroma, mel, contrast, tonnetz))
    preds = model.predict(np.array([np.reshape(concat, (193, 1))]))
    preds = [round(ele * 100, 2) for ele in preds[0]]
    return dict({"COPD": preds[0],
                 "Healthy": preds[1],
                 "URTI": preds[2],
                 "Bronchiectasis": preds[3],
                 "Pneumonia": preds[4],
                 "Bronchiolitis": preds[5]})


@app.route("/")
@cross_origin(supports_credentials=True)
def test():
    return "working"


@app.route('/data', methods=['POST', 'GET'])
@cross_origin(supports_credentials=True)
def api_post_audio_blob():
    
    blob = request.data
    name = 'output.wav'
    if os.path.exists(name):
        os.remove(name)
    audio = wave.open(name, 'wb')
    audio.setnchannels(1)
    audio.setsampwidth(2)
    audio.setframerate(96000)
    audio.writeframes(blob)
    audio.close()
    
    x = model_predict(name)
    return x


if __name__ == '__main__':
    app.run()

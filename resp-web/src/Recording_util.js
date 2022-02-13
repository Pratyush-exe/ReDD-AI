import React from 'react'
import ReactDOM from 'react-dom';
import Recorder from 'recorder-js'

const audioContext =  new (window.AudioContext || window.webkitAudioContext)();
const recorder = new Recorder(audioContext, {});
 
let isRecording = false;
let blob = null;
let res;
 
navigator.mediaDevices.getUserMedia({audio: true})
  .then(stream => recorder.init(stream))
  .catch(err => console.log('Uh oh... unable to get stream...', err));
 
function startRecording() {
    console.log("started")
    recorder.start()
    .then(() => isRecording = true);
}
 
function stopRecording() {
    console.log("stopped")
  recorder.stop()
    .then(({blob, buffer}) => {
        blob = blob;
        download(blob)
    });
}
 
function download(blob) {
    // console.log(blob)
    var xhr = new XMLHttpRequest();
    xhr.open('POST','http://127.0.0.1:5000/data',true);
    xhr.onload = function(e) {
        if (this.status === 200) {
            // console.log(this.responseText)
            let h1 = document.createElement('h1')
            h1.textContent = this.response
            document.getElementById('DIV').appendChild(h1)
        }
      };
    xhr.send(blob);
}

function Recording_util() {
    return (
        <div id="DIV">
            <button onMouseDown={startRecording} onMouseUp={stopRecording}>Record</button>
            <h1>{res}</h1>
        </div>
    )
}

export default Recording_util

export const FAQ_data = [
  {
    key: 0,
    question: 'What is ReDD? ',
    answer: `ReDD stands for "Respiratory Diseases Detection". This is an AI based web app that that predicts the possibility of certain respiratory diseases just using the breathing audio of the patient measured through easily available any digital stethoscope. ReDD also generated a report for the patient that he he can use to analyze the current situation for further treatment.`
  },
  {
    key: 1,
    question: 'What dataset is used for training the model?',
    answer: `The Respiratory Sound Database was created by two research teams in Portugal and Greece. It includes 920 annotated recordings of varying length - 10s to 90s. These recordings were taken from 126 patients. There are a total of 5.5 hours of recordings containing 6898 respiratory cycles - 1864 contain crackles, 886 contain wheezes and 506 contain both crackles and wheezes. The data includes both clean respiratory sounds as well as noisy recordings that simulate real life conditions. The patients span all age groups - children, adults and the elderly.ReDD is made for both doctors and any person who can have access to a digital stethoscope.`
  },
  {
    key: 2,
    question: 'Who is ReDD made for?',
    answer: ` ReDD is made for both doctors who will quickly run analysis for their patients with excellent accuracy and provide besttreatment at least of cost; and any person who can have access to a digital stethoscope that can be easily brought online as an one time investment towards once health, they can easily check their lungs status everyday and if found issues can consult to any nearbydoctors.`
  },
  {
      key: 3,
      question: 'What is the need of digital stethoscope?',
      answer: `A digital stethoscope is able to convert an acoustic sound to electronic signals, which can be further amplified for optimal listening. These electronic signals can be further processed and digitalized to transmit to a personal computer or a laptop. Then these transmitted audio files are read by applicationwe created and give us results. There is another work-around if digital stethoscope is unavailable, one can just keep their hand over any wired-earphone's mic and place it towards the chest while pushing is using palm of the hand and record as intended ("Check how to useReDD? "), this will also give results, even though not good enough because of lowered audio quality.`
  },
  {
      key: 4,
      question: 'What is the accuracy rate of ReDD?',
      answer: `ReDD gives accurate results to above 95%.`
  },
  {
      key: 5,
      question: 'What technology is used?',
      answer: `Technologies we used to train the model were tensorflow and keras, the audio file reading and extracting data from it is done by librosa and wave, sklearn was used to prepare the data for processing. And finally when the model was ready, it was deployed using Flask into the web server "Heroku". The whole frontend design was primarily using React.js, framer-motion-react and react-router.`
  },
  {
      key: 6,
      question: 'How to use ReDD?',
      answer: `Step 1: Choose to use either a digital stethoscope or ordinary mic and it towards your chest\n
               Step 2: Open the ReDD URL on any browser\n
               Step 3: Click on Begin or Scroll down\n 
               Step 4: Press Record and then long press on the Red record button to begin and release to stop recording\n
               Step 5: Take long brethes about 5 times from the chest area or the throat area that one needs to analyze while recording\n
               Step 6: Click analyze and get results!`
  },
  {
      key: 7,
      question: 'What diseases can be detected?',
      answer: `COPD - Chronic Obstructive Pulmonary Disease 
      A group of lung diseases that block airflow and make it difficult to breathe.
      URTI - Upper respiratory tract infection
      A common viral infection that affects the nose, throat and airways.
      BRONCHIETASIS - A condition in which the lungs' airways become damaged, making it hard to clear mucus.
      PNEUMONIA - Infection that inflames air sacs in one or both lungs, which may fill with fluid.
      BRONCHIOLITIS - An inflammatory bronchial reaction in young children and infants.
      
      We are planning to Add more!`
              
  },
  {
      key: 8,
      question: 'How does it predict from audio data?',
      answer: `After receiving the audio file either via record methods, the audio is sent to a backend API we created on heroku that contains a piece of code that first extracts audio features like mfcc, chroma_stft, melspectrogram, spectral_contrast and tonnetz from the audio and then using the generated data predicts using the model that we created on Keras/Tensorflow.`
  },
  {
      key: 9,
      question: 'What inspired us to create ReDD?',
      answer: `In today's scenario, Respiratory disorders can be affected by many factors like due to climatic condition, air pollution and the very obvious pandemic "COVID-19". In current scene, method of  treating respiratory diseases is time-consuming as well as expensive.  Respiratory sounds are important indicators of respiratory health and respiratory disorders.  The sound emitted when a person breathes is directly related to air movement, changes within  lung tissue and the position of secretions within the lung. A wheezing sound, for example, is a common sign that a patient has an obstructive airway disease like Chronic Obstructive Pulmonary Disease (COPD)`
  },
  {
      key: 10,
      question: 'What challenges we faced during project creation of ReDD?',
      answer: `The greatest challenge was to increase the accuracy, as high accuracy is a neccessity for such medical purposes.We also faced issues with uploading our API onto server becasue of large files generated from the model which hit free tier limit sizes of all servers (AWS, heroku)We then ended up lowering the size while still maintaing the accuracy and finally deployed on heroku`
  },
  {
      key: 11,
      question: 'What accomplishment we are proud of?',
      answer: `We were able to increase the accuracy level upto 95% which was a formidable task and the UI we created is interractive as to make it work smooth and flawless with a minimalist touch.`
  },
  {
      key: 12,
      question: 'What we learnt?',
      answer: `During the whole project journey we learned to collaborate and work together as a team, we also learned a lot about UIs and libraries like librosa and framer-motion. We also learned a lot about cloud deployment (the hard way, but worth trying), which included GCP, AWS and heroku`
  },
  {
      key: 13,
      question: 'What next for ReDD?',
      answer: `User-authentication: We want to provide each unique Login-ID and password to patients so that they can track their past recordings and analysis and get more data from that which can be used for better diagonsis of the respiratory diseases \n
      Security: As medical data is supposed to private, we want to securely keep user-data \n
      Increase Accuracy: Currently the accuracy is 95%, and we intend to increase it to about 99% as these 4% percent matters a lot in HealthCare.`
  }
]
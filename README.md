# Respiratory-Diseases-Detection (ReDD)

[Demo Link](https://redd-frontend.netlify.app/)

## What ReDD does?
ReDD stands for "Respiratory Diseases Detection". This is an AI based web app that that predicts the possibility of certain respiratory diseases just using the breathing audio of the patient measured through easily available any digital stethoscope. ReDD also generated a report for the patient that he he can use to analyze the current situation for further treatment.
 
## Inspiration
In today's scenario, Respiratory disorders can be affected by many factors like due to climatic condition, air pollution and the very obvious pandemic "COVID-19". In current scene, method of treating respiratory diseases is time-consuming as well as expensive.  Respiratory sounds are important indicators of respiratory health and respiratory disorders.  The sound emitted when a person breathes is directly related to air movement, changes within  lung tissue and the position of secretions within the lung. A wheezing sound, for example, is a common sign that a patient has an obstructive airway disease like Chronic Obstructive Pulmonary Disease (COPD).
 

## How we built it?
Before we could start building it, it was important to pre-process the data we collected from kaggle. So first we downloaded the data and parsed important features using librosa, then we hypertuned and then trained the model using tensorflow/keras. After we were satisficed with the accuracy, we downloaded the model and started building the API server. We build the API server using Flask framework. The Flask App we build takes the audio file from the frontend, parses it using librosa and then predicts using the saved model and then returns the result back to the frontend. The frontend was finally developed. We developed it using React js and animated most of it's parts using framer-motion. The website provides tabs in navbar of github link, FAQs and team details.

## What challenges we faced during preparation of our project?
The greatest challenge was to increase the accuracy, as high accuracy is a necessity for such medical purposes. We also faced issues with uploading our API onto server because of large files generated from the model which hit free tier limit sizes of all servers (AWS, heroku).We then ended up lowering the size while still maintaining the accuracy and finally deployed on heroku.

## Accomplishments that we're proud of
We were able to increase the accuracy level up to 95% which was a formidable task and the UI we created is interactive as to make it work smooth and flawless with a minimalist touch.

## What we learned?
During the whole project journey we learned to collaborate and work together as a team, we also learned a lot about UIs and libraries like librosa and framer-motion. We also learned a lot about cloud deployment (the hard way, but worth trying), which included GCP, AWS and heroku.

## What's next for Respiratory Disease Detection (ReDD)?
User-authentication: We want to provide each unique Login-ID and password to patients so that they can track their past recordings and analysis and get more data from that which can be used for better diagnosis of the respiratory diseases.

Security: As medical data is supposed to private, we want to securely keep user-data.

Increase Accuracy: Currently the accuracy is 95%, and we intend to increase it to about 99% as these 4% percent matters a lot in HealthCare.

Here's the link for our [website](https://redd-frontend.netlify.app/) 

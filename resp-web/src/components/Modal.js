import React, { useState } from 'react';
import { StyledModal } from '../components/styled-components/Modal.styled';
import AudioPlayer from "react-h5-audio-player";
import { motion, AnimatePresence } from 'framer-motion';
import 'react-h5-audio-player/lib/styles.css';
import "../Styles/Modal.css"
import start from '../Audio/Start.wav'
import stop from '../Audio/Stop.wav'

const audioStart = new Audio(start)
const audioStop = new Audio(stop)

let mediaRecorder;

const backdropVariant = {
  hidden : {
    opacity: 0,
  },

  visible : {
    opacity : 1,
  },
};

const modalVariant = {
  hidden : {
    y : "-100vh",
    opacity: 0,
  },

  visible : {
    y : 0,
    opacity: 1,
    transition: {delay: 0.5}
  }
}

navigator.mediaDevices.getUserMedia({audio: true, video: false})
  .then(stream => mediaRecorder = new MediaRecorder(stream))
  .catch(err => console.log('Uh oh... unable to get stream...', err));

const Modal = ({ show, setFormData, onClose }) => {
  const [blobURL, setblobURL] = useState("");

  function startRecording() {
    audioStart.play()
    document.getElementById("mic").style.backgroundColor = "rgb(184, 2, 2)";
    console.log("started")
    mediaRecorder.start();
  }

  function stopRecording() {
    audioStop.play()
    mediaRecorder.stop();
    document.getElementById("mic").style.backgroundColor = "red";
    console.log("stopped")
    // mediaRecorder.ondataavailable = function(e) {
    //   console.log(e.data)
    // }
    mediaRecorder.ondataavailable = function(e) {
      console.log(e.data)
      setFormData( prevFormData => {
        return {
          ...prevFormData,
          audioBlob : e.data,
        }
      })
      setblobURL(window.URL.createObjectURL(e.data))
      console.log("url:", blobURL)
    }
  } 

  return (
    <AnimatePresence >
      {show && (
        <StyledModal as={motion.div} onClick={onClose}
          variants = {backdropVariant}
          initial = 'hidden'
          animate = 'visible'
          exit = 'hidden'
        >
          <motion.div className='modal-content' 
            onClick={ e => e.stopPropagation()}
            variants={modalVariant}  
          >
              <div className='modal-body'>
                <button id="mic" onMouseDown={startRecording} onMouseUp={stopRecording}>
                  <img alt="" id="mic_logo" src={require("../Images/outline_mic_white_48dp.png")}/>
                </button>
              </div>
              
              <div className='modal-footer'>
                <p>Hold button to start Recording</p>
              </div>
              <AudioPlayer autoPlay={false} src={blobURL} onPlay={e => console.log("playing")} />
              <div id="modal_bt_Cont">
                <button className='btn' onClick={()=>{setblobURL('')}} >Record Again</button>
                <button className='btn' onClick={onClose}>Done</button>
              </div>
          </motion.div>
        </StyledModal> 
      )}
    </AnimatePresence>
  );
};

export default Modal;
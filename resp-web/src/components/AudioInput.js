import React, { useState } from 'react';
import { StyledInput } from '../components/styled-components/AudioInput.styled';
import Modal from '../components/Modal';
import '../Styles/AudioInput.css'
import { Link } from 'react-router-dom';
import ResultPage from './ResultPage';

const AudioInput = ({setresult}) => {
  const [ formData, setFormData ] = useState({
    patientName : "",
    Age : "",
    Sex : "",
    audioBlob : null,
    updated : null,
    result: [],
  });
  const [ showModal, setShowModal ] = useState(false);

  const handleChange = (event) => {
    //.log(formData.patientName);
    const {name, value} = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : value,
      }
    });
  };

  function openResult() {
    document.getElementById("linkToResult").click()
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('SUBMIT');
    
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        updated : new Date(),
      }
    });
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST','http://127.0.0.1:5000/data', true);
    xhr.onload = function(e) {
        if (this.status === 200) {
            let z = JSON.parse(this.response)
            formData.result = z;
            setresult(formData)
            openResult()
        }
      };
    console.log(formData)
    xhr.send(formData.audioBlob);
  };

  return <StyledInput>
    <div id="mainDIV"><h1 id="FRA">Reliable Analysis!</h1></div>
    
    <div id="stethoscope"></div>
    
    <div id='form'>
      <div id="patient-details">
        <input autocomplete="off" id="patient-name" className="nameInput" type="text" placeholder="Patient Name" onChange={handleChange} 
          name="patientName" value={formData.firstName} />
        <div className="InputFields">
          <input autocomplete="off" className="nameInput" type="text" placeholder="Age" name="Age" onChange={handleChange} value={formData.Age}/>
          <span></span>
          <input autocomplete="off" className="nameInput" type="text" placeholder="Sex" name="Sex" onChange={handleChange} value={formData.Sex}/>
        </div>
      </div>
      <div id="inputDiv">
        <button className="inputBts" onClick={ ()=>{setShowModal(true)} }>Record</button>
      </div>
      <button id="analyse_bt" onClick={handleSubmit}>Analyze</button>
      <Link id="linkToResult" to="/Result"></Link>
    </div>

    {showModal && 
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        setFormData={setFormData}
      />
    }
  </StyledInput>
};

export default AudioInput;
import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './components/Landing';
import FAQ from './components/FAQ';
import Team from './components/Team';
import ResultPage from './components/ResultPage';

function App() {
  const [result, setresult] = useState()
  // render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<Landing setRes={setresult}/>} exact></Route>
              <Route path="/Team" element={<Team />}></Route>
              <Route path="/FAQ" element={<FAQ />}></Route>
              <Route path="/Result" element={<ResultPage Result={result}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
// }

export default App;

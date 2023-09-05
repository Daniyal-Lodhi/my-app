import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  
  const [alert, setALert] = useState(null)
  const showAlert = (type, message) => {
    setALert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setALert(null)
    }, 2000);
  }
  const [Mode, setMode] = useState('light')
  const [txtTheme, setTxtTheme] = useState('dark')
  const removeCLass = ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls) => {
    removeCLass();
    document.body.classList.add('bg-'+cls);
    if (Mode === 'light') {
      setMode('dark')
      setTxtTheme('light')
      document.body.style.backgroundColor = 'black'
      showAlert('success ', ' Dark mode has been has been applied')
    }
    else {
      setMode('light')
      setTxtTheme('dark')
      showAlert('success ', ' Light mode has been has been applied')
      document.body.style.backgroundColor = 'white'


    }
  }
 
  return (
    <>
    
      <Router>
        
       
        <Navbar title="" mode={Mode} togglemode={toggleMode} txtTheme={txtTheme} ></Navbar>
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={
            <div className="container">
              <Form alert={showAlert} heading="Enter the text to analyze" mode = {Mode}></Form>        
            </div>
          } />
          <Route exact path="/about" element={
            
              <About mode = {Mode} togglemode={toggleMode} ></About>
          } />
          
        </Routes>
      </Router>


    </>
  );
}

export default App;

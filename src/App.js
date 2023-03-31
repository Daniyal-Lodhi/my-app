import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



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
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      setTxtTheme('light')
      showAlert('success ', ' Dark mode has been has been applied')
    }
    else {
      setMode('light')
      setTxtTheme('dark')
      showAlert('success ', ' Light mode has been has been applied')

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
              <Form alert={showAlert} heading="Enter the text to analyze"></Form>        
            </div>
          } />
          <Route exact path="/about" element={
            <div className="container">
              <About></About>
            </div>

          } />
        </Routes>
      </Router>


    </>
  );
}

export default App;

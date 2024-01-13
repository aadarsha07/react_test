import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      showAlert('Light mode has been enabled', 'success');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');
      document.body.style.backgroundColor = 'grey';
    }
  }
  return (
    <>
      <Router>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} alert={showAlert} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>


          {/* <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
          {/* <About /> */}
        </div >
      </Router>



    </>
  );
}

export default App;

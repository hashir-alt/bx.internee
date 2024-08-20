import React, { useState } from 'react';
import CrList from './components/CrList'; // Correct import
import './App.css'; // Import your CSS

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('html'); // Default to 'html'

  // Handler to change the selected language
  const handleLanguageChange = (language) => {  
    setSelectedLanguage(language);
  };

  return (
    <div className="App">
      <header>
        <h1 className='heading'> MY Learning Platform</h1>
        <nav>
          <button onClick={() => handleLanguageChange('html')}>HTML</button>
          <button onClick={() => handleLanguageChange('css')}>CSS</button>
          <button onClick={() => handleLanguageChange('javascript')}>JavaScript</button>
          <button onClick={() => handleLanguageChange('reactjs')}>ReactJS</button>
          <button onClick={() => handleLanguageChange('extra')}>Extras</button>
        </nav>
      </header>
      <main>
        <CrList language={selectedLanguage} /> {/* Use CrList here */}
      </main>
      {/* <footer>
        <img src="BXTRACK.jpeg" alt="Logo" className="logo" />
      </footer> */}
    </div>
  );
}

export default App;

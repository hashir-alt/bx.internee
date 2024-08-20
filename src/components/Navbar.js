import React from 'react';

function Navbar({ onSelectLanguage }) {
  return (
    <nav>
      <button onClick={() => onSelectLanguage('html')}>HTML</button>
      <button onClick={() => onSelectLanguage('css')}>CSS</button>
      <button onClick={() => onSelectLanguage('javascript')}>JavaScript</button>
      <button onClick={() => onSelectLanguage('reactjs')}>ReactJS</button>
      <button onClick={() => onSelectLanguage('extra')}>Extras</button>
    </nav>
  );
}

export default Navbar;

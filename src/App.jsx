import React from 'react';

import logo from './images/googlelogo_color_272x92dp.png';
import SearchBox from './components/SearchBox';
import GButton from './components/GButton';


function App() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <SearchBox />
      <GButton text="Google Search" />
      <GButton text="I'm Feeling Lucky" />
    </div>
  );
}

export default App;

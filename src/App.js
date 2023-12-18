import './App.css';
import HomeComponents from './Components/Home';
import ChooseStateComponents from './Components/ChooseState';
import React ,{ useState } from 'react';


import MATSYA from './homeimages/matsya.png';
import UserIcon from './homeimages/user.svg';
import LanguageIcon from './homeimages/lang.svg';
import HelpIcon from './homeimages/help.svg';
import Logo from './homeimages/govtlogo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <div className={`app ${isMenuOpen ? 'menu-open' : ''}`}>
      <nav className="navbar">
        <button className="menu-btn" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className="portal-name">
          <img src={MATSYA} alt="MATSYA Logo" />
          <p>MATSYA</p>
        </div>
        <div className="search-bar">
         < ChooseStateComponents / >
        </div>
        <div className="navbar-icons">
          <div className="language-button">
            <img src={LanguageIcon} alt="Language Icon" className="lang-icon" />
            <select>
              <option value="" disabled>
                Select Language
              </option>
              <option value="hindi">Hindi</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
            </select>
          </div>
          <img src={UserIcon} alt="Account Icon" className="user-icon" />
          <img src={HelpIcon} alt="Help Icon" className="help-icon" />
        </div>
      </nav>

      <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
       
        <p>Home Page</p>
        <p>Weather Forecast</p>
        <p>View Alerts</p>
        <p>Rescue and Relief Info</p>
        <p>Past Flood Warnings</p>
       
      </div>

    <div className="App">
      <HomeComponents />
    </div>

    <footer className="footer">
        <p1>Powered By </p1>
        <div className="jal-shakti">
          <p2>Ministry of Jal Shakti</p2>
          <img src={Logo} alt="Ministry Logo" />
        </div>
        <p3>© Copyright SIH’23 Inn1vation Commandos</p3>
      </footer>
    </div>


    
  );
}

export default App;
// Manifest
// Service worker
// https://
// favicon.icon
// maskable icon
// APP name
// install swr
// npx create-react-app my-app --template cra-template-pwa




























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();






// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

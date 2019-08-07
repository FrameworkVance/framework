import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';
import Logo from '../../assets/Logo.png'

const GamePage = (props) => {
  return (
    <div className="gamePageWrapper">
      <div className="boxOne"></div>
      <div className="boxTwo" >
      <div id="fuck">
        <img id="logo" src={Logo}></img>
        <div id="about"><Link style={{ textDecoration: 'none', color: 'purple'}} to='/about'>ABOUT</Link></div>
        <div id="research"><a style={{ textDecoration: 'none', color: 'purple'}} href="https://blog.framework.ventures">RESEARCH</a></div>
        <div id="tweet"><a style={{ textDecoration: 'none', color: 'purple'}} href="https://twitter.com/hiFramework" class="fa fa-twitter"></a></div>
        </div>
        </div>
      <div className="boxThree"></div>
    </div>
  );
};

export default GamePage;
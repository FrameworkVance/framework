import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import './HomePage.css';

const GamePage = (props) => {
  return (
    <div className="gamePageWrapper">
      <div id="boxes">
        <div><Link style={{ textDecoration: 'none', color: 'rgb(230,230,250)'}} to='/Login'>About</Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'rgb(230,230,250)'}} to='/Signup'>Signup</Link></div>
      </div>
      <div className="boxOne"></div>
      <div className="boxTwo" >
        <div id="fwv">Framework Ventures</div>
        <div id="about"><Link style={{ textDecoration: 'none', color: 'purple'}} to='/about'>About</Link></div>
        {/* <div id="research"><Link style={{ textDecoration: 'none', color: 'purple'}} id to='/settings'>Research</Link></div> */}
        <div id="tweet"><a style={{ textDecoration: 'none', color: 'purple'}} href="https://twitter.com/hiFramework" class="fa fa-twitter"></a></div>
        </div>
      <div className="boxThree"></div>
    </div>
  );

};

export default GamePage;
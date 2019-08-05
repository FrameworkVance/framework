import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import './HomePage.css';

const GamePage = (props) => {
  return (
    <div className="gamePageWrapper">
      <div id="boxes">
      </div>
      <div className="boxOne"></div>
      <div className="boxTwo" >
        <div id="fwv">Framework Ventures</div>
        <div id="about"><Link style={{ textDecoration: 'none', color: 'purple'}} to='/high-scores'>About</Link></div>
        {/* <div id="research"><Link style={{ textDecoration: 'none', color: 'purple'}} id to='/settings'>Research</Link></div> */}
        <div id="tweet"><a style={{ textDecoration: 'none', color: 'purple'}} href="#" class="fa fa-twitter"></a></div>
        </div>
      <div className="boxThree"></div>
    </div>
  );

};

export default GamePage;
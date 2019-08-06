import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

class HighScoresPage extends Component {

  render() {
  
    return (
      <div id="aboutWrapper">
        <div id="leftmarginSection"></div>
        <div id="titleSection">
          <div id="aboutFW"><Link to='/' style={{ textDecoration: 'none', color: 'purple'}}>Framework Ventures</Link></div>
          <div id="aboutTweet"><a style={{ textDecoration: 'none', color: 'purple'}} href="https://twitter.com/hiFramework" class="fa fa-twitter"></a></div> 
          </div>
        <div id="aboutSection">
          <div className="title">About</div>
          <p>Framework Ventures invests in disruptive, pragmatic blockchain networks. Framework Labs builds consumer experiences </p>
          </div>        
        <div id="teamSection">
        <div className="title">Team</div>
          <p>Vance Spencer and Michael Anderson founded Framework in 2017, before starting Hashletes, a blockchain-based NFL digital collectibles platform backed by Khosla Ventures. Prior to working together in crypto, the pair worked in Product Management and Corporate Strategy at Snapchat, Netflix and Dropbox</p></div>        
        <div id="portfolioSection">
        <div className="title">Writings</div>
          <ul>
            <li> <a href="https://medium.com/@framework_v/https-medium-com-signal-capital-our-investment-in-chainlink-15ab90ee9c02">Chainlink</a></li>
            </ul>        
            </div>
            <div id="info"> 
            <div id="hello">hello:</div> <a id="info" href="mailto:info@framework.ventures">info@framework.ventures</a>
            </div>
        <div id="rightmarginSection"></div>           
      </div>
    );
  }

}

export default HighScoresPage;

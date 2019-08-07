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
          <p>Framework is a team of technologists, researchers and investors who buy assets of, who build for, and who participate in open crypto networks. We believe that blockchain technology and the decentralized web represent the next major paradigm of computational technology. Unlike any capital asset class we’ve seen before, blockchain-based, cryptographic digital assets are unique in myriad ways, and as such the pre-existing models for evaluation, investment and support don’t fit. That’s where we come in.</p>
          </div>        
        <div id="teamSection">
        <div className="title">Team</div>
          <p>Vance Spencer and Michael Anderson founded Framework in 2017, before starting Hashletes, a blockchain-based NFL digital collectibles platform backed by Khosla Ventures. Prior to working together in crypto, the pair worked in Product Management and Corporate Strategy at Snapchat, Netflix and Dropbox</p></div>        
            <div id="info"> 
            <div id="hello">hello:</div> <a id="info" href="mailto:info@framework.ventures">info@framework.ventures</a>
            </div>
        <div id="rightmarginSection"></div>           
      </div>
    );
  }

}

export default HighScoresPage;

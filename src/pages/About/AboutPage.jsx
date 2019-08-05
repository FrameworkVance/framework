import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

class HighScoresPage extends Component {

  render() {
  
    return (
      <div id="aboutWrapper">
        <div id="leftmarginSection"></div>
        <div id="titleSection">
          <div id="aboutFW">Framework Ventures</div>
          <div id="aboutTweet"><a style={{ textDecoration: 'none', color: 'purple'}} href="#" class="fa fa-twitter"></a></div> 
          </div>
        <div id="aboutSection">
          <div className="title">About</div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
          </div>        
        <div id="teamSection">
        <div className="title">Team</div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p></div>        
        <div id="portfolioSection">
        <div className="title">Writings</div>
          <ul>
            <li> Framework</li>
            </ul>        
            </div>
            <div id="info">info@framework.ventures</div>
        <div id="rightmarginSection"></div>           
      </div>
    );
  }

}

export default HighScoresPage;

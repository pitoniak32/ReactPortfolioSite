import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav/Nav';
import ShowCase from './ShowCase/ShowCase';
import WebsiteTitle from './WebsiteTitle/WebsiteTitle';
import Blurb from './Blurb/Blurb';
import './App.css';

library.add(fab, faGithub, faLinkedin, faEnvelopeOpen);

class App extends Component {
  render() {
    return (
      <div className="App">
        <WebsiteTitle title='David Pitoniak' />
        <Blurb contentText="Hello, My name is David, I'm currently a student at Onondaga Community College working towards my Associates in Computer Science. 
                            In the fall of 2019 I will be transferring to Rochester Institute of Technology for my Bachelors. 
                            I've taken courses in Java, C++, MySQL and Assembly Language(MIPS) and enjoy writing code as well as learning new technologies. 
                            Currently I've been intrigued by React.js development and I created this website to get some practice as well as Have a place to keep my portfolio."/>
        <Nav />
        <ShowCase />
      </div>
    );
  }
}

export default App;
//<ShowCase />
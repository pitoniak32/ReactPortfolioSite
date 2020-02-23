import React, { Component } from 'react';

import Nav from './Nav/Nav';
//import ShowCase from './ShowCase/ShowCase';
import WebsiteTitle from './WebsiteTitle/WebsiteTitle';
import Blurb from './Blurb/Blurb';
import './App.css';

// Icon imports from font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGithub, faLinkedin, faHandshake);

var blurbContent = "I am currently a Computer Science student at Rochester Institute of Technology. " +
                   "I enjoy writing code and learning new technologies to expand my knowledge in software. " +
                   "I have also taken an interest in Arch Linux and i3 window manager and have been experimenting " +
                   "with different distributions. I have written a few personal projects for practice including this " + 
                   "website. I am always prepared and excited to learn new things.";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WebsiteTitle title='David Pitoniak' />
        <Blurb contentText={blurbContent} />
        <Nav />
      </div>
    );
  }
}
export default App;
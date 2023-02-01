import React from "react";

import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import Tesla from './assets/Tesla_Clone.jpg';
import ReactIcon from './assets/reactjs-icon.svg';
import CSSIcon from './assets/css-3-icon.svg';
import HTMLIcon from './assets/html5-icon.svg';
import JavascriptIcon from './assets/javascript-icon.svg';
import PythonIcon from './assets/python-icon.svg';
import DotNetIcon from './assets/dotnet-icon.svg';


function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Proficient with: </h2>

        <div class="row">
          <div class="column"><img src = {HTMLIcon}/></div>
          <div class="column"><img src = {CSSIcon}/></div>
          <div class="column"><img src = {JavascriptIcon}/></div>
        </div>

        <div class="row">
          <div class="column"><img src = {ReactIcon}/></div>
          <div class="column"><img src = {PythonIcon}/></div>
          <div class="column"><img src = {DotNetIcon}/></div>
        </div>

        <h2>You might like</h2>
        <h2>[these skills]</h2>
        <h2>#DetailOriented</h2>
        <h2>Highly organized with careful attention to detail and ability to prioritize effectively to manage multiple concurrent projects</h2>
        <h2>#RemoteWorker</h2>
        <h2>Comfortable working remotely with stakeholders across time zones.</h2>
        <h2>#Motivated</h2>
        <h2>Quick learner, self-starter, and adaptable to situations.</h2>
        <h2>#Communicator</h2>
        <h2>Strong written and verbal communication skills.</h2>
      </div>
    </div>
  );
}

export default Widgets;

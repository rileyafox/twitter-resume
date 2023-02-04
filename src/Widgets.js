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

        <div className="widgets__iconContainer">
          <h3>Proficient with: </h3>

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
        </div>

        <div className="widgets__textContainer">
          <h3>You might like [these skills] </h3>
          <div className="widgets__skillBlockContainer">
            <h3>#DetailOriented</h3>
            <p>Highly organized with careful attention to detail and ability to prioritize effectively to manage multiple concurrent projects</p>
          </div>
          <div className="widgets__skillBlockContainer">
            <h3>#RemoteWorker</h3>
            <p>Comfortable working remotely with stakeholders across time zones.</p>
          </div>
          <div className="widgets__skillBlockContainer">
            <h3>#Motivated</h3>
            <p>Quick learner, self-starter, and adaptable to situations.</p>
          </div>
          <div className="widgets__skillBlockContainer">
            <h3>#Communicator</h3>
            <p>Strong written and verbal communication skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;

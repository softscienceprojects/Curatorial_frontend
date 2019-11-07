import React from "react";
//import { Player,ControlBar } from 'video-react'
import ReactPlayer from 'react-player'

const HomePanel2 = props => {
  return (
  <div className="home-panels">
    (middle panel - full image background)
    {/* <Player playing={true} autoPlay={true} loop={true} width="100%" src="https://media.giphy.com/media/3rgXBBs5EAc8BIMD7i/giphy.mp4">
    <ControlBar autoHide={true} display="none" />
    </Player> */}
    <ReactPlayer url="https://media.giphy.com/media/3rgXBBs5EAc8BIMD7i/giphy.mp4" playing loop="true" width="100vw" />
    <h4>Discover shows curated by other users</h4>
  </div>
  );
};

export default HomePanel2;

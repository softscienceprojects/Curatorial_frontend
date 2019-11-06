import React from "react";
import { Player,ControlBar } from 'video-react'

const HomePanel2 = props => {
  return (<div>
    (middle panel - full image background)
    <Player autoPlay src="https://media.giphy.com/media/3rgXBBs5EAc8BIMD7i/giphy.mp4">
    <ControlBar display="none" autoHide={true} />
    </Player>
    <h4>Discover shows curated by other users</h4>
  </div>
  );
};

export default HomePanel2;

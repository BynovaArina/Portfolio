import React from "react";
import './Video.scss';

const Video = () => {
  return (
    <div className="video">
      <div className="video-block">
        <h2 className="video-block__title">Video</h2>
        <div className="video-block__video">
          <img className="video-block__video-image" src="assets/video/background.png"/>
          <img className="video-block__video-logo" src="assets/video/play_hover.png"/>
        </div>
      </div>
    </div>
  );
}
export default Video;
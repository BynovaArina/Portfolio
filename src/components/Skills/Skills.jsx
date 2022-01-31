import React from "react";
import './Skills.scss';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-block">
        <h2 className="skills-block__title">Skills</h2>
        <div className="skills-block__info">
          <div className="skills-block__info-item">
            <img src="assets/skills/camera.png" className="skills-block__info-item__icon"></img>
            <h2 className="skills-block__info-item__title">
              Digital photography
            </h2>
            <p className="skills-block__info-item__description">
              High-quality photos in the studio and on the nature
            </p>
          </div>
          <div className="skills-block__info-item">
            <img src="assets/skills/video.png" className="skills-block__info-item__icon"></img>
            <h2 className="skills-block__info-item__title">
              Video shooting
            </h2>
            <p className="skills-block__info-item__description">
              Capture your moments so that they always stay with you
            </p>
          </div>
          <div className="skills-block__info-item">
            <img src="assets/skills/image.png" className="skills-block__info-item__icon"></img>
            <h2 className="skills-block__info-item__title">
              Retouch
            </h2>
            <p className="skills-block__info-item__description">
              I strive to make photography surpass reality
            </p>
          </div>
          <div className="skills-block__info-item">
            <img src="assets/skills/micro.png" className="skills-block__info-item__icon"></img>
            <h2 className="skills-block__info-item__title">
              Audio
            </h2>
            <p className="skills-block__info-item__description">
              Professional sounds recording for video, advertising, portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
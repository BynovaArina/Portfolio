import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-block">
        <p className="footer-block__info">©&nbsp;2022&nbsp;github</p>
        <p className="footer-block__title">Rolling Scopes School</p>
        <div className="footer-block__icon">
            <img src="assets/footer/inst.png"/>
            <img src="assets/footer/fb.png"/>
            <img src="assets/footer/tw.png"/>
            <img src="assets/footer/pinterest.png"/>
        </div>
      </div>
    </div>
  );
}
export default Footer;
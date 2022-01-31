import React from "react";
import './Header.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="header-block">
				<img src="assets/header/logo.png" className="header-block__icon"></img>
				<div className="header-block__link">
					<a className="header-block__link-item">
						Skills
					</a>
					<a className="header-block__link-item">
						Portfolio
					</a>
					<a className="header-block__link-item">
						Video
					</a>
					<a className="header-block__link-item">
						Price
					</a>
					<a className="header-block__link-item">
						Contacts
					</a>
				</div>
			</div>
			<div className="header-block__info">
				<h2 className="header-block__info-title">
					Alexa Rise
				</h2>
				<p className="header-block__info-description">
					Save sincere emotions, romantic feelings and
					happy moments of life together with professional
					photographer Alexa Rise
				</p>
				<button className="header-block__info-button">
					Hire me
				</button>
			</div>
		</div>
	);
}
export default Header;
import React from "react";
import './Contacts.scss';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-block">
        <div className="contacts-block__form">
            <h2 className="contacts-block__form-title">Contact me</h2>
            <input placeholder="E-mail" className="contacts-block__form-input"></input>
            <input placeholder="Phone" className="contacts-block__form-input"></input>
            <input placeholder="Message" className="contacts-block__form-input"></input>
            <button className="contacts-block__form-btn">Send message</button>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
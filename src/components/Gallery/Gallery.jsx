import React from "react";
import './Gallery.scss';

    const Gallery = () => {
        return (
            <div className="gallery">
                <div className="gallery-block">
                    <h2 className="gallery-block__title">Portfolio</h2>
                    <div className="gallery-block__tabs">
                        <button className="gallery-block__tabs-item">Winter</button>
                        <button className="gallery-block__tabs-item">Spring</button>
                        <button className="gallery-block__tabs-item">Summer</button>
                        <button className="gallery-block__tabs-item">Autumn</button>
                    </div>
                    <div className="gallery-block__image">
                        <img className="gallery-block__image-item" src="assets/gallery/love.png"></img>
                        <img className="gallery-block__image-item" src="assets/gallery/horse.png"></img>
                        <img className="gallery-block__image-item" src="assets/gallery/child.png"></img>
                        <img className="gallery-block__image-item" src="assets/gallery/nature.png"></img>
                        <img className="gallery-block__image-item" src="assets/gallery/family.png"></img>
                        <img className="gallery-block__image-item" src="assets/gallery/photo.png"></img>
                    </div>
                </div>
            </div>
        );
    }
export default Gallery;
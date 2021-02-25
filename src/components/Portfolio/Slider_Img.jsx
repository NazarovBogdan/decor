import React from 'react';
import s from './SCSS/Portfolio.module.scss'; 

const Slider_img = (props) => {

    const imageItem = new Image();
    imageItem.src = props.image;

    return ( 
        <div className={s.image_desctop}>
            <img src={imageItem.src} alt="" className={s.image_desctop}/> 
        </div>
    )
};

export default Slider_img;
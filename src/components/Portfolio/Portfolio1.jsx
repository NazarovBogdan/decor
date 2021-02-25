import React, { useEffect, useState } from 'react';
import s from './SCSS/Portfolio.module.scss'; 
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slider_img from './Slider_Img'
import Mobile_Slider_Img from './Mobile_Slider_Img'                                      

const Portfolio1 = (props) => {

  


    const slider_images = props.slider_images.filter(i=> i.id > 0 && i.id < 24).map(i => <Slider_img key={i.id} 
                                                                image={i.image}/>)

    const slider_images_mobile = props.slider_images.filter(i=> i.id > 0 && i.id < 24).map(i => <Mobile_Slider_Img key={i.id} 
                                                                    image={i.image}/>)
        

    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    const imageItem = new Image();
    imageItem.src = props.image;

    const properties = {
        indicators: true,
        arrows: false,
        duration: 1000
    }

    const properties_mobile = {
        indicators: true,
        arrows: true,
        duration: 2000
    }

    const openModal = () => {
        props.openModal()
    }

return ( 
    <div>
        <div className={s.about_us}>
            <div className={s.content}>
                <div className={s.container_slide}>
                    <Slide {...properties}>
                        {slider_images}
                    </Slide>
                </div>
                <div>
                    <p className={s.text_fon}>portfolio</p>
                    <div className={s.title}>
                        <a data-aos-anchor-placement="top-bottom" name="aboutUs" className={s.title_text}>{props.aboutUS.title}</a>
                    </div>
                    <div className={s.desc}>
                        <p className={s.desc_text}>{props.aboutUS.description}</p>
                    </div>
                    <div className={s.open_portfolio}>
                        <button onClick={openModal} className={s.button_open_portfolio}>
                            Смотреть кейс         
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className={s.mobile}>
                <div className={s.container_slide_mobile}>
                    <Slide {...properties_mobile}>
                        {slider_images_mobile}
                    </Slide>
                </div>
                <div className={s.open_portfolio_mobile}>
                    <button onClick={openModal} className={s.button_open_portfolio}>
                        Смотреть кейс         
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Portfolio1;
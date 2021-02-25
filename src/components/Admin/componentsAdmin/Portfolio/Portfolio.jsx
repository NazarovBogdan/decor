import React, { useState } from 'react';
import s from './SCSS/Portfolio.module.scss'; 
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import closeButton from '../../../../assets/images/closeButton.png'
import Slider_img from './Slider_Img'

const Portfolio = (props) => {

    const slider_images = props.slider_images.map(i => <Slider_img key={i.id} 
                                                                    image={i.image}
                                                                    changeSliderImgThunk={props.changeSliderImgThunk}
                                                                    id={i.id} />)

    const properties = {
        indicators: true,
        arrows: false,
        autoplay: false
    }

    const properties_active = {
        indicators: false,
        arrows: true,
        autoplay: false
    }

    const properties_mobile = {
        indicators: true,
        arrows: true,
        autoplay: false
    }

    const [editModal, setEditModal] = useState(false)

    const openModal = () => {
        setEditModal(true);
    }

    const closeModal = (e) => {
        setEditModal(false);
    }

return ( 
    <div>
        {editModal &&
            <div className={s.slider_active_container}>
                 <div className={s.container_button_close}>
                    <button onClick={closeModal}  className={s.button_close_modal}>
                        <img src={closeButton} alt=""/>
                    </button>
                </div>
                <div className={s.slider_container_modal}>
                    <Slide {...properties_active}>
                        {slider_images}
                    </Slide>
                    <p className={s.slider_text}>Каждому стилю присущие основные особенности, которые должен учитывать дизайнер. Это своего рода 
каркас, на котором держится каждый уникальный дизайн-проект конкретного интерьера. </p>
                </div>
            </div>
        }
        {!editModal &&
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
                            {slider_images}
                        </Slide>
                    </div>
                    <div className={s.open_portfolio_mobile}>
                        <button onClick={openModal} className={s.button_open_portfolio}>
                            Смотреть кейс         
                        </button>
                    </div>
                </div>
            </div>
        }    
    </div>
    
  )
};

export default Portfolio;
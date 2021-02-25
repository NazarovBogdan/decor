import React, { useEffect, useState } from 'react';
import s from './SCSS/Portfolio.module.scss'; 
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Field, reduxForm } from 'redux-form';
import icon_submit from "../../assets/images/comm_submit_img.png"
import closeButton from '../../assets/images/closeButton.png'
import Slider_img from './Slider_Img'
import Mobile_Slider_Img from './Mobile_Slider_Img'

const ChangeTitleTextForm = (props) => {
    return (
        <form className={s.form_container} onSubmit={props.handleSubmit}>
            <Field 
            name="commText"
            component="input" 
            className={s.input_comm}
            placeholder="Ваш комментарий..."/>
            <button className={s.button_submit}>
                <img src={icon_submit} alt=""/>
            </button>
        </form>
    )
}

const ChangeTitleTextFormRecord = reduxForm({form: "comment"})(ChangeTitleTextForm);
                                           


const Portfolio = (props) => {

    const onSubmitTitle = (formData) =>{
        console.log(formData);
        const text = formData.commText
        const DATA = new FormData
        DATA.append("comm", text)
        props.getMailCommThunk(DATA)
    }  

    const slider_images2 = props.slider_images.filter(i=> i.id > 23 ).map(i => <Slider_img key={i.id} 
        image={i.image}/>)

    const slider_images_mobile2 = props.slider_images.filter(i=> i.id > 23 ).map(i => <Mobile_Slider_Img key={i.id} 
            image={i.image}/>)


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

    const properties_active = {
        indicators: false,
        arrows: true,
        duration: 1000
    }

    const properties_mobile = {
        indicators: true,
        arrows: true,
        duration: 2000
    }

    const [editModal, setEditModal] = useState(false)

    const openModal = () => {
        setEditModal(true);
    }

    const closeModal = (e) => {
        setEditModal(false);
    }

    const [editModal2, setEditModal2] = useState(false)

    const openModal2 = () => {
        setEditModal2(true);
    }

    const closeModal2 = (e) => {
        setEditModal2(false);
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
                        {slider_images_mobile}
                    </Slide>
                    <p className={s.slider_text}>Каждому стилю присущие основные особенности, которые должен учитывать дизайнер. Это своего рода 
каркас, на котором держится каждый уникальный дизайн-проект конкретного интерьера. </p>
                    <ChangeTitleTextFormRecord props={props}   onSubmit={onSubmitTitle}/>
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
        }
        {editModal2 &&
            <div className={s.slider_active_container}>
                 <div className={s.container_button_close}>
                    <button onClick={closeModal2}  className={s.button_close_modal}>
                        <img src={closeButton} alt=""/>
                    </button>
                </div>
                <div className={s.slider_container_modal}>
                    <Slide {...properties_active}>
                        {slider_images_mobile2}
                    </Slide>
                    <p className={s.slider_text}>Каждому стилю присущие основные особенности, которые должен учитывать дизайнер. Это своего рода 
каркас, на котором держится каждый уникальный дизайн-проект конкретного интерьера. </p>
                    <ChangeTitleTextFormRecord props={props}   onSubmit={onSubmitTitle}/>
                </div>
            </div>
        }
        {!editModal2 &&
            <div className={s.about_us}>
                <div className={s.content}>
                    <div>
                        <p className={s.text_fon}>portfolio</p>
                        <div className={s.title}>
                            <a data-aos-anchor-placement="top-bottom" name="aboutUs" className={s.title_text}>{props.aboutUS2.title}</a>
                        </div>
                        <div className={s.desc}>
                            <p className={s.desc_text}>{props.aboutUS2.description}</p>
                        </div>
                        <div className={s.open_portfolio}>
                            <button onClick={openModal2} className={s.button_open_portfolio}>
                                Смотреть кейс         
                            </button>
                        </div>
                        
                    </div>
                    <div className={s.container_slide}>
                        <Slide {...properties}>
                            {slider_images2}
                        </Slide>
                    </div>
                </div>
                <div className={s.mobile}>
                    <div className={s.container_slide_mobile}>
                        <Slide {...properties_mobile}>
                            {slider_images_mobile2}
                        </Slide>
                    </div>
                    <div className={s.open_portfolio_mobile}>
                        <button onClick={openModal2} className={s.button_open_portfolio}>
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
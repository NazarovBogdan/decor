import React, { useState } from 'react';
import s from './SCSS/Portfolio.module.scss'; 
import '../../../node_modules/aos/dist/aos.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Portfolio1 from "./Portfolio1"
import Portfolio2 from "./Portfolio2"
import { Field, reduxForm } from 'redux-form';
import icon_submit from "../../assets/images/comm_submit_img.png"
import closeButton from '../../assets/images/closeButton.png'
import Slider_img_Active from './Mobile_Slider_ImgActvie'

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
                                           

const PortfolioCon = (props) => {

    const slider_images_mobile2 = props.slider_images.filter(i=> i.id > 23 ).map(i => <Slider_img_Active key={i.id} 
        image={i.image}/>)

    const slider_images_mobile1 = props.slider_images.filter(i=> i.id > 0 && i.id < 24).map(i => <Slider_img_Active key={i.id} 
        image={i.image}/>)

    const onSubmitTitle = (formData) =>{
        console.log(formData);
        const text = formData.commText
        const DATA = new FormData
        DATA.append("comm", text)
        props.getMailCommThunk(DATA)
    }  

    const properties = {
        indicators: true,
        arrows: false,
        autoplay: false
    }

    const properties_active = {
        indicators: false,
        arrows: true,
        duration: 1000
    }

    const [editModal, setEditModal] = useState(0);

    const openModal1 = () => {
        setEditModal(1);
    }

    const openModal2 = () => {
        setEditModal(2);
    }

    const closeModal = () => {
        setEditModal(0);
    }

return ( 
    <div>
        {editModal === 1 &&
            <div className={s.slider_active_container}>
                 <div className={s.container_button_close}>
                    <button onClick={closeModal}  className={s.button_close_modal}>
                        <img src={closeButton} alt=""/>
                    </button>
                </div>
                <div className={s.slider_container_modal}>
                    <Slide {...properties_active}>
                        {slider_images_mobile1}
                    </Slide>
                    <p className={s.slider_text}>Каждому стилю присущие основные особенности, которые должен учитывать дизайнер. Это своего рода 
каркас, на котором держится каждый уникальный дизайн-проект конкретного интерьера. </p>
                    <ChangeTitleTextFormRecord props={props}   onSubmit={onSubmitTitle}/>
                </div>
            </div>
        }
        {editModal === 2 &&
            <div className={s.slider_active_container}>
                 <div className={s.container_button_close}>
                    <button onClick={closeModal}  className={s.button_close_modal}>
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
        {editModal === 0 &&
            <div className={s.slider_portfolios}>
                <p className={s.titleName_text}>Наши портфолио</p>
                <Slide {...properties}>
                    <Portfolio1  aboutUS={props.aboutUS}
                                aboutUS2={props.aboutUS2} 
                                slider_images={props.slider_images}
                                getMailCommThunk={props.getMailCommThunk} 
                                openModal={openModal1}/>
                    <Portfolio2 
                                aboutUS={props.aboutUS}
                                aboutUS2={props.aboutUS2} 
                                slider_images={props.slider_images}
                                getMailCommThunk={props.getMailCommThunk}
                                openModal={openModal2}/>
                </Slide>
            </div>
        }
    </div>
    
      
    
    
  )
};

export default PortfolioCon;
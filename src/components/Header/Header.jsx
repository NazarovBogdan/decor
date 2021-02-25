import React, { useEffect, useState } from 'react';
import s from './SCSS/Header.module.scss';
import burg from '../../assets/images/burg.png';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import closeButton from '../../assets/images/closeButton.png';
import { Field, reduxForm } from 'redux-form';

const Header = (props) => {
  const desctopImage = new Image();
  desctopImage.src = props.imageDesctop.image;
  const mobileImage = new Image();
  mobileImage.src = props.imageMobile.image;
  useEffect(() => {
    Aos.init({duration: 3000});
}, []);

  const [editBurg, setEditBurg] = useState(false)

  const clikBurg = () => {
    setEditBurg(true);
  }

  const clikClose = () => {
    setEditBurg(false);
  }

  const [editOrder, setEditOrder] = useState(false)

  const clikButtonOrder = () => {
    setEditOrder(true);
  }

  const onSubmit = (formData) => {
    const name = formData.Name
    const phone = formData.Phone
    const mail = formData.Email
    const DATA = new FormData();
    DATA.append('name', name);
    DATA.append('phone', phone);
    DATA.append('mail', mail);
    props.getMailThunk(DATA);
    setEditOrder(false);
}

  return ( 
    <div className={s.header} >
      <div className={s.img_fon} style={{backgroundImage: "url(" + desctopImage.src + ")"}}></div>
      <div className={s.img_fon_desctop} style={{backgroundImage: "url(" + mobileImage.src + ")"}}></div>
      {editBurg &&
            <div className={s.anchors_link}>
              <button onClick={clikClose} className={s.closeButton}>
                <img src={closeButton} className={s.closeImg} alt=""/>
              </button>
              <a href="#aboutUs" className={s.lint_text}>О НАС</a>
              <a href="#portfolio" className={s.lint_text}>ПОРТФОЛИО</a>
              <a href="#stages" className={s.lint_text}>УСЛУГИ И ЦЕНЫ</a>
              <a href="#contact" className={s.lint_text}>КОНТАКТЫ</a>
            </div> 
      }
      <div className={s.header_top}>
        <div className={s.header_content}>
          <div className={s.header_nav}>
            <a href="#aboutUs" className={s.lint_text}>О НАС</a>
            <a href="#portfolioDesc" className={s.lint_text}>ПОРТФОЛИО</a>
            <a href="#stages" className={s.lint_text}>УСЛУГИ И ЦЕНЫ</a>
            <a href="#contact" className={s.lint_text}>КОНТАКТЫ</a>
          </div>
          {!editBurg &&
            <button onClick={clikBurg} className={s.burger}>
              <img src={burg} alt=""/>
            </button> 
          }
        </div>
      </div>
      {editOrder &&
            <ContactReduxForm onSubmit={onSubmit}/>
      }
      <div className={s.content_preview}>
      
        <div className={s.content_preview_text}>
          <h1 className={s.title}>{props.props.title}</h1>
          <h2 className={s.desc}>{props.props.description}</h2>
        </div>
        
        <div className={s.content_preview_button}>
          <button onClick={clikButtonOrder} className={s.order_project_button}>Заказать проект</button>
        </div>
      </div>
    </div>
      
  )
};

const ContactForm = (props) => {
  return (
    <div className={s.container_form}>
        <form  onSubmit={props.handleSubmit} className={s.contact_form}>
            <h1 className={s.h1_form}>Заказать проект</h1>
              <div className={s.form_text__input}>
                  <label htmlFor="name" className={s.form_label}>Имя</label>
                  <Field name={"Name"} component={"input"} id="name" className={s.form_input}/>
              </div> 
              <div className={s.form_text__input}>
                  <label htmlFor="phone" className={s.form_label}>Телефон</label>
                  <Field name={"Phone"} component={"input"} id="phone" className={s.form_input}/>
              </div>
              <div className={s.form_text__input}>
                  <label htmlFor="email" className={s.form_label}>Email</label>
                  <Field name={"Email"} component={"input"} id="email" className={s.form_input}/>
              </div>  
              <button className={s.form_submit}>Отправить</button> 
          </form>
    </div>
  )
}

const ContactReduxForm = reduxForm({form: "contact"})(ContactForm);

export default Header;
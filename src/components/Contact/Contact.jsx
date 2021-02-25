import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './SCSS/Contact.module.scss';
import icon4 from '../../assets/images/adress2.png';
import icon6 from '../../assets/images/mail2.png';
import icon5 from '../../assets/images/phone2.png';
import FB from '../../assets/images/wats(1).png'
import WP from '../../assets/images/wats(2).png'
import IG from '../../assets/images/wats(3).png'


const Contact = (props) => {
    
    const onSubmit = (formData) => {
        const name = formData.Name
        const phone = formData.Phone
        const mail = formData.Email
        const DATA = new FormData();
        DATA.append('name', name);
        DATA.append('phone', phone);
        DATA.append('mail', mail);
        props.getMailThunk(DATA);
    }
    const desctopImage = new Image();
    desctopImage.src = props.imageDesctop.image;
    const mobileImage = new Image();
    mobileImage.src = props.imageMobile.image;
  return ( 
      <div className={s.contact}>
           <img src={mobileImage.src} alt="" className={s.fon}/>
          <img src={desctopImage.src} alt="" className={s.fon2}/>
          <div className={s.container}>
              <div className={s.contacts}>
                <a name="contact" className={s.title}>Контакты</a>
                <p className={s.contact_name}>{props.contact[0].description}</p>
                <div className={s.cotact_list}>
                    <img src={icon4} alt="" className={s.contact_icon}/>
                    <p className={s.contact_text}>{props.contact[1].description}</p>
                </div>
                <div className={s.cotact_list}>
                    <img src={icon5} alt="" className={s.contact_icon}/>
                    <a href={"tel:" + props.contact[2].description} className={s.contact_text}>{props.contact[2].description}</a>
                </div>
                <div className={s.cotact_list}>
                    <img src={icon6} alt="" className={s.contact_icon}/>
                    <a href={"mailto:" + props.contact[3].description} className={s.contact_text}>{props.contact[3].description}</a>
                </div>
                <div className={s.social_icons}>
                    <a href={props.contact[4].description} target="_blank">
                        <img src={FB} alt="" />
                    </a>
                    <a href={props.contact[5].description} target="_blank">
                        <img src={WP} alt="" />
                    </a>
                    <a href={props.contact[6].description} target="_blank">
                        <img src={IG} alt=""/>
                    </a>
                </div>
              </div>
              <ContactReduxForm onSubmit={onSubmit}/>
          </div>
      </div>
        
  )
};

const ContactForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit} className={s.contact_form}>
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
                <button className={s.form_submit}>Оставить заявку</button> 
            </form>
    )
}

const ContactReduxForm = reduxForm({form: "contact"})(ContactForm);

export default Contact;
import React from 'react';
import s from './SCSS/Contact.module.scss';
import icon4 from '../../../../assets/images/adress2.png';
import icon6 from '../../../../assets/images/mail2.png';
import icon5 from '../../../../assets/images/phone2.png';
import {DescForm} from '../../../../hoc/ReduxFormDesc';
import {ReduxFormImg} from '../../../../hoc/ReduxFormImg';

const Contact = (props) => {

    const desctopImage = new Image();
    desctopImage.src = props.imageDesctop.image;
    const mobileImage = new Image();
    mobileImage.src = props.imageMobile.image;
    
    const ChangeNameTextFormRecord = "ChangeNameText"
    const ChangePhoneTextFormRecord = "ChangePhoneText"
    const ChangeMailTextFormRecord = "ChangeMailText"
    const ChangeAdressTextFormRecord = "ChangeAdressText"

    const onSubmit = (formData) => {
        console.log(formData);
    }

  return ( 
      <div className={s.contact}>
            <img src={mobileImage.src} alt="" className={s.fon}/>
            <img src={desctopImage.src} alt="" className={s.fon2}/>
            <div className={s.container}>
              <div className={s.contacts}>
                <a name="contact" className={s.title}>Контакты</a>
                <ReduxFormImg props={props.imageDesctop} text={"Изменить изображение для компьютера"} formTitleName="ChangeImgDesctopContactForm" changeImgThunk={props.changeImgThunk}/>
                <ReduxFormImg props={props.imageMobile} text={"Изменить изображение для телефона"} formTitleName="ChangeImgMobileContactForm" changeImgThunk={props.changeImgThunk}/>
                <DescForm props={props.contact[0]} formDescName={ChangeNameTextFormRecord} changeDescThunk={props.changeDescThunk}/>
                <div className={s.cotact_list}>
                    <img src={icon4} alt="" className={s.contact_icon}/>
                    <img src={icon4} alt="" className={s.contact_icon_desctop}/>
                    <DescForm props={props.contact[1]} formDescName={ChangeAdressTextFormRecord} changeDescThunk={props.changeDescThunk}/>
                </div>
                <div className={s.cotact_list}>
                    <img src={icon5} alt="" className={s.contact_icon}/>
                    <img src={icon5} alt="" className={s.contact_icon_desctop}/>
                    <DescForm props={props.contact[2]} formDescName={ChangePhoneTextFormRecord} changeDescThunk={props.changeDescThunk}/>
                </div>
                <div className={s.cotact_list}>
                    <img src={icon6} alt="" className={s.contact_icon}/>
                    <img src={icon6} alt="" className={s.contact_icon_desctop}/>
                    <DescForm props={props.contact[3]} formDescName={ChangeMailTextFormRecord} changeDescThunk={props.changeDescThunk}/>
                </div>
              </div>
          </div>
      </div>
        
  )
};

export default Contact;
import React from 'react';
import s from './SCSS/Header.module.scss';
import burg from '../../../../assets/images/burg.png';
import {TitleForm} from '../../../../hoc/ReduxFormTitle';
import {DescForm} from '../../../../hoc/ReduxFormDesc';
import {ReduxFormImg} from '../../../../hoc/ReduxFormImg';

const Header = (props) => {
  const desctopImage = new Image();
  desctopImage.src = props.imageDesctop.image;
  const mobileImage = new Image();
  mobileImage.src = props.imageMobile.image;

  const formTitleName = "HeaderChangeTitleText"
  const formDescName = "HeaderChangeDescText"


  return ( 
    <div className={s.header}>
      <img className={s.img_fon} src={desctopImage.src} alt=""/>
      <img className={s.img_fon_desctop} src={mobileImage.src} alt=""/>

      <div className={s.header_top}>
        <div className={s.header_content}>
          <div className={s.header_nav}>
            <a href="#aboutUs" className={s.lint_text}>О НАС</a>
            <a href="#portfolioDesc" className={s.lint_text}>ПОРТФОЛИО</a>
            <a href="#stagesDesc" className={s.lint_text}>УСЛУГИ И ЦЕНЫ</a>
            <a href="#contact" className={s.lint_text}>КОНТАКТЫ</a>
          </div>
          <button className={s.burger}>
            <img src={burg} alt=""/>
          </button> 
        </div>
          
      </div>
      <div className={s.content_preview}>
        <div className={s.content_preview_text}>
          <TitleForm props={props.props} formTitleName={formTitleName} changeTitleThunk={props.changeTitleThunk}/>
          <DescForm props={props.props} formDescName={formDescName} changeDescThunk={props.changeDescThunk}/>
        </div>
        <div className={s.content_preview_button}>
          <button className={s.order_project_button}>Заказать проект</button>

          <ReduxFormImg props={props.imageDesctop} text={"Изменить изображение для телефона"} formTitleName="ChangeImgDesctopForm" changeImgThunk={props.changeImgThunk}/>
          <ReduxFormImg props={props.imageMobile}  text={"Изменить изображение для компьютера"} formTitleName="ChangeImgMobileForm" changeImgThunk={props.changeImgThunk}/>
        </div>
      </div>
    </div>
      
  )
};

export default Header;
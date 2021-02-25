import React from 'react';
import s from './SCSS/AboutUs.module.scss';
import {TitleForm} from '../../../../hoc/ReduxFormTitle';
import {DescForm} from '../../../../hoc/ReduxFormDesc';
import {ReduxFormImg} from '../../../../hoc/ReduxFormImg';

const AboutUs = (props) => {  
    const imageItem = new Image
    imageItem.src = props.image.image;

      const ChangeTitleTextFormRecord =  "AboutUSChangeTitleText"
      const ChangeDescTextFormRecord = "AboutUSChangeDescText"
      const ChangeTitleTextInfo1FormRecord = "AboutUSChangeTitleInfo1Text"
      const ChangeDescTextInfo1FormRecord = "AboutUSChangeDescInfo1Text" 
      const ChangeTitleTextInfo2FormRecord = "AboutUSChangeTitleInfo2Text"
      const ChangeDescTextInfo2FormRecord = "AboutUSChangeDescInfo2Text" 
      const ChangeTitleTextInfo3FormRecord = "AboutUSChangeTitleInfo3Text" 
      const ChangeDescTextInfo3FormRecord = "AboutUSChangeDescInfo3Text" 

  return ( 
      <div className={s.about_us}>
            <div className={s.content}>
                <div >
                    <img src={imageItem.src} alt="" className={s.image_desctop}/>
                </div>
                <div >
                <p className={s.text_fon}>about us</p>
                    <div className={s.title}>
                        <TitleForm props={props.aboutUS} formTitleName={ChangeTitleTextFormRecord} changeTitleThunk={props.changeTitleThunk}/>
                    </div>
                    <div className={s.desc}>
                        <DescForm props={props.aboutUS} formDescName={ChangeDescTextFormRecord} changeDescThunk={props.changeDescThunk}/>
                        <ReduxFormImg props={props.image} text={"Изменить изображение для компьютера"} formTitleName="ChangeImgAboutUsForm" changeImgThunk={props.changeImgThunk}/>
                    </div>
                </div>
                
            </div>
            <div>
                <img src={imageItem.src} alt="" className={s.image}/>
            </div>
            <div className={s.content_bottom}>
                <div  className={s.list}>
                    <TitleForm props={props.achievements1} formTitleName={ChangeTitleTextInfo1FormRecord} changeTitleThunk={props.changeTitleThunk}/>
                    <DescForm props={props.achievements1} formDescName={ChangeDescTextInfo1FormRecord} changeDescThunk={props.changeDescThunk}/>
                </div>
                <div  className={s.list}>
                    <TitleForm props={props.achievements2} formTitleName={ChangeTitleTextInfo2FormRecord} changeTitleThunk={props.changeTitleThunk}/>
                     <DescForm props={props.achievements2} formDescName={ChangeDescTextInfo2FormRecord} changeDescThunk={props.changeDescThunk}/>
                </div>
                <div  className={s.list}>
                    <TitleForm props={props.achievements3} formTitleName={ChangeTitleTextInfo3FormRecord} changeTitleThunk={props.changeTitleThunk}/>
                    <DescForm props={props.achievements3} formDescName={ChangeDescTextInfo3FormRecord} changeDescThunk={props.changeDescThunk}/>
                </div>
            </div>
      </div>
    
    
  )
};

export default AboutUs;
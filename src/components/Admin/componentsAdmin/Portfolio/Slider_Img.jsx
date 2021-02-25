import React from 'react';
import s from './SCSS/Portfolio.module.scss'; 
import { Field, reduxForm } from 'redux-form';

const Slider_img = (props) => {
    
    const ChangeImgForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit} className={s.redux_form}>
                <label className={s.label_form} htmlFor="changeImg">Изменить картинку</label>
                <Field 
                name="changeImg"
                component={file_upload}
                type="file" 
                className={s.title_img}/>
                <button className={s.button_submit}>Изменить изображение</button>
            </form>
        )
    }

    const file_upload= ({ input, type, meta: { touched, error, warning } }) => {
        delete input.value
    
        return (
        <div>
            <label htmlFor={input.name} >
            <input {...input} type={type} className={s.title_img}/>
            </label>
        </div>
        )
    }

    const ChangeImgFormRecord = reduxForm({form: "changeSliderImg" + props.key})(ChangeImgForm);
                                            

    const onSubmitImg = (formData) =>{
        const idImg = props.id
        const img = formData.changeImg[0]
        const DATA = new FormData
        DATA.append("image", img)
        DATA.append("id", idImg)
        props.changeSliderImgThunk(DATA)
    } 

    const imageItem = new Image();
    imageItem.src = props.image;

    return ( 
        <div className={s.image_desctop}>
            <img src={imageItem.src} alt="" className={s.image_desctop}/> 
            <ChangeImgFormRecord props={props}   onSubmit={onSubmitImg}/>
        </div>
    )
};

export default Slider_img;
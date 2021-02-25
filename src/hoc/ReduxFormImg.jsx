import { Field, reduxForm } from 'redux-form';
import s from './SCSS/reduxForm.module.scss'

export const ReduxFormImg = (props) => {

    const ChangeImgForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit} className={s.redux_form}>
                <label className={s.label_form} htmlFor="changeImg">{props.props.text}</label>
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

    const ChangeImgFormRecord = reduxForm({form: props.formTitleName})(ChangeImgForm);

    const onSubmitImg = (formData) =>{
        const idImg = props.props.id
        const img = formData.changeImg[0]
        const DATA = new FormData
        DATA.append("image", img)
        DATA.append("id", idImg)
        props.changeImgThunk(DATA)
    }                                             

    return (<ChangeImgFormRecord props={props}   onSubmit={onSubmitImg}/>)
}
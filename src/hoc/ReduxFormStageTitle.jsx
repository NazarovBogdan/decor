import { Field, reduxForm } from 'redux-form';
import s from './SCSS/reduxForm.module.scss'

export const StageTitleForm = (props) => {
    const ChangeTitleTextForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field 
                name="changeTitleText"
                component="input" 
                className={s.title}
                placeholder={props.props.props.title}/>
                <button className={s.button_submit}>Изменить запись</button>
            </form>
        )
    }

    const ChangeTitleTextFormRecord = reduxForm({form: props.formTitleName, 
                                                initialValues:
                                                {changeTitleText: props.title,}})
                                                (ChangeTitleTextForm);

    const onSubmitTitle = (formData) =>{
        const idText = props.props.id
        const text = formData.changeTitleText
        const DATA = new FormData
        DATA.append("id", idText)
        DATA.append("title", text)
        props.changeStageTitleThunk(DATA)
    }                                             

    return (<ChangeTitleTextFormRecord props={props}   onSubmit={onSubmitTitle}/>)
}
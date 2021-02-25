import { Field, reduxForm } from 'redux-form';
import s from './SCSS/reduxForm.module.scss'

export const DescForm = (props) => {

    const ChangeDescTextForm = (props) => {
      return (
          <form onSubmit={props.handleSubmit}>
              <Field 
              name={"changeDescText"}
              component={"input"}
              className={s.desc}
              placeholder={props.props.props.description}/>
              <button className={s.button_submit}>Изменить запись</button>
          </form>
      )
    }
  
    const ChangeDescTextFormRecord = reduxForm({form: props.formDescName, 
                                                initialValues:
                                                {changeDescText: props.description}})
                                                (ChangeDescTextForm);
    
    const onSubmitDesc = (formData) =>{
      const idText = props.props.id
      const text = formData.changeDescText
      const DATA = new FormData
      DATA.append("id", idText)
      DATA.append("description", text)
      props.changeDescThunk(DATA)
    }
  
    return(<ChangeDescTextFormRecord props={props} onSubmit={onSubmitDesc}/> )
}
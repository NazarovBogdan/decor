import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {setAdminThunk} from '../../../../redux/reducer_content'
import { Redirect } from 'react-router-dom';
// import {NavLink} from 'react-router-dom';

class AdminModalContainer extends React.Component {

    componentDidMount() {
    }
   
    render() {
        if (this.props.login === true) return <Redirect to="/admin"/>

        const AdminForm = (props) => {
            return (
                <form  onSubmit={props.handleSubmit}>
                        <div>
                            <label htmlFor="login">Логин</label>
                            <Field name={"login"} component={"input"} id="login" />
                        </div> 
                        <div >
                            <label htmlFor="password">Пароль</label>
                            <Field name={"password"} component={"input"} type={"password"} id="password" />
                        </div>  
                        <button>Войти</button> 
                    </form>
            )
        }

        const onSubmit = (formData) => {
            const DATA = new FormData
            DATA.append("login", formData.login)
            DATA.append("password", formData.password)
            this.props.setAdminThunk(DATA);
        }

        const AdminReduxForm = reduxForm({form: "AdminForm"})(AdminForm);

        return (
            <div>
                <AdminReduxForm onSubmit={onSubmit}/>
            </div>  
        )
    }
}
  
  
  
  const mapStateToProps = (state) => 
  {   
    return {
        login: state.content.login
    }
  }
  
  const  AdminModalPopUp = connect(mapStateToProps, 
      {setAdminThunk})
      (AdminModalContainer) 
  
  export default AdminModalPopUp;
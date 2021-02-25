import React  from 'react';
import s from './SCSS/Staff.module.scss';
import StaffImg from '../../../../assets/images/Анастасия.png' ;
import StaffImg2 from '../../../../assets/images/Анастасия2.png' ;
import {TitleForm} from '../../../../hoc/ReduxFormTitle';
import {DescForm} from '../../../../hoc/ReduxFormDesc';

const Staff = (props) => {

    const ChangeTitleTextFormRecord = "StaffChangeTitleText"
    const ChangeDescTextFormRecord = "StaffChangeDescText"


  return ( 
      <div>
            <div className={s.staff_mobile}>
                <div className={s.content}>
                    <div className={s.title}>
                        <TitleForm props={props.Staff} formTitleName={ChangeTitleTextFormRecord} changeTitleThunk={props.changeTitleThunk}/>
                    </div>
                    <div className={s.img}>
                        <img src={StaffImg} alt=""/>
                    </div>
                    <div className={s.desc}>
                        <DescForm props={props.Staff} formDescName={ChangeDescTextFormRecord} changeDescThunk={props.changeDescThunk}/>
                    </div>
                </div>
            </div>
            <div className={s.staff}>
                <div className={s.content}>
                    <div>
                        <div className={s.title}>
                            <TitleForm props={props.Staff} formTitleName={ChangeTitleTextFormRecord} changeTitleThunk={props.changeTitleThunk}/>
                        </div>
                        <div className={s.desc}>
                            <DescForm props={props.Staff} formDescName={ChangeDescTextFormRecord} changeDescThunk={props.changeDescThunk}/>
                        </div>
                    </div>
                    <div className={s.img}>
                        <img src={StaffImg2} alt=""/>
                    </div>
                </div>
            </div>
      </div>
        
        
  )
};

export default Staff;
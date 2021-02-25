import React from 'react';
import s from './SCSS/Price.module.scss';
import img1 from '../../../../assets/images/img1.png'
import img2 from '../../../../assets/images/img2.png'
import img3 from '../../../../assets/images/img3.png'
import {TitleForm} from '../../../../hoc/ReduxFormTitle';
import {DescForm} from '../../../../hoc/ReduxFormDesc';

const Price = (props) => {

  const ChangeTitleTextFormRecord = "PriceChangeItemTitleText"
  const ChangeTitleTextFormRecord1 = "PriceChangeItemTitleText1"
  const ChangeTitleTextFormRecord2 = "PriceChangeItemTitleText2"
  const ChangeTitleTextFormRecord3 = "PriceChangeItemTitleText3"

  const ChangeDescTextFormRecord1 = "HeaderChangeDescText1"
  const ChangeDescTextFormRecord2 = "HeaderChangeDescText2"
  const ChangeDescTextFormRecord3 = "HeaderChangeDescText3"
  const ChangeDescTextFormRecord4 = "HeaderChangeDescText4"
  const ChangeDescTextFormRecord5 = "HeaderChangeDescText5"
  const ChangeDescTextFormRecord6 = "HeaderChangeDescText6"
  const ChangeDescTextFormRecord7 = "HeaderChangeDescText7"
  const ChangeDescTextFormRecord8 = "HeaderChangeDescText8"
  const ChangeDescTextFormRecord9 = "HeaderChangeDescText9"
  const ChangeDescTextFormRecord10 = "HeaderChangeDescText10"
  const ChangeDescTextFormRecord11 = "HeaderChangeDescText11"
  const ChangeDescTextFormRecord12 = "HeaderChangeDescText12"
  
  return ( 
      <div className={s.price}>
          {/* <p className={s.text_fon}>design</p> */}
            <TitleForm props={props.Prise[0]} formTitleName={ChangeTitleTextFormRecord} changeTitleThunk={props.changeTitleThunk}/>
          <div className={s.price_list}>
            <TitleForm props={props.Prise[1]} formTitleName={ChangeTitleTextFormRecord1} changeTitleThunk={props.changeTitleThunk}/>
              <img src={img1} alt=""/>
              <div>
                <TitleForm props={props.Prise[4]} formTitleName={ChangeDescTextFormRecord4} changeTitleThunk={props.changeTitleThunk}/>
                <TitleForm props={props.Prise[5]} formTitleName={ChangeDescTextFormRecord5} changeTitleThunk={props.changeTitleThunk}/>
                <TitleForm props={props.Prise[6]} formTitleName={ChangeDescTextFormRecord6} changeTitleThunk={props.changeTitleThunk}/>
              </div>
                  <DescForm props={props.Prise[1]} formDescName={ChangeDescTextFormRecord1} changeDescThunk={props.changeDescThunk}/>
          </div>
          <div className={s.price_list}>
              <TitleForm props={props.Prise[2]} formTitleName={ChangeTitleTextFormRecord2} changeTitleThunk={props.changeTitleThunk}/>
              <img src={img2} alt=""/>
              <div>
                <TitleForm props={props.Prise[7]} formTitleName={ChangeDescTextFormRecord7} changeTitleThunk={props.changeTitleThunk}/>
                <TitleForm props={props.Prise[8]} formTitleName={ChangeDescTextFormRecord8} changeTitleThunk={props.changeTitleThunk}/>
                <TitleForm props={props.Prise[9]} formTitleName={ChangeDescTextFormRecord9} changeTitleThunk={props.changeTitleThunk}/>
              </div>
                  <DescForm props={props.Prise[2]} formDescName={ChangeDescTextFormRecord2} changeDescThunk={props.changeDescThunk}/>
          </div>  
          <div className={s.price_list}>
            <TitleForm props={props.Prise[3]} formTitleName={ChangeTitleTextFormRecord3} changeTitleThunk={props.changeTitleThunk}/>
              <img src={img3} alt=""/>
              <div>
                <TitleForm props={props.Prise[10]} formTitleName={ChangeDescTextFormRecord10} changeTitleThunk={props.changeTitleThunk}/>
                <TitleForm props={props.Prise[11]} formTitleName={ChangeDescTextFormRecord11} changeTitleThunk={props.changeTitleThunk}/>
                <TitleForm props={props.Prise[12]} formTitleName={ChangeDescTextFormRecord12} changeTitleThunk={props.changeTitleThunk}/>
              </div>
                  <DescForm props={props.Prise[3]} formDescName={ChangeDescTextFormRecord3} changeDescThunk={props.changeDescThunk}/>
          </div>        
      </div>
        
  )
};

export default Price;
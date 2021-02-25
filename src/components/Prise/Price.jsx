import React from 'react';
import s from './SCSS/Price.module.scss';
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'

const Price = (props) => {
  return ( 
      <div className={s.price}>
          {/* <p className={s.text_fon}>design</p> */}
          <p className={s.prices_text}>{props.Prise[0].title}</p>
          <p className={s.prices_text_desctop}>{props.Prise[0].title}</p>
          <div className={s.price_list}>
              <p className={s.title}>{props.Prise[1].title}</p>
              <img src={img1} alt=""/>
              <div>
                <p className={s.desc}>{props.Prise[4].title}</p>
                <p className={s.desc}>{props.Prise[5].title}</p>
                <p className={s.desc}>{props.Prise[6].title}</p>
              </div>
              <p className={s.desc, s.price_text}>{props.Prise[1].description}<span className={s.price_desc_desctop}> ₽/м<sup>2</sup></span></p>
          </div>
          <div className={s.price_list}>
              <p className={s.title}>{props.Prise[2].title}</p>
              <img src={img2} alt=""/>
              <div>
                <p className={s.desc}>{props.Prise[7].title}</p>
                <p className={s.desc}>{props.Prise[8].title}</p>
                <p className={s.desc}>{props.Prise[9].title}</p>
              </div>
              <p className={s.desc, s.price_text}>{props.Prise[2].description}<span className={s.price_desc_desctop}> ₽/м<sup>2</sup></span></p>
          </div>  
          <div className={s.price_list}>
              <p className={s.title}>{props.Prise[3].title}</p>
              <img src={img3} alt=""/>
              <div>
                <p className={s.desc}>{props.Prise[10].title}</p>
                <p className={s.desc}>{props.Prise[11].title}</p>
                <p className={s.desc}>{props.Prise[12].title}</p>
              </div>
              <p className={s.desc, s.price_text}>{props.Prise[3].description}<span className={s.price_desc_desctop}> ₽/м<sup>2</sup></span></p>
          </div>        
      </div>
        
  )
};

export default Price;
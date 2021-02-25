import React from 'react';
import s from './SCSS/Anchors.module.scss';
import c from '../../assets/images/c.png'

const Anchors = () => {
  return ( 
    <>
      <div className={s.anchors}>
          <div className={s.anchors_link}>
            <a href="#aboutUs" className={s.lint_text}>О НАС</a>
            <a href="#portfolio" className={s.lint_text}>ПОРТФОЛИО</a>
            <a href="#stages" className={s.lint_text}>УСЛУГИ И ЦЕНЫ</a>
            <a href="#contact" className={s.lint_text}>КОНТАКТЫ</a>
          </div>
          <div className={s.anchors_bottom}>
            <img src={c} alt=""/> 
            <p className={s.text}>Все права защищены, 2021 г.</p>
          </div>  
        </div>
        <div className={s.anchors_desctop}>
          <div className={s.anchors_bottom}>
            <img src={c} alt=""/> 
            <p className={s.text}>Все права защищены, 2021 г.</p>
          </div>
          <div className={s.anchors_link}>
            <a href="#aboutUs" className={s.lint_text}>О НАС</a>
            <a href="#portfolioDesc" className={s.lint_text}>ПОРТФОЛИО</a>
            <a href="#stages" className={s.lint_text}>УСЛУГИ И ЦЕНЫ</a>
            <a href="#contact" className={s.lint_text}>КОНТАКТЫ</a>
          </div>
          <div>
          </div>  
        </div>
    </>
      
        
  )
};

export default Anchors;
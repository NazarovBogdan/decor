import React, { useEffect } from 'react';
import s from './SCSS/StagesOfWork.module.scss';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';


const Stages = (props) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return ( 
    <div data-aos="zoom-in" className={s.stage}>
        <div className={s.stage_band_number}>
            <p className={s.stage_list}>{props.stagesNumber}</p>
            <div className={s.stage_band}></div>
        </div>
        <div className={s.stage_text}>
            <p className={s.stage_title}>{props.title}</p>
            <p className={s.stage_desc}>{props.desc}</p>
        </div>
    </div>
  )
};

export default Stages;
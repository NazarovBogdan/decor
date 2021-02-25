import React, { useEffect }  from 'react';
import s from './SCSS/Staff.module.scss';
import StaffImg from '../../assets/images/Анастасия.png' ;
import StaffImg2 from '../../assets/images/Анастасия2.png' ;
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const Staff = (props) => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
  return ( 
      <div>
            <div className={s.staff_mobile}>
                <p className={s.fon_text}>decorator</p>
                <div className={s.content}>
                    <div className={s.title}>
                        <a name="portfolio" className={s.title_text}>{props.Staff.title}</a>
                    </div>
                    <div className={s.img}>
                        <img src={StaffImg} alt=""/>
                    </div>
                    <div className={s.desc}>
                        <p className={s.desc_text}>{props.Staff.description}</p>
                    </div>
                </div>
            </div>
            <div className={s.staff}>
                <div className={s.content}>
                    <div>
                        <div className={s.title}>
                            <a name="portfolioDesc" className={s.title_text}>{props.Staff.title}</a>
                        </div>
                        <p className={s.fon_text_desctop}>decorator</p>
                        <div className={s.desc}>
                            <p className={s.desc_text}>{props.Staff.description}</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className={s.img}>
                        <img src={StaffImg2} alt=""/>
                    </div>
                </div>
            </div>
      </div>
        
        
  )
};

export default Staff;
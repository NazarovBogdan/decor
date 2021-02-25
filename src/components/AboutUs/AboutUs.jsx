import React, { useEffect } from 'react';
import s from './SCSS/AboutUs.module.scss'; 
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css'
import CountUp from 'react-countup';


const AboutUs = (props) => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    const imageItem = new Image();
    imageItem.src = props.image.image;
    const Count1 = Number(props.achievements1.title);
    const Count3 = Number(props.achievements3.title);
    const Count2 = Number(props.achievements2.title);
    const countOne = <CountUp delay={0.3} start={0} end={Count1} />
    const countTwo = <CountUp delay={0.3} start={0} end={Count3} />
    const countThree = <CountUp delay={0.3} start={0} end={Count2} />
      
  return ( 
      <div className={s.about_us}>
            <div className={s.content}>
                <div data-aos="fade-right">
                    <img src={imageItem.src} alt="" className={s.image_desctop}/>
                </div>
                <div data-aos="fade-left">
                <p className={s.text_fon}>about us</p>
                    <div className={s.title}>
                        <a data-aos-anchor-placement="top-bottom" name="aboutUs" className={s.title_text}>{props.aboutUS.title}</a>
                    </div>
                    <div className={s.desc}>
                        <p className={s.desc_text}>{props.aboutUS.description}</p>
                    </div>
                </div>
                
            </div>
            <div>
                <img src={imageItem.src} alt="" className={s.image}/>
            </div>
            <div className={s.content_bottom}>
                <div data-aos="zoom-in-down" className={s.list}>
                    <p className={s.title}>{countOne}</p>
                    <p className={s.desc}>{props.achievements1.description}</p>
                </div>
                <div data-aos="zoom-in-down" className={s.list}>
                    <p className={s.title}>{countTwo}</p>
                    <p className={s.desc}>{props.achievements3.description}</p>
                </div>
                <div data-aos="zoom-in-down" className={s.list}>
                    <p className={s.title}>{countThree}</p>
                    <p className={s.desc}>{props.achievements2.description}</p>
                </div>
            </div>
      </div>
    
    
  )
};

export default AboutUs;
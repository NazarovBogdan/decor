import React from 'react';
import s from './SCSS/StagesOfWork.module.scss';
import Details from '../../assets/images/Vector.png';
import Stages from './Stages';

const StagesOfWork = (props) => {
    let DetailsOpen = () => {
        StagesDetails.stagesFlag = true;
        debugger;
        return StagesDetails.stagesFlag
        
    }

    let StagesDetails = {

        stagesFlag: true 

    }

    return (
        <div className={s.content}>
                <div>
                    <a name="stages" className={s.title}>
                        {props.title.title}
                    </a>
                    <p className={s.text_fon}>ideas</p>
                </div>
                {(StagesDetails.stagesFlag === true)
                ?   <>
                        {props.Stages
                        .map(d => <Stages 
                                        key={d.id}
                                        stagesNumber={d.stagesNumber}
                                        title={d.title}
                                        desc={d.description} />)
                        }                               
                        
                    </>
                :   <>
                        {props.Stages
                        .filter(d=> d.id < 3)
                        .map(d => <Stages
                                        key={d.id}
                                        stagesNumber={d.stagesNumber}
                                        title={d.title}
                                        desc={d.description} />)
                        }
                        <button onClick={ DetailsOpen } className={s.details}>
                            Подробнее 
                            <img src={Details} alt=""/>
                        </button>
                    </>
                }    
        </div>
        
    )
 
};

export default StagesOfWork;
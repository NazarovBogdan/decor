import React from 'react';
import s from './SCSS/StagesOfWork.module.scss';
import Details from '../../../../assets/images/Vector.png';
import Stages from './Stages';
import {TitleForm} from '../../../../hoc/ReduxFormTitle';

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
                        <TitleForm props={props.title} formTitleName="stagesTitleForm" changeTitleThunk={props.changeTitleThunk}/>
                    </a>
                </div>
                {(StagesDetails.stagesFlag === true)
                ?   <>
                        {props.Stages
                        .map(d => <Stages 
                                        id={d.id}
                                        key={d.id}
                                        stagesNumber={d.stagesNumber}
                                        title={d.title}
                                        description={d.description} 
                                        changeStageTitleThunk={props.changeStageTitleThunk}
                                        changeStageDescThunk={props.changeStageDescThunk}/>)
                        }                               
                        
                    </>
                :   <>
                        {props.Stages
                        .filter(d=> d.id < 3)
                        .map(d => <Stages
                                        key={d.id}
                                        stagesNumber={d.stagesNumber}
                                        title={d.title}
                                        description={d.description}
                                        changeStageTitleThunk={props.changeStageTitleThunk}
                                        changeStageDescThunk={props.changeStageDescThunk} />)
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
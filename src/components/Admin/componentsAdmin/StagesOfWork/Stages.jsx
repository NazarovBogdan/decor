import React from 'react';
import s from './SCSS/StagesOfWork.module.scss';
import {StageTitleForm} from '../../../../hoc/ReduxFormStageTitle';
import {StageDescForm} from '../../../../hoc/ReduxFormStagesDesc';

const Stages = (props) => {
  return ( 
    <div className={s.stage}>
        <div className={s.stage_band_number}>
            <p className={s.stage_list}>{props.stagesNumber}</p>
            <div className={s.stage_band}></div>
        </div>
        <div className={s.stage_text}>
          <StageTitleForm props={props} formTitleName={"stagesOfWorkTitleForm"+props.id} changeStageTitleThunk={props.changeStageTitleThunk}/>
          <StageDescForm props={props} formDescName={"stagesOfWorkDescForm"+props.id} changeStageDescThunk={props.changeStageDescThunk}/>
        </div>
    </div>
  )
};

export default Stages;
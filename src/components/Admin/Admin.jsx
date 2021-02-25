import React from 'react';
import {connect} from 'react-redux';
import {setContentThunk, setStagesThunk, changeDescThunk, setSliderImagesThunk, changeSliderImgThunk, changeTitleThunk, changeStageTitleThunk, changeStageDescThunk, changeImgThunk, setImagesThunk} from "../../redux/reducer_content";
import Header from './componentsAdmin/Header/Header';
import AboutUs from './componentsAdmin/AboutUs/AboutUs';
import Staff from './componentsAdmin/Staff/Staff';
import StagesOfWork from './componentsAdmin/StagesOfWork/StagesOfWork';
import Prise from './componentsAdmin/Prise/Price';
import Contact from './componentsAdmin/Contact/Contact';
import Footer from './componentsAdmin/Footer/Footer';
import { Redirect } from 'react-router-dom';
import Portfolio from './componentsAdmin/Portfolio/Portfolio';

class AdminItemContainer extends React.PureComponent {

      componentDidMount() {
        this.props.setContentThunk();
        this.props.setStagesThunk();
        this.props.setImagesThunk();
        this.props.setSliderImagesThunk();
      }

  render() {
    if (this.props.login === false) return <Redirect to="/adminmodal"/>
      const textPrise = this.props.content.filter(text=> text.id > 7 && text.id < 21)
      const textContact = this.props.content.filter(text=> text.id > 20)
      return (
          <>
              <Header changeTitleThunk={this.props.changeTitleThunk}
                    changeDescThunk={this.props.changeDescThunk}
                    props={this.props.content[0]}
                    changeImgThunk={this.props.changeImgThunk}
                    imageDesctop={this.props.image[0]}
                    imageMobile={this.props.image[4]}/>
              <AboutUs changeTitleThunk={this.props.changeTitleThunk}
                    changeDescThunk={this.props.changeDescThunk}
                    aboutUS={this.props.content[1]} 
                    image={this.props.image[1]}
                    changeImgThunk={this.props.changeImgThunk}
                    achievements1={this.props.content[2]} 
                    achievements2={this.props.content[3]} 
                    achievements3={this.props.content[4]}/>
              <Staff changeTitleThunk={this.props.changeTitleThunk}
                    changeDescThunk={this.props.changeDescThunk}
                    Staff={this.props.content[5]}/>
              <Portfolio aboutUS={this.props.content[27]} 
                        slider_images={this.props.slider_images}
                        changeSliderImgThunk={this.props.changeSliderImgThunk}/>
              <StagesOfWork changeTitleThunk={this.props.changeTitleThunk}
                    changeStageTitleThunk={this.props.changeStageTitleThunk}
                    changeStageDescThunk={this.props.changeStageDescThunk}
                    Stages={this.props.stages}
                    title={this.props.content[6]}/>
              <Prise changeTitleThunk={this.props.changeTitleThunk}
                    changeDescThunk={this.props.changeDescThunk}
                    Prise={textPrise}/>
              <Contact
                    changeTitleThunk={this.props.changeTitleThunk}
                    changeDescThunk={this.props.changeDescThunk}
                    contact={textContact}
                    changeImgThunk={this.props.changeImgThunk}
                    imageDesctop={this.props.image[2]}
                    imageMobile={this.props.image[3]}/>
              <Footer/>
          </>
  
      );
  }
}



const mapStateToProps = (state) => 
{   
  return {
      content: state.content.content,
      stages: state.content.stages,
      login: state.content.login,
      image: state.content.images,
      slider_images: state.content.slider_images
  }
}

const  AdminContainer = connect(mapStateToProps, 
    {setContentThunk, changeSliderImgThunk, setSliderImagesThunk, setStagesThunk, changeDescThunk, changeImgThunk, 
    changeTitleThunk, changeStageTitleThunk, changeStageDescThunk, setImagesThunk})
    (AdminItemContainer) 

export default AdminContainer;

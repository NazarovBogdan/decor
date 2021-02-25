import React from 'react';
import {connect} from 'react-redux';
import {setContentThunk, setStagesThunk, setImagesThunk, getMailThunk, setSliderImagesThunk, getMailCommThunk} from "../../redux/reducer_content";
import Header from '../Header/Header'
import AboutUs from '../AboutUs/AboutUs'
import Staff from '../Staff/Staff'
import StagesOfWork from '../StagesOfWork/StagesOfWork'
import Prise from '../Prise/Price'
import Contact from '../Contact/Contact'
import Anchors from '../Anchors/Anchors'
import Footer from '../Footer/Footer'
import PortfolioCont from '../Portfolio/PortfolioCont'

class HeaderItemContainer extends React.PureComponent {

    componentDidMount() {
        this.props.setContentThunk();
        this.props.setStagesThunk();
        this.props.setImagesThunk();
        this.props.setSliderImagesThunk();
    }
   
    render() {
        const textPrise = this.props.content.filter(text=> text.id > 7 && text.id < 21)
        const textContact = this.props.content.filter(text=> text.id > 20 && text.id < 28)
        return (
            <>
                <Header props={this.props.content[0]}
                        imageDesctop={this.props.image[0]}
                        imageMobile={this.props.image[4]}
                        getMailThunk={this.props.getMailThunk}/>
                <AboutUs aboutUS={this.props.content[1]} 
                        image={this.props.image[1]}
                        achievements1={this.props.content[2]} 
                        achievements2={this.props.content[3]} 
                        achievements3={this.props.content[4]}/>
                <Staff Staff={this.props.content[5]}/>
                <PortfolioCont aboutUS={this.props.content[27]}
                            aboutUS2={this.props.content[28]} 
                        slider_images={this.props.slider_images}
                        getMailCommThunk={this.props.getMailCommThunk}/>
                <StagesOfWork 
                        Stages={this.props.stages}
                        title={this.props.content[6]}/>
                <Prise Prise={textPrise}/>
                <Contact contact={textContact}
                        imageDesctop={this.props.image[2]}
                        imageMobile={this.props.image[3]}
                        getMailThunk={this.props.getMailThunk}/>
                <Anchors/>
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
        image: state.content.images,
        slider_images: state.content.slider_images
    }
}
  
const  HeaderContainer = connect(mapStateToProps, {setSliderImagesThunk, getMailCommThunk,  setContentThunk, setStagesThunk, setImagesThunk, getMailThunk})(HeaderItemContainer) 

export default HeaderContainer;
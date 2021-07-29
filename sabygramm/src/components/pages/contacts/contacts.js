import React, {Component} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Header from '../../header';
import SettingPage from '../settingPage';
import SabygramService from '../../../services/SabygramService';
import AddContact from '../../addContact/addContact';
import './contacts.scss';
import { connect } from "react-redux";

class Contacts extends Component{
    service = new SabygramService();

    state = {
        slideGroup: "all",
        itemsFound: null,
        dialogs: []
    }

    componentDidMount = () => {  
        //const {setProfilePhoto, setUserName, setWelcomeMessage} = this.props;

        this.service.sendDataPost({status: 80}, '/dialogs')
        .then((dialogs) => dialogs.json())
        .then((result) => {
            this.setState({dialogs:result});
        }) 

        this.service.sendDataPost({ status: 70 }, '/dialogs')
        .then((dialogs) => dialogs.json())
        .then((result) => {
            this.props.setPhoto(result.image_link)
            this.props.setName(result.name)
            this.props.setMessage(result.welcome_msg)
        })
    }

    

    slideChanged = (e) => {
        if (e && e.activeIndex === 1) {
            this.setState({
                slideGroup: "all"
            })
        }
        else this.setState({
            slideGroup: null
        })
    }
    renderSearchItems = (dialogs) => {
        this.setState({
            itemsFound: dialogs
        })
    }

    addContact = () => {
        return (<AddContact />)   
    }

    slideSettings = () => {
        var mySwiper = document.querySelector('.swiper-container').swiper
        mySwiper.slideTo(0);
    }
    
    render(){
        return(
            <Swiper className="mySwiper" initialSlide="1" onSlideChange={this.slideChanged}>
                <Header slot="container-start" groupId={this.state.slideGroup} onSettings={this.slideSettings} onSearch={this.renderSearchItems} dialogs={this.state.dialogs}/>
                <SwiperSlide>
                    <SettingPage />
                </SwiperSlide>
    
                <SwiperSlide>
                    {this.addContact()}
                    <RenderContact dialogs={this.state.dialogs} itemsFound={this.state.itemsFound}/>
                </SwiperSlide>
            </Swiper>
        )
    }
    
}
const RenderContact = ({dialogs, itemsFound = null }) => {
    let toSearchIn = null;
    if(dialogs.length !== 0)  itemsFound ? toSearchIn = itemsFound : toSearchIn = [...dialogs[0], ...dialogs[1], ...dialogs[2]];

    if(toSearchIn)
        return(
        <div className="dialog-container">{ 
            toSearchIn.map((dialog) => {
                return <div key={dialog.id} className="contact">
                    <img src={dialog.img} alt="dialogPicture" className="contacts-img" />
                    {dialog.name}</div>
            })
        }
        </div>
    )
    else return <div></div>
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPhoto: (photo) => dispatch({ type: "SET_MY_PROFILE_PHOTO", payload: photo }),
        setName: (name) => dispatch({ type: "SET_MY_USER_NAME", payload: name }),
        setMessage: (message) => dispatch({ type: "SET_MY_WELCOME_MESSAGE", payload: message }),
    }
}
export default connect(null, mapDispatchToProps)(Contacts)
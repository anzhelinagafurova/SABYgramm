import React, {Component} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Header from '../../header';
import SettingPage from '../settingPage';
import SabygramService from '../../../services/SabygramService';
import AddContact from '../../addContact/addContact';
import './contacts.scss';

export default class Contacts extends Component{
    service = new SabygramService();

    componentDidMount() {  
        this.service.getDialogData()
        .then((dialogs) => dialogs.json())
        .then((result) => {
            this.setState({dialogs:result});
        }) 
    }

    state = {
        slideGroup: "all",
        itemsFound: null,
        dialogs: []
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
        if (this.state.dialogs.length === 0) {
            return (<AddContact />)
        }
    }
    swipePrev = () => {
        //console.log(document.querySelector('.mySwiper')) //.slidePrev()
    }
    
    render(){
        return(
            <Swiper className="mySwiper" initialSlide="1" onSlideChange={this.slideChanged}>
                <Header slot="container-start" groupId={this.state.slideGroup} onSettings={this.swipePrev} onSearch={this.renderSearchItems} dialogs={this.state.dialogs}/>
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

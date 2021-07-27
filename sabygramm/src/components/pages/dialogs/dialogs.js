import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import DialogItem from '../../dialogItem/dialogItem';
import SabygramService from '../../../services/SabygramService';
import Header from '../../header';
import './dialogs.scss';
import AddContact from '../../addContact/addContact';
import SettingPage from '../settingPage';


export default class Dialogs extends Component {
    service = new SabygramService();

    state = {
        slideGroup: 0,
        itemsFound: null,
        dialogs: []
    }

    componentDidMount() {
        this.service.sendDataGet('/dialogs')
        .then((dialogs) => dialogs.json())
        .then((result) => {
            this.setState({dialogs:result});
        }) 

        // let result = this.service.getMockedData();
        // this.setState({ dialogs: result });

    }

    
    slideSettings = () => {
        var mySwiper = document.querySelector('.swiper-container').swiper
        mySwiper.slideTo(0);
    }

    slideChanged = (e) => {
        if (e) {
            this.setState({
                slideGroup: e.activeIndex - 1
            })
        }
    }

    renderSearchItems = (dialogs) => {
        this.setState({
            itemsFound: dialogs
        })
    }

    addContact = () => {
        if (this.state.dialogs[0] && this.state.dialogs[0].length === 0) {
            return (<AddContact />)
        }
    }


    render() {
        return (
            <Swiper className="mySwiper" initialSlide="1" onSlideChange={this.slideChanged}>
                <Header slot="container-start" groupId={this.state.slideGroup} onSearch={this.renderSearchItems} dialogs={this.state.dialogs} onSettings={this.slideSettings} />
                <div className="dialog-container">
                    <SwiperSlide>
                        <SettingPage />
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.addContact()}
                        <RenderDialog dialogs={this.state.dialogs[0]} itemsFound={this.state.itemsFound} groupId={0} />
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.addContact()}
                        <RenderDialog dialogs={this.state.dialogs[1]} itemsFound={this.state.itemsFound} groupId={1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.addContact()}
                        <RenderDialog dialogs={this.state.dialogs[2]} itemsFound={this.state.itemsFound} groupId={2} />
                    </SwiperSlide>
                </div>
            </Swiper>
        )
    }
}

const RenderDialog = ({ dialogs, itemsFound = null, groupId = null }) => {

    let toSearchIn = null;

    itemsFound ? toSearchIn = itemsFound : toSearchIn = dialogs;

    if (dialogs)
        return (
            <div>
                {
                    toSearchIn.map((dialog) => {
                        return <DialogItem key={dialog.id_pair} dialog={dialog} groupId={groupId} />
                    })
                }
            </div>
        )
    else return <div></div>
}
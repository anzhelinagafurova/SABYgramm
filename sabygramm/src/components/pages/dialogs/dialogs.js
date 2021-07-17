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
    dialogs = this.service.getDialogData();

    state = {
        slideGroup: 0,
        itemsFound: null
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
        if (this.dialogs.length === 0) {
            return (<AddContact />)
        }
    }

    render(){
        return (
            <div className="dialog-container">
                <Header groupId={this.state.slideGroup} onSearch={this.renderSearchItems} dialogs={this.dialogs} />
                <Swiper className="mySwiper" onSlideChange={this.slideChanged}>
                    <SwiperSlide>
                        <SettingPage />
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.addContact()}
                        <RenderDialog dialogs={this.dialogs[0]} itemsFound={this.state.itemsFound} />
                    </SwiperSlide>
    
                    <SwiperSlide>
                        <RenderDialog dialogs={this.dialogs[1]} itemsFound={this.state.itemsFound} />
                    </SwiperSlide>
    
                    <SwiperSlide>
                        <RenderDialog dialogs={this.dialogs[2]} itemsFound={this.state.itemsFound} />
                    </SwiperSlide>
                </Swiper>
                <br />
            </div>
        )
    }
    
}

const RenderDialog = ({ dialogs, itemsFound = null }) => {
    
    let toSearchIn = null;

    itemsFound ? toSearchIn = itemsFound : toSearchIn = dialogs;

    return ( 
        <div>
            {
                toSearchIn.map((dialog) => {
                    return <DialogItem key={dialog.id} dialog={dialog} />
                })
            }
        </div>
    )
}
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


    render() {
        return (

            <Swiper className="mySwiper" initialSlide="1" onSlideChange={this.slideChanged}>
                <Header slot="container-start" groupId={this.state.slideGroup} onSearch={this.renderSearchItems} dialogs={this.dialogs} />
                <div className="dialog-container">
                    <SwiperSlide>
                        <SettingPage />
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.addContact()}
                        <RenderDialog dialogs={this.dialogs[0]} itemsFound={this.state.itemsFound} groupId={0} />
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.addContact()}
                        <RenderDialog dialogs={this.dialogs[1]} itemsFound={this.state.itemsFound} groupId={1} />
                    </SwiperSlide>


                    <SwiperSlide>
                        {this.addContact()}
                        <RenderDialog dialogs={this.dialogs[2]} itemsFound={this.state.itemsFound} groupId={2} />
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
                        return <DialogItem key={dialog.id} dialog={dialog} groupId={groupId} />
                    })
                }
            </div>
        )
    else return <div></div>
}
import React, {Component} from 'react';
import { SwiperSlide } from "swiper/react";
import SettingPage from '../settingPage';
import DialogItem from '../../dialogItem'
import AddContact from '../../addContact/addContact';

export default class DialogList extends Component {

    addContact = () => {
        if (this.props.dialogs[0] && this.props.dialogs[0].length === 0) {
            return (<AddContact />)
        }
    }
    render(){
        return(
            <div className="dialog-container">
                <SwiperSlide>
                    <SettingPage/>
                </SwiperSlide>

                <SwiperSlide>
                    {this.addContact()}
                    <RenderDialog dialogs={this.props.dialogs[0]} itemsFound={this.props.itemsFound} groupId={0} />
                </SwiperSlide>

                <SwiperSlide>
                    {this.addContact()}
                    <RenderDialog dialogs={this.props.dialogs[1]} itemsFound={this.props.itemsFound} groupId={1} />
                </SwiperSlide>

                <SwiperSlide>
                    {this.addContact()}
                    <RenderDialog dialogs={this.props.dialogs[2]} itemsFound={this.props.itemsFound} groupId={2} />
                </SwiperSlide>
            </div>
        )
    }
    
}
const RenderDialog = ({ dialogs, itemsFound = null, groupId }) => {

    let toSearchIn = null;

    itemsFound ? toSearchIn = itemsFound : toSearchIn = dialogs;
    if (dialogs){
        return (
            <div>
                {
                    toSearchIn.map((dialog) => {

                        const socket = new WebSocket("ws://" + window.location.host + `/ws/room/${dialog.id}/`)
                        socket.onopen = function() {
                            alert("Соединение установлено. " + dialog.id);
                        };
                        return <DialogItem key={dialog.id} dialog={dialog} groupId={groupId} />
                    })
                }
            </div>
        )
    }
    else return <div></div>
}

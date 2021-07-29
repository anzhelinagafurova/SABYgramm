import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import DialogItem from '../../dialogItem/dialogItem';
import SabygramService from '../../../services/SabygramService';
import Header from '../../header';
import './dialogs.scss';
import AddContact from '../../addContact/addContact';
import SettingPage from '../settingPage';
import { connect } from "react-redux";



class Dialogs extends Component {
    service = new SabygramService();

    state = {
        slideGroup: 0,
        itemsFound: null,
        dialogs: [],
    }
    componentDidUpdate() {
        const { update } = this.props
        console.log(update)
        if (update) {
            this.updateDialogs();
            this.props.shouldUpdate(false);
        }
    }


    componentDidMount() {
        this.updateDialogs();
        this.props.shouldUpdate(false);
    }

    updateDialogs() {
        this.service.sendDataPost({ status: 80 }, '/dialogs')
            .then((dialogs) => dialogs.json())
            .then((result) => {
                this.setState({ dialogs: result });
            })

        this.service.sendDataPost({ status: 70 }, '/dialogs')
        .then((dialogs) => dialogs.json())
        .then((result) => {
            this.props.setProfilePhoto(result.image_link)
            this.props.setUserName(result.name)
            this.props.setWelcomeMessage(result.welcome_msg)
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
        if (this.state.dialogs[0]
            && this.state.dialogs[0].length === 0
            && this.state.dialogs[1].length === 0
            && this.state.dialogs[2].length === 0
        ) {
            return (<AddContact />)
        }
    }

    renderDialog = (dialogs, itemsFound = null, groupId = null) => {

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
                        {this.renderDialog(this.state.dialogs[0], this.state.itemsFound, 0,)}
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.addContact()}
                        {this.renderDialog(this.state.dialogs[1], this.state.itemsFound, 1,)}
                    </SwiperSlide>

                    <SwiperSlide>
                        {this.addContact()}
                        {this.renderDialog(this.state.dialogs[2], this.state.itemsFound, 2,)}
                    </SwiperSlide>
                </div>
            </Swiper>
        )
    }
}

const mapStateToProps = ({ update }) => {
    return {
        update
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProfilePhoto: (photo) => dispatch({ type: "SET_MY_PROFILE_PHOTO", payload: photo }),
        setUserName: (name) => dispatch({ type: "SET_MY_USER_NAME", payload: name }),
        setWelcomeMessage: (message) => dispatch({ type: "SET_MY_WELCOME_MESSAGE", payload: message }),
        shouldUpdate: (update) => dispatch({ type: "SHOULD_UPDATE", payload: update })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);


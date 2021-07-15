import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import DialogItem from '../../dialogItem/dialogItem';
import SabygramService from '../../../services/SabygramService';
import Header from '../../header';
import './dialogs.scss';
import AddContact from '../../addContact/addContact';

const Dialogs = ({ groupId }) => {
    const [slideGroup, setSlideGroup] = useState(+groupId);
    const [itemsFound, setFound] = useState(null);

    const service = new SabygramService();
    const dialogs = service.getDialogData(slideGroup);

    const slideChanged = (e) => {
        if (e) {
            setSlideGroup(e.activeIndex)
        }
    }

    const RenderSearchItems = (dialogs, groupId) => {
        if (groupId === slideGroup)
            setFound(dialogs)
    }

    const addContact = () => {
        if (dialogs.length === 0) {
            return (<AddContact />)
        }
    }

    return (
        <div className="dialog-container">
            <Header groupId={slideGroup} onSearch={RenderSearchItems} dialogs={dialogs} />
            <Swiper className="mySwiper" onSlideChange={slideChanged}>
                <SwiperSlide>
                    {addContact()}
                    <RenderDialog groupId={0} service={service} itemsFound={itemsFound} />
                </SwiperSlide>

                <SwiperSlide>
                    <RenderDialog groupId={1} service={service} itemsFound={itemsFound} />
                </SwiperSlide>

                <SwiperSlide>
                    <RenderDialog groupId={2} service={service} itemsFound={itemsFound} />
                </SwiperSlide>
            </Swiper>
            <br />

        </div>
    )
}

const RenderDialog = ({ groupId, service, itemsFound = null }) => {
    let toSearchIn = null;

    itemsFound ? toSearchIn = itemsFound : toSearchIn = service.getDialogData(groupId);

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

export default Dialogs;
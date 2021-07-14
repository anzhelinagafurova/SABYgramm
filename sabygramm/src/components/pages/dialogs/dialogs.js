import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import DialogItem from '../../dialogItem/dialogItem';
import SabygramService from '../../../services/SabygramService';
import './dialogs.scss';

const Dialogs = ({ groupId }) => {
    const service = new SabygramService()
    const dialogs = service.getDialogData(groupId);
    if (dialogs)
        return (
            <div className="dialog-container">
                <Swiper className="mySwiper" onSlideChange={() => console.log('slide change')}>
                    <SwiperSlide>
                        <RenderDialog groupId={0} service={service} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RenderDialog groupId={1} service={service} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RenderDialog groupId={2} service={service} />
                    </SwiperSlide>
                    <SwiperSlide>Возможно первый слайд будет для меню, чтобы свайпать</SwiperSlide>
                </Swiper>

            </div>
        )
    return null;
}

const RenderDialog = ({ groupId, service }) => {
    return (
        <div>
            {
                service.getDialogData(groupId).map((dialog) => {
                    return <DialogItem key={dialog.id} dialog={dialog} />
                })
            }
            <h4 > Группа {groupId}</h4 >
        </div>
    )
}

export default Dialogs;
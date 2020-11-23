import React from 'react';
import s from '../components/Dialogs/Dialogs.module.css'


const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima', img: <img className={s.photoUsers} src='https://yt3.ggpht.com/a/AATXAJw0LB3RNN12XLFoLzdvBUKPQQzun11LC3QoJ7lu=s900-c-k-c0x00ffffff-no-rj' /> },
        { id: 2, name: 'Andrew', img: <img className={s.photoUsers} src='https://avatars.mds.yandex.net/get-zen_doc/175411/pub_59f2111ba936f409082a727b_59f2114055876bfff3b46868/scale_1200' /> },
        { id: 3, name: 'Sveta', img: <img className={s.photoUsers} src='https://r5.mt.ru/r24/photo68CF/20528979120-0/jpg/bp.jpeg' /> },
        { id: 4, name: 'Sasha', img: <img className={s.photoUsers} src='https://i.pinimg.com/736x/c9/be/9a/c9be9aa8f679c5eb7bcd0d8e9c279029.jpg' /> },
        { id: 5, name: 'Viktor', img: <img className={s.photoUsers} src='https://yt3.ggpht.com/a/AATXAJy1ghUd3uxmPGrDlD0Io1JvLVyfoLM8_w-Wy3lk=s900-c-k-c0xffffffff-no-rj-mo' /> },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Here nothing special.' },
        { id: 3, message: 'You can just add a message. ' },
        { id: 4, message: 'Are you cool?' },
        { id: 5, message: 'Yes, of course, you are cool!' }
    ],

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;
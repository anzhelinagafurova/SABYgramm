import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './dialogItem.scss';
import ChatMenu from '../chatMenu/chatMenu';

class DialogItem extends Component {


    state = {
        display: "none",
        messagesUnread: 0,
        lastMessage: null
    }

    timer = null

    componentDidMount = () => {
        document.getElementById('root').addEventListener('click', () => {
            this.setState({
                display: "none"
            })
        })
        const foundSocket = this.props.sockets.find((socket) => socket.id === this.props.dialog.id_pair);

        if (!foundSocket) {
            const socket = new WebSocket("ws://" + window.location.host + `/ws/room/${this.props.dialog.id_pair}/`)
            socket.onopen = () => {
                console.log("Соединение установлено. " + this.props.dialog.id_pair);
            };
            socket.onclose = () => {
                console.log("Соединение закрыто. " + this.props.dialog.id_pair);
            };
            socket.onmessage = (event) => {
                console.log("Данные получены: " + event.data + " " + this.props.dialog.id_pair);
                const data = JSON.parse(event.data);

                if (data.user_id.toString() !== this.props.myId.toString()) {
                    this.setState({
                        // messagesUnread: this.state.messagesUnread + 1,
                        lastMessage: data.message
                    })

                    this.props.addNotification(this.props.dialog.id_pair)
                }
            }
            this.props.addSocket({ id: this.props.dialog.id_pair, socket })
        }
    }

    constructor(props) {
        super(props);
        this.onHistoryPush = this.onHistoryPush.bind(this);
    }

    touchend = () => {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null
        }
    }

    touchstart = () => {
        if (!this.timer) {
            this.timer = setTimeout(() => {
                this.setState({
                    display: "block"
                })

            }, 500);
        }
    };
    onHistoryPush = () => {
        const { dialog: { name, img, id, id_pair }, groupId } = this.props;
        this.props.history.push({
            pathname: `/chatapp/${id_pair}`,
            state: {
                id: id,
                name: name,
                img: img,
                groupId: groupId,
                id_pair: id_pair,
            }
        }
        );
    }

    handleClick = () => {
        if (this.state.display !== 'block') {
            this.onHistoryPush();
        }

    };
    render() {
        const note = this.props.notifications.find((notification) => notification.id === this.props.dialog.id_pair);
        console.log(note)
        let counter = 0;
        if (note !== undefined) {
            // this.setState({
            //     messagesUnread: note.counter
            // })
            counter = note.counter
        }


        const { dialog: { name, lastMessage, img, id_pair, timing, id }, groupId } = this.props
        let time = timing
        time = timing.toString().split(' ')[1].split(':')[0] + ':' + timing.toString().split(' ')[1].split(':')[1]
        let clazz = "";

        switch (groupId) {
            case 0:
                clazz = "dialog-notification common-dialog";
                break
            case 1:
                clazz = "dialog-notification loud-dialog";
                break
            case 2:
                clazz = "dialog-notification silent-dialog";
                break
            default:
                clazz = "dialog-notification";
        }
        return (

            <div className="dialog" onTouchStart={this.touchstart} onTouchEnd={this.touchend} onMouseDown={this.touchstart} onMouseUp={this.touchend} onClick={this.handleClick}>
                <img src={img ? img : 'https://media.istockphoto.com/photos/smiling-man-portrait-made-of-vegetables-and-fruits-picture-id466161171'} alt="dialogPicture" className="dialog-img" />
                <div className="dialog-contain" >
                    <p className="dialog-name">{name}</p>
                    <p className="dialog-message">{this.state.lastMessage || lastMessage}</p>
                </div>
                <div className="dialog-timeNot">
                    <p className="dialog-timing">{time}</p>
                    {
                        counter !== 0 ? <p className={clazz}>{counter}</p> : <></>
                    }

                </div>
                <ChatMenu groupId={groupId} display={this.state.display} id_pair={id_pair} id={id} margin={"55px"} />
            </div>
        )
    }

}
const mapStateToProps = ({ myId, notifications, sockets }) => {
    return {
        myId,
        notifications,
        sockets
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addSocket: (socketInfo) => dispatch({ type: "ADD_SOCKET", payload: socketInfo }),
        addNotification: (notification) => dispatch({ type: "ADD_NOTIFICATION", payload: notification })
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DialogItem));

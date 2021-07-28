import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import './dialogItem.scss';
import ChatMenu from '../chatMenu/chatMenu';

class DialogItem extends Component {


    state = {
        display: "none",
        socket: null
    }

    timer = null

    componentDidMount = () => {
        document.getElementById('root').addEventListener('click', () => {
            this.setState({
                display: "none"
            })
        })
        // const socket = new WebSocket("ws://" + window.location.host + `/ws/room/${this.props.dialog.id_pair}/`)

        // socket.onopen = () => {
        //     console.log("Соединение установлено. " + this.props.dialog.id_pair);
        // };
        // socket.onclose = () => {
        //     console.log("Соединение закрыто. " + this.props.dialog.id_pair);
        //   };
        // socket.onmessage = () => {
        //     console.log("Сообщение получено. " + this.props.dialog.id_pair)
        // }
    }

    // componentWillUnmount() {
    //     this.state.socket.close()
    // }

    // handleSocketMessage = (event) => {
    //     console.log("Данные получены: " + event.data);
    //     this.addSocketMessage(JSON.parse(event.data).message, "incoming")
    // }
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
    onHistoryPush() {
        const { dialog: { name, img, id, id_pair }, groupId } = this.props
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
        const { dialog: { name, lastMessage, img, id_pair, timing, id }, groupId, onUpdate } = this.props
        let time = timing
        time = timing.toString().split(' ')[1].split(':')[0] + ':' + timing.toString().split(' ')[1].split(':')[1]

        return (

            <div className="dialog" onTouchStart={this.touchstart} onTouchEnd={this.touchend} onMouseDown={this.touchstart} onMouseUp={this.touchend} onClick={this.handleClick}>
                <img src={img ? img : 'https://media.istockphoto.com/photos/smiling-man-portrait-made-of-vegetables-and-fruits-picture-id466161171'} alt="dialogPicture" className="dialog-img" />
                <div className="dialog-contain" >
                    <p className="dialog-name">{name}</p>
                    <p className="dialog-message">{lastMessage}</p>
                </div>
                <div className="dialog-timing">{time}</div>
                <ChatMenu groupId={groupId} display={this.state.display} id_pair={id_pair} id={id} margin={"55px"} onUpdate={onUpdate} />
            </div>


        )
    }

}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSocket: (socket, socketId) => dispatch({type: "ADD_NEW_SOCKET", payload: {socket, socketId}})
//     }
// }
export default withRouter(DialogItem);
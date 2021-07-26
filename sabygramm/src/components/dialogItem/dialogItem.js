import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './dialogItem.scss';
import ChatMenu from '../chatMenu/chatMenu';

class DialogItem extends Component {
    socket = new WebSocket("ws://" + window.location.host + `/ws/room/${this.props.dialog.id_pair}/`)

    state = {
        display: "none",
        canChange: false
    }

    timer = null

    componentDidMount() {
        document.getElementById('root').addEventListener('click', () => {
            this.setState({
                display: "none"
            })
        })
        this.socket.onopen = () => {
            console.log("Соединение установлено. " + this.props.dialog.id_pair);
        };
        this.socket.onmessage = (event) => {
            console.log("Данные получены: " + event.data);
        };
    }

    constructor(props) {
        super(props);
        this.onHistoryPush = this.onHistoryPush.bind(this);
    }

    touchend = () => {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null
            this.setState({ canChange: true })
        }
    }

    touchstart = () => {
        if (!this.timer) {
            this.timer = setTimeout(() => {
                this.setState({
                    display: "block",
                    canChange: false
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
                id_pair: id_pair
            }
        }
        );
    }

    handleClick = () => {
        this.onHistoryPush();

    };
    render() {
        const { dialog: { name, lastMessage, img, id_pair, timing, id }, groupId } = this.props
        let time = timing
        time = timing.toString().split(' ')[1].split(':')[0] + ':' + timing.toString().split(' ')[1].split(':')[1]

        return (
            <div className="dialog" onTouchStart={this.touchstart} onTouchEnd={this.touchend} onMouseDown={this.touchstart} onMouseUp={this.touchend}>
                <img src={img} alt="dialogPicture" onClick={this.handleClick} className="dialog-img" />
                <div className="dialog-contain" >
                    <p className="dialog-name">{name}</p>
                    <p className="dialog-message">{lastMessage}</p>
                </div>
                <div className="dialog-timing">{time}</div>
                <ChatMenu groupId={groupId} display={this.state.display} id_pair={id_pair} id={id} margin={"55px"} canChange={this.state.canChange} />
            </div>
        )
    }

}



export default withRouter(DialogItem);
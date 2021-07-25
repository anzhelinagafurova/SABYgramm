import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './dialogItem.scss';
import ChatMenu from '../chatMenu/chatMenu';

class DialogItem extends Component {
    socket = new WebSocket("ws://" + window.location.host + `/ws/room/${this.props.dialog.id}/`)
    
    state = {
        display: "none"
    }

    timer = null

    componentDidMount(){
        document.getElementById('root').addEventListener('click', () => {
            this.setState({
                display: "none"
            })
          })
        this.socket.onopen = function() {
            alert("Соединение установлено. " + this.props.dialog.id);
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
        const { dialog: { name, img, id }, groupId } = this.props
        this.props.history.push({
            pathname: `/chatapp/${id}`,
            state: {
                id: id,
                name: name,
                img: img,
                groupId: groupId
            }
        }
        );
    }

    handleClick = () => {
        this.onHistoryPush();

    };
    render() {
        const { dialog: { name, lastMessage, img, id, timing }, groupId } = this.props
        let time = timing
        time = timing.toString().split(' ')[1].split(':')[0] + ':' + timing.toString().split(' ')[1].split(':')[1]
        
        return (
            <div className="dialog" onClick={this.handleClick} onTouchStart={this.touchstart} onTouchEnd={this.touchend} onMouseDown={this.touchstart} onMouseUp={this.touchend}>
                <img src={img} alt="dialogPicture" className="dialog-img" />
                <div className="dialog-contain">
                    <p className="dialog-name">{name}</p>
                    <p className="dialog-message">{lastMessage}</p>
                </div>
                <div className="dialog-timing">{time}</div>
                <ChatMenu groupId={groupId} display={this.state.display} id={id} margin={"55px"}/>

            </div>
        )
    }
    
}



export default withRouter(DialogItem);
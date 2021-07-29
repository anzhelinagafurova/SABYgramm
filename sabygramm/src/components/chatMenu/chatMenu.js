import React from 'react';
import './chatMenu.scss';
import { connect } from "react-redux";
import SabygramService from '../../services/SabygramService';
import { useHistory } from 'react-router-dom';


const ChatMenu = ({ display, groupId, id, margin, id_pair, shouldUpdate }) => {

  const service = new SabygramService();
  const history = useHistory();
  const handleClick = () => {

    history.push(`/dialogs`);

    shouldUpdate(true);

  }
  const onHandleClicked = (id, group_number) => {
    service.handleDialogs({
      status: 0,
      user_id: id,
      id_pair: id_pair,
      group_number: group_number
    }, '/dialogs')
    handleClick()
  }


  if (display === "block") {
    switch (groupId) {
      case 0:
        {

          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li onClick={function () { onHandleClicked(id, 2) }}>Сделать тихим</li>
              <li onClick={function () { onHandleClicked(id, 1) }}>Сделать гроким</li>
              <li>Удалить</li>
            </ul>
          )
        }
      case 1:
        {
          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li onClick={function () { onHandleClicked(id, 0) }}>Сделать общим</li>
              <li onClick={function () { onHandleClicked(id, 2) }}>Сделать тихим</li>
              <li>Удалить</li>
            </ul>
          )
        }
      case 2:
        {
          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li onClick={function () { onHandleClicked(id, 0) }}>Сделать общим</li>
              <li onClick={function () { onHandleClicked(id, 1) }}>Сделать гроким</li>
              <li>Удалить</li>
            </ul>
          )
        }

      default: return (<div>ups...</div>)
    }
  }
  return (
    <p></p>
  )
}

const mapStateToProps = ({ update }) => {
  return {
    update
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    shouldUpdate: (update) => dispatch({ type: "SHOULD_UPDATE", payload: update })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatMenu);
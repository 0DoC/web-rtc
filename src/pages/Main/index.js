import {useState, useEffect, useRef} from 'react';
import socket from '../../socket';
import ACTIONS from '../../socket/actions';
import {useNavigate} from 'react-router';
import {v4} from 'uuid';
import { Navigate } from "react-router-dom";



export default function Main() {
  const navigate = useNavigate();
  const [rooms, updateRooms] = useState([]);
  const rootNode = useRef();
  console.log('Message');
  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
      if (rootNode.current) {
        updateRooms(rooms);
      }
    });
  }, []);
  const room_id = v4();
  console.log(room_id);
  return (
    
    <div ref={rootNode}>
      <h1>Available Rooms</h1>

      <ul>
        {rooms.map(roomID => (
          <li key={roomID}>
            {roomID}
            <button onClick={() => {
              navigate(`/room/${roomID}`);
            }}>JOIN ROOM</button>
          </li>
        ))}
      </ul>

      <button onClick={() => {

        navigate(`/room/${room_id}`);
      }}>Create New Room</button>
    </div>
  );
}
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
      <img src="https://andersen-cluster-bucket.s3.us-east-2.amazonaws.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-07-20%20%D0%B2%2017.57.40.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaDGV1LWNlbnRyYWwtMSJHMEUCIQDCn309toD5VEeMUmLNbCt4cwQaeed%2FlIFik5I9r5GzkgIgSFi7EEJ4BV48qZx02jv%2FrPDPs7mdYBtWxEoG6jzIsP8qiAMIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwxMDA1MjU5MTUxMjgiDEgAZJ1Xn98a%2BOYwYyrcAlqc0oq%2FRaBDX7mi0bQSDSSLJpk453%2BL26c1rJqVGqCqEgTXROs5KO814fAZaU8OY3HsY%2FEvkmcaPlPJesIDDKIHpNbur%2F8Y3V3UuQ1YV9FJcQ74Wxp6PyrqRQlqcmAj7wxF7Wkd6VlIAwi%2Fv5jYLj8GTezFZTcKGjdY8oktX9TWW1l4mhD6kuwl3fgx9RPT3so%2FUcReS%2BtK5tzcy0Ceh5JprzPfPZwbujMunKSlVAjhTnaW6tZpkTqLJUxH5lZJ9WR%2B7uCy7yGuh%2Bn%2B3YcGbVjybLz0BRgQ%2FkJCf73zKVnUbl2zOfr0IxgxJzCEi4lt4kPUx5R9JcxE%2B1DuqiIFWIlyw2H56dAomJb1xOowSECgCMdk%2B%2FAWspmwSMvZsZZ%2BxN%2FkJXY591sFlR2mCUlVhw94Reri5IZ1VxcZvsoNgrApAyMEbK9gel0zKnOBGJ%2B8l%2FeIyLKP%2Bxix3TYqRTCutOWlBjqzAn%2BHyIfrprEB62mjn7zE%2FzgVJuCg%2Fj9yIYABhpVSz5ZRDohmCVShFbTtEtjkpljIIukoIieHPVgTJe3bv7HbNlgDmN8XusP5bD3aFPReE6rMYnyZeq8h7GAqHa4FeiKsFBdsX4GwV03JmqxDyUMF3rBY5xNUQiZ2WmAV%2BM8tIpM9ZZSZTtUg7NqD7ZuaaoXfzLh5UJetL5NsdfksuCcKvL9UExdPB3izB8CwDfd33%2FqJf3Om5Nh3uAe8Q0MH7TLMram15d6h8QqpMNlsorB2kMy4BI0y6mV08vE2bGC3Wr4dYt0Q5kLgVLxiueCAGlg52LWw7eCdQOkMTU6K0RF0eJmQqN%2Fe4mWtQqqTt%2FpafaZxOawyfdyv1GQLA13dYpkLnodFo%2FHuP263nkOVdC7Doakbnqo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230720T161108Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAROZ6PXP4D736IT7K%2F20230720%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=0f7d09d82a4bc49f8b9721721c77a5c2a9630f53600da361d467bda22c2188df">
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
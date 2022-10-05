import './My.css';
import MyTime from './MyTime';

function MyTick() {
  return ( //반드시 리턴있어야함.
   <>
      <h2 className='myh2'>현재 시간 
     </h2>
     <MyTime />
   </>
  );
}

export default MyTick; //반드시 출력해야함.

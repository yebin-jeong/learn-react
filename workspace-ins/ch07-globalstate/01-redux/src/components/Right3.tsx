import counterActionCreator from '@/redux/counterActionCreator';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => dispatch(counterActionCreator.countUp(3)) }>+1</button>
    </div>
  );
}

export default Right3;
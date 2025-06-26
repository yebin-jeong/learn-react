import { countAtom } from '@/jotai/atoms';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  const [ count, setCount ] = useAtom(countAtom);
  const countUp = (step: number) => {
    setCount(count + step);
  };

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => countUp(1) }>+1</button>
    </div>
  );
}

export default Right3;
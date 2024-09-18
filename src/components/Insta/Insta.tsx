import { useState } from 'react';
import 'src/components/Insta/Insta.scss';
import { Button } from 'src/shared/ui/Button/Button';

function Insta() {
  const [smallSquares, setSmallSquares] = useState(4);

  const addMoreSquares = () => {
    setSmallSquares(smallSquares + 4);
  };
  return (
    <div className='insta'>
      <p className='insta__title'>мы в инстаграме</p>
      <div className='insta__container'>
        <div className='insta__big'></div>
        {Array.from({ length: smallSquares }).map((_, index) => (
          <div key={index} className='insta__small'></div>
        ))}
      </div>
      <Button className='button__button-insta' onClick={addMoreSquares}>
        показать ещё
      </Button>
    </div>
  );
}

export default Insta;

import { useEffect, useRef, useState } from 'react';
import 'src/components/Insta/Insta.scss';
import { DESCTOP_SCREEN, TABLET_SCREEN } from 'src/shared/consts/constants';
import { Button } from 'src/shared/ui/Button/Button';

function Insta() {
  const [smallSquares, setSmallSquares] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateSquareCount() {
      setSmallSquares(5);
    }
    updateSquareCount();

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const containerRef = useRef<HTMLDivElement>(null);

  function addMoreSquares() {
    setSmallSquares(
      (prev) =>
        prev +
        (windowWidth >= DESCTOP_SCREEN
          ? 4
          : windowWidth >= TABLET_SCREEN
          ? 3
          : 1)
    );

    setTimeout(() => {
      const button = document.querySelector('.button__button-insta');
      if (button) {
        button.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  }

  return (
    <div className='insta'>
      <p className='insta__title'>мы в инстаграме</p>
      <div className='insta__container' ref={containerRef}>
        {Array.from({ length: smallSquares }).map((_, index) => (
          <div key={index} className='insta__square'></div>
        ))}
      </div>
      <Button className='button__button-insta' onClick={addMoreSquares}>
        показать ещё
      </Button>
    </div>
  );
}

export default Insta;

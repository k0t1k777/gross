import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import 'src/components/Insta/Insta.scss';
import { DESCTOP_SCREEN, TABLET_SCREEN } from 'src/shared/consts/constants';
import { Button } from 'src/shared/ui/Button/Button';
import { Subtitle } from 'src/shared/ui/Subtitle/Subtitle';

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
  }

  return (
    <section className='insta'>
      <Subtitle text={'мы в инстаграме'} className='subtitle__insta' />
      <motion.div className='insta__container' ref={containerRef}>
        {Array.from({ length: smallSquares }).map((_, index) => (
          <motion.div
            key={index}
            className='insta__square'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.02 }}
          ></motion.div>
        ))}
      </motion.div>
      <Button className='button__button-insta' onClick={addMoreSquares}>
        показать ещё
      </Button>
    </section>
  );
}

export default Insta;

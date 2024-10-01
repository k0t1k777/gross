import 'src/components/Vacancy/Vacancy.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { Icon } from 'src/shared/ui/Icon/Icon';
import { Caption } from 'src/shared/ui/Caption/Caption';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useEffect, useRef, useState } from 'react';
import { VACANCY_DATA } from 'src/shared/mock/mock';
import { Subtitle } from 'src/shared/ui/Subtitle/Subtitle';

function Vacancy() {
  const [statusBtnSlide, setStatusBtnSlide] = useState({
    start: true,
    end: false,
  });
  const swiperRef = useRef<SwiperType | null>(null);

  const handleDisBtn = () => {
    if (swiperRef.current) {
      setStatusBtnSlide({
        start: swiperRef.current.isBeginning,
        end: swiperRef.current.isEnd,
      });
    }
  };

  const changeSlideBtn = (side: 'prev' | 'next') => {
    if (swiperRef.current) {
      if (side === 'prev') {
        swiperRef.current.slidePrev();
      } else if (side === 'next') {
        swiperRef.current.slideNext();
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      handleDisBtn();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleDisBtn();
  }, []);

  return (
    <section className='vacancy'>
      <div className='vacancy__head'>
        <Subtitle
          text={'вакансии в гросс маркете'}
          className='subtitle__vacancy'
        />
        <div className='vacancy__buttons'>
          <Button
            className='button__button-vacancy'
            onClick={() => changeSlideBtn('prev')}
            disabled={statusBtnSlide.start}
          >
            <Icon id='icon-left' className='svg__arrow' />
          </Button>
          <Button
            className='button__button-vacancy'
            onClick={() => changeSlideBtn('next')}
            disabled={statusBtnSlide.end}
          >
            <Icon id='icon-right' className='svg__arrow' />
          </Button>
        </div>
      </div>
      <div className='vacancy__slider'>
        <SwiperComponent
          onTransitionEnd={handleDisBtn}
          onSlideChange={handleDisBtn}
          loop={false}
          tag='ul'
          freeMode={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1440: {
              slidesPerView: 3.48,
            },
            1000: {
              slidesPerView: 3,
            },
            375: {
              slidesPerView: 3,
            },

          }}
          modules={[FreeMode]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className='vacancy__items'
        >
          {VACANCY_DATA.map((item, index) => (
            <SwiperSlide key={index} className='vacancy__card'>
              <img
                src={item.image}
                className='vacancy__photo'
                alt='Профессия человека'
              />
              <div className='vacancy__overlay'></div>
              <Caption name={item.profession} className='vacancy__caption' />
              <p className='vacancy__text'>{item.text}</p>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </section>
  );
}

export default Vacancy;

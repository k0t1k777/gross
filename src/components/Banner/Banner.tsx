import 'src/components/Banner/Banner.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';
import { Caption } from 'src/shared/ui/Caption/Caption';
import { BANER_DATA } from 'src/shared/mock/mock';
import { useRef, useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';
import { Button } from 'src/shared/ui/Button/Button';
import 'swiper/css';
import 'swiper/css/free-mode';

function Baner() {
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

  return (
    <section className='baner'>
      <h1 className='baner__title'>
        У тебя{' '}
        <span className='baner__title-block'>
          {swiperRef.current
            ? swiperRef.current.activeIndex === 0
              ? 'к этому'
              : 'всё под'
            : 'к этому'}
        </span>
        <span className='baner__title-inline'>
          {swiperRef.current
            ? swiperRef.current.activeIndex === 0
              ? 'талант'
              : 'контролем'
            : 'талант'}
        </span>
      </h1>
      <div className='baner__buttons'>
        <div className='baner__buttons-wrapper'>
          <Button
            className='button__button-baner'
            onClick={() => changeSlideBtn('prev')}
            disabled={statusBtnSlide.start}
          >
            <Icon id='icon-left' className='svg__arrow' />
          </Button>
        </div>
        <Button
          className='button__button-baner'
          onClick={() => changeSlideBtn('next')}
          disabled={statusBtnSlide.end}
        >
          <Icon id='icon-right' className='svg__arrow' />
        </Button>
      </div>
      <div className='baner__circle'>
        <SwiperComponent
          onTransitionEnd={() => {
            handleDisBtn();
          }}
          tag='ul'
          freeMode={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className='baner__items'
        >
          {BANER_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt='Фото мастера' className='baner__img' />
              <Caption
                className={
                  index === 1
                    ? 'baner__caption-professionUp'
                    : 'baner__caption-profession'
                }
                name={item.profession}
              />
              <Caption
                className={
                  index === 1 ? 'baner__caption-nameUp' : 'baner__caption-name'
                }
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </section>
  );
}

export default Baner;

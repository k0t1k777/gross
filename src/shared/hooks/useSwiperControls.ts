import React from 'react';
import { Swiper as SwiperType } from 'swiper';

// кастомный хук для слайдера

export function useSwiperControls(swiperRef: React.RefObject<SwiperType | null>) {
  const [statusBtnSlide, setStatusBtnSlide] = React.useState({
    start: true,
    end: false,
  });

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

  React.useEffect(() => {
    handleDisBtn();
  }, [swiperRef]);

  return { statusBtnSlide, handleDisBtn, changeSlideBtn };
}

import React from 'react';

// кастомный хук для плавного открытия попапа
// и его закрытие по оверлею, иконке и кнопке esc, 
// a так же fixed позициоинирование при скролле

export default function usePopupOpen() {
  const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false);
  const [isSticky, setIsSticky] = React.useState<boolean>(false);
  const popupContainerRef = React.useRef<HTMLDivElement | null>(null);
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePopup = React.useCallback(() => {
    setIsOpenPopup(false);
    document.body.style.overflow = 'auto';
  }, []);

  React.useEffect(() => {
    if (modalRef.current && isOpenPopup) {
      const modal = modalRef.current;
      modal.style.display = 'block';
      modal.style.opacity = '0';
      modal.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 400,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
    }
  }, [isOpenPopup]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (popupContainerRef.current) {
        setIsSticky(popupContainerRef.current.scrollTop > 100);
      }
    };

    const popupContainer = popupContainerRef.current;

    if (popupContainerRef.current) {
      popupContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (popupContainer) {
        popupContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpenPopup]);

  React.useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        handleClosePopup();
      }
    }

    function closeByOverlayClick(evt: MouseEvent) {
      const target = evt.target as HTMLElement;
      if (
        target.classList.contains('popup') ||
        target.classList.contains('button__close') ||
        target.classList.contains('svg-close')
      ) {
        handleClosePopup();
      }
    }

    if (isOpenPopup) {
      document.addEventListener('keydown', closeByEscape);
      document.addEventListener('click', closeByOverlayClick);
    }

    return () => {
      document.removeEventListener('keydown', closeByEscape);
      document.removeEventListener('click', closeByOverlayClick);
    };
  }, [isOpenPopup, handleClosePopup]);

  return {
    isSticky,
    modalRef,
    isOpenPopup,
    popupContainerRef,
    handleOpenPopup,
    handleClosePopup,
  };
}

import { Icon } from 'src/shared/ui/Icon/Icon';
import 'src/shared/ui/Popup/Popup.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { APROVE_DATA, APROVE_TITLE } from 'src/shared/consts/constants';
import { RefObject } from 'react';

interface PopupProps {
  isOpenPopup: boolean;
  isStickyPopup: boolean;
  handleClosePopup: () => void;
  modalRef: RefObject<HTMLDivElement>;
  popupContainerRef: RefObject<HTMLDivElement>;
}

export const Popup: React.FC<PopupProps> = ({
  modalRef,
  popupContainerRef,
  isStickyPopup,
  isOpenPopup,
  handleClosePopup,
}) => {
  
  return (
    isOpenPopup && (
      <div className='popup' aria-label='всплывающая форма' ref={modalRef}>
        <div className='popup__container' ref={popupContainerRef}>
          <p className='popup__title'>{APROVE_TITLE.title}</p>
          {APROVE_DATA.map((item, index) => (
            <div key={index}>
              <p className='popup__point'>{item.point}</p>
              <p className='popup__description'>{item.description}</p>
              {item.span && <p className='popup__span'>{item.span}</p>}
            </div>
          ))}
          <div
            className={`popup__sticky-container ${
              isStickyPopup ? 'popup__sticky-container_position_fixed' : ''
            }`}
          >
            <p className='popup__sticky-title'>{APROVE_TITLE.title}</p>
            <Button onClick={handleClosePopup} className='button__popup_close'>
              <Icon id='close' className='svg__close' />
            </Button>
          </div>
          <Button onClick={handleClosePopup} className='button__popup_close'>
            <Icon id='close' className='svg__close' />
          </Button>
        </div>
      </div>
    )
  );
};

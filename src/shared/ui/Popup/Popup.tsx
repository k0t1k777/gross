import { Icon } from 'src/shared/ui/Icon/Icon';
import 'src/shared/ui/Popup/Popup.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { APROVE_DATA } from 'src/shared/consts/constants';
import { Title } from 'src/shared/ui/Title/Title';
import { PopupProps } from 'src/shared/consts/types';

export const Popup= ({
  modalRef,
  popupContainerRef,
  isStickyPopup,
  isOpenPopup,
  handleClosePopup,
}: PopupProps) => {
  
  return (
    isOpenPopup && (
      <div className='popup' aria-label='всплывающая форма' ref={modalRef}>
        <div className='popup__container' ref={popupContainerRef}>
        <Title text='Обработка данных' />
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
            <Title text='Обработка данных' className='title__sticky'/>
            <Button onClick={handleClosePopup} className='button__popup_close'>
              <Icon id='close' />
            </Button>
          </div>
          <Button onClick={handleClosePopup} className='button__popup_close'>
            <Icon id='close' />
          </Button>
        </div>
      </div>
    )
  );
};

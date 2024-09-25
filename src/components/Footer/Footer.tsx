import 'src/components/Footer/Footer.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';
import LogoGroup from 'src/shared/ui/LogoGroup/LogoGroup';
import usePopupOpen from 'src/shared/libs/helpers/usePopupOpen';
import { Popup } from 'src/shared/ui/Popup/Popup';

export const Footer = () => {
  const {
    isOpenPopup,
    isStickyPopup,
    handleOpenPopup,
    handleClosePopup,
    modalRef,
    popupContainerRef,
  } = usePopupOpen();
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <LogoGroup />
        <p className='footer__share'>поделиться</p>
        <div className='footer__container-icon'>
          <Icon id='facebook' className='svg__footer' />
          <Icon id='vk' className='svg__footer' />
        </div>
        <p className='footer__copyright'>© Гросс маркет 2020</p>
        <p className='footer__politica' onClick={() => handleOpenPopup()}>
          Политика обработки персональных данных
        </p>
      </div>
      <Popup
        isOpenPopup={isOpenPopup}
        isStickyPopup={isStickyPopup}
        handleClosePopup={handleClosePopup}
        modalRef={modalRef}
        popupContainerRef={popupContainerRef}
      />
    </footer>
  );
}
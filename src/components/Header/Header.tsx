import 'src/components/Header/Header.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { Icon } from 'src/shared/ui/Icon/Icon';
import LogoGroup from 'src/shared/ui/LogoGroup/LogoGroup';
import usePopupOpen from 'src/shared/libs/helpers/usePopupOpen';
import { Popup } from 'src/shared/ui/Popup/Popup';

function Header() {
  const {
    isOpenPopup,
    isSticky,
    handleOpenPopup,
    handleClosePopup,
    modalRef,
    popupContainerRef,
  } = usePopupOpen();

  return (
    <header className='header'>
      <LogoGroup />
      <div className='header__container-button'>
        <p className='header__phone-logo'>+7 (926) 433-14-16</p>
        <Button className='button__header' onClick={() => handleOpenPopup()}>
          заполнить анкету
        </Button>
        <Icon id='phone' className='svg__phone' />
      </div>
      <Popup
        isOpenPopup={isOpenPopup}
        isSticky={isSticky}
        handleClosePopup={handleClosePopup}
        modalRef={modalRef}
        popupContainerRef={popupContainerRef}
      />
    </header>
  );
}

export default Header;

import { useNavigate } from 'react-router-dom';
import 'src/components/Header/Header.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { Icon } from 'src/shared/ui/Icon/Icon';
import LogoGroup from 'src/shared/ui/LogoGroup/LogoGroup';
import cn from 'classnames/bind';
import usePopupOpen from 'src/shared/libs/helpers/usePopupOpen';

export const Header = () => {
  const cx = cn.bind({});
  const navigate = useNavigate();
  const formRoute = location.pathname === '/form';
  const { isOpenPopup, isStickyButton } = usePopupOpen();

  function createForm() {
    navigate('/form');
  }

  function handleBack() {
    window.history.back();
  }

  return (
    <header className={cx('header', { header_type_grey: formRoute })}>
      <LogoGroup />
      {formRoute ? (
        <Button onClick={handleBack} className='button__header_back'>
          <Icon id='close' className='svg__close' />
        </Button>
      ) : (
        <div className='header__container-button'>
          <p className='header__phone-logo'>+7 (926) 433-14-16</p>
          <Button className='button__header' onClick={createForm}>
            заполнить анкету
          </Button>
          <Icon id='phone' className='svg__phone' />
        </div>
      )}
      {isStickyButton && !isOpenPopup && (
        <Button className='button__header_type-sticky' onClick={createForm}>заполнить анкету</Button>
        // <div className={`button_y ${isOpenPopup && 'header__none'}`}>
        // <Button className='button__header_type-sticky'>заполнить анкету</Button>
        // </div>
      )}
    </header>
  );
};

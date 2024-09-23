import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'src/components/Header/Header.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { Icon } from 'src/shared/ui/Icon/Icon';
import LogoGroup from 'src/shared/ui/LogoGroup/LogoGroup';
import cn from 'classnames/bind';
const cx = cn.bind({});

const Header = () => {
  const navigate = useNavigate();
  const [isStickyButton, setStickyButton] = useState(false);
  const formRoute = location.pathname === '/form';

  function createForm() {
    navigate('/form');
  }

  function handleBack() {
    window.history.back();
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setStickyButton(true);
    } else {
      setStickyButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cx('header', {'header_type_grey' : formRoute })}>
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
      {isStickyButton && (
        <Button className='button__header_type-sticky'>заполнить анкету</Button>
      )}
    </header>
  );
};

export default Header;

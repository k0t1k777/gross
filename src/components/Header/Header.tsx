import 'src/components/Header/Header.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { Icon } from 'src/shared/ui/Icon/Icon';
import LogoGroup from 'src/shared/ui/LogoGroup/LogoGroup';

function Header() {
  return (
    <div className='header'>
      <LogoGroup />
      <div className='header__container-button'>
        <p className='header__phone-logo'>+7 (926) 433-14-16</p>
        <Button className='button__header'>заполнить анкету</Button>
        <Icon id='phone' className='svg__phone' />
      </div>
    </div>
  );
}

export default Header;

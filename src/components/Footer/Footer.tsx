import 'src/components/Footer/Footer.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';
import LogoGroup from 'src/shared/ui/LogoGroup/LogoGroup';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <LogoGroup />
        <p className='footer__share'>поделиться</p>
        <div className='footer__container-icon'>
          <Icon id='facebook' className='svg__footer'/>
          <Icon  id='vk' className='svg__footer'/>
        </div>
        <p className='footer__copyright'>© Гросс маркет 2020</p>
        <p className='footer__politica'>Политика обработки персональных данных</p>
      </div>

    </div>
  );
}

export default Footer;

import 'src/shared/ui/LogoGroup/LogoGroup.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';

export default function LogoGroup() {
  return (
    <div className='logo'>
      <Icon id='logo' className='svg__logo'/>
      <h3 className='logo__text'>гросс маркет</h3>
    </div>
  );
}

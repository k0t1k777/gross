import 'src/shared/ui/LogoGroup/LogoGroup.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';
import { useNavigate } from 'react-router-dom';

export default function LogoGroup() {
  const navigate = useNavigate();

  function goToMain() {
    navigate('/');
  }
  
  return (
    <div className='logo'>
      <div onClick={goToMain}>
        <Icon id='logo' className='svg__logo' />
      </div>
      <h3 className='logo__text'>гросс маркет</h3>
    </div>
  );
}

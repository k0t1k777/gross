import 'src/components/Banner/Banner.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';
import Photo from 'src/shared/assets/valentin.png'

function Baner() {
  return (
    <div className='baner'>
      <h1 className='baner__title'>
        У тебя<br />к этому талант
      </h1>
      <div className='baner__buttons'>
        <div className='baner__button-container'>
        <Icon id='icon-left' className='svg__arrow'/>
        </div>
        <div className='baner__button-container'>
        <Icon id='icon-right' className='svg__arrow'/>
        </div>
      </div>
      {/* <img src={Photo} alt="Фото мастера" className='baner__img'/> */}
    </div>
  );
}

export default Baner;

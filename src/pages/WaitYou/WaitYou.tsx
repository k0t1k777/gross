import 'src/pages/WaitYou/WaitYou.scss';
import { Subtitle } from 'src/shared/ui/Subtitle/Subtitle';

const WaitYou = () => {
  return (
    <section className='wait-you'>
      <Subtitle text={'Ждем тебя!'} className='subtitle__form' />
      <div className='form__wrapper'>
        <div className='form__container'>
          <p className='form__info_text'>
            В 2020 году самыми востребованными умениями и качествами на рынке
            труда станут:
          </p>
          <div>
            <p className='form__info_text'>
              Умение ставить цели, планировать свое время, инициативность,
              настойчивость, высокая мотивация, умение эффективно общаться,
              любознательность.
            </p>
          </div>
          <p className='form__info_text'>
            А профессиональным навыкам можно научить любого человека.
          </p>
        </div>
        <div className='form__info'>
          <h2 className='form__info_title'>Наша суперцель </h2>

          <div className='form__container_number'>
            <h3 className='form__number'>+7 (926) 433-14-16</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitYou;

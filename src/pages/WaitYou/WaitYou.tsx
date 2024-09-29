import 'src/pages/WaitYou/WaitYou.scss';
import { Title } from 'src/shared/ui/Title/Title';

const WaitYou = () => {
  return (
    <section className='wait-you'>
      <Title text={'Ждем тебя!'} />
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
          <h2 className='form__info_title'>Остались вопросы?</h2>

          <div className='form__container_number'>
            <h3 className='form__number'>+7 (926) 433-14-16</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitYou;

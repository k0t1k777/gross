import 'src/pages/WaitYou/WaitYou.scss';
import { Subtitle } from 'src/shared/ui/Subtitle/Subtitle';
import { Title } from 'src/shared/ui/Title/Title';

const WaitYou = () => {
  return (
    <section className='wait-you'>
      <Title text={'Ждем тебя!'} />
      <div className='wait-you__wrapper'>
        <div className='wait-you__container'>
          <p className='wait-you__info_text'>
            В 2020 году самыми востребованными умениями и качествами на рынке
            труда станут:
          </p>
          <div className='wait-you__container_border_left'>
            <p className='wait-you__info_little-text'>
              Умение ставить цели, планировать свое время, инициативность,
              настойчивость, высокая мотивация, умение эффективно общаться,
              любознательность.
            </p>
          </div>
          <p className='wait-you__info_text'>
            А профессиональным навыкам можно научить любого человека.
          </p>
        </div>
        <div className='wait-you__info'>
        <Subtitle text={'Остались вопросы?'} className='subtitle__form'/>
          <div className='wait-you__container_number'>
            <h3 className='wait-you__number'>+7 (926) 433-14-16</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitYou;

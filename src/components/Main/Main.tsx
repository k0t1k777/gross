import 'src/components/Main/Main.scss';
import Banner from 'src/components/Banner/Banner';
import Vacancy from 'src/components/Vacancy/Vacancy';
import Insta from 'src/components/Insta/Insta';

function Main() {
  return (
    <div className='main'>
      <Banner />
      <Vacancy />
      <Insta />
    </div>
  );
}

export default Main;

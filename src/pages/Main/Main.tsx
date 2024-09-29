import 'src/pages/Main/Main.scss';
import Banner from 'src/components/Banner/Banner';
import Vacancy from 'src/components/Vacancy/Vacancy';
import Insta from 'src/components/Insta/Insta';
import MapCity from 'src/components/MapCity/MapCity';

function Main() {
  return (
    <div className='main'>
      <Banner />
      <Vacancy />
      <Insta />
      <MapCity />
    </div>
  );
}

export default Main;

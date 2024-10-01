import 'src/pages/Main/Main.scss';
import Banner from 'src/components/Banner/Banner';
import Vacancy from 'src/components/Vacancy/Vacancy';
import MapCity from 'src/components/MapCity/MapCity';
import Instagram from 'src/components/Instagram/Instagram';

function Main() {
  return (
    <div className='main'>
      <Banner />
      <Vacancy />
      <Instagram />
      <MapCity />
    </div>
  );
}

export default Main;

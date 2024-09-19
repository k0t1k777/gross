import { useState } from 'react';
import { YMaps, Map, Placemark } from '@r3flector/react-yandex-maps';
import 'src/components/MapCity/MapCity.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { ULYANOVSK } from 'src/shared/consts/constants';
import { Icon } from 'src/shared/ui/Icon/Icon';

const locations = [
  { id: 1, name: 'Юрлицо 1', type: 'юрлица', coordinates: [54.3233, 48.3661] },
  { id: 2, name: 'Юрлицо 2', type: 'юрлица', coordinates: [54.3333, 48.3761] },
  {
    id: 3,
    name: 'Физлицо 1',
    type: 'физлица',
    coordinates: [54.3433, 48.3861],
  },
  {
    id: 4,
    name: 'Физлицо 2',
    type: 'физлица',
    coordinates: [54.3533, 48.3961],
  },
];

function MapCity() {
  const [zoom, setZoom] = useState(13);
  const [filter, setFilter] = useState('all');

  const increaseZoom = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 1, 19));
  };

  const decreaseZoom = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 1, 0));
  };

  const filteredLocations = locations.filter(
    (location) => filter === 'all' || location.type === filter
  );

  return (
    <div className='map'>
      <div className='map__wrapper'>
        <p className='map__title'>География</p>
        <div className='map__filters'>
          <Button className='button__map' onClick={() => setFilter('юрлица')}>
            юрлица
          </Button>
          <Button className='button__map' onClick={() => setFilter('физлица')}>
            физлица
          </Button>
          <Button
            className='button__map button__map_color_yelow'
            onClick={() => setFilter('all')}
          >
            показать всё
          </Button>
        </div>
        <div className='map__buttons-zoom'>

          <div className='map__buttons-zoom-wrapper'>
             <Button className='button__button-zoom' onClick={increaseZoom}>
              <Icon id='icon-left' className='svg__arrow' />
            </Button>
          </div>

          <Button className='button__button-zoom' onClick={decreaseZoom}>
            <Icon id='icon-left' className='svg__arrow' />
          </Button>
        </div>

        <div>
          <YMaps query={{ apikey: '65e426f5-d8ee-482a-be00-8f5d48ae88f8' }}>
            <Map
              state={{ center: ULYANOVSK, zoom: zoom }}
              className='map__container'
            >
              {filteredLocations.map((location) => (
                <Placemark
                  key={location.id}
                  geometry={location.coordinates}
                  properties={{ balloonContent: location.name }}
                />
              ))}
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
}

export default MapCity;

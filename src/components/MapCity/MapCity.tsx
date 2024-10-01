import { useState } from 'react';
import { YMaps, Map, Placemark } from '@r3flector/react-yandex-maps';
import 'src/components/MapCity/MapCity.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { Icon } from 'src/shared/ui/Icon/Icon';
import IconMap from 'src/shared/assets/IconMap.svg';
import { Subtitle } from 'src/shared/ui/Subtitle/Subtitle';
import { locations } from 'src/shared/mock/mock';
import { ULYANOVSK } from 'src/shared/consts/constants';

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
    <section className='map'>
      <Subtitle text={'география'} className='subtitle__map' />
      <div className='map__wrapper'>
        <div className='map__whith-buttons'>
          <div className='map__filters'>
            <Button className='button__map' onClick={() => setFilter('юрлица')}>
              юрлица
            </Button>
            <Button
              className='button__map'
              onClick={() => setFilter('физлица')}
            >
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
                <Icon id='plus' className='svg__plus' />
              </Button>
            </div>
            <Button className='button__button-zoom' onClick={decreaseZoom}>
              <Icon id='minus' className='svg__minus' />
            </Button>
          </div>
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
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: IconMap,
                    iconImageSize: [44, 44],
                    iconImageOffset: [-15, -15],
                  }}
                />
              ))}
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
}

export default MapCity;

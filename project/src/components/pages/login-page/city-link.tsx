import { AppRoute } from '../../../const';
import { cityTabs } from '../../../const';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const getRandomInteger = (min: number, max: number) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

function CityLink(): JSX.Element {
  const randomCity = cityTabs[getRandomInteger(0, cityTabs.length - 1)];

  return (
    <Link className="locations__item-link" to={AppRoute.Main}>
      <span>{randomCity}</span>
    </Link>
  );
}

export default memo(CityLink);

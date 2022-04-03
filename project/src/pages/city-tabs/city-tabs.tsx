import clsx from 'clsx';
import { cityTabs } from '../../const';
import { CityTabType } from '../../types/city-tab';
import { Link } from 'react-router-dom';

type CityTabsPropsType = {
  activeCityTab: CityTabType;
  handleListItemChange: (cityTab: CityTabType) => () => void;
};

function CityTabs({ activeCityTab, handleListItemChange }: CityTabsPropsType): JSX.Element {
  const cityTabsTemplate = cityTabs.map((cityTab) => (
    <li className="locations__item" key={cityTab} onClick={handleListItemChange(cityTab as CityTabType)}>
      <Link to="/" className={clsx('locations__item-link', 'tabs__item', { 'tabs__item--active': cityTab === activeCityTab })}>
        <span>{cityTab}</span>
      </Link>
    </li>
  ));

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">{cityTabsTemplate}</ul>
        </section>
      </div>
    </>
  );
}

export default CityTabs;

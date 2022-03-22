import { CityTabType } from '../../types/city-tab';
import { cityTabs } from '../../const';
import { Link } from 'react-router-dom';

type CityTabsPropsType = {
  activeCityTab: CityTabType;
  handleCityTabChange: (cityTab: CityTabType) => () => void;
};

function CityTabs({ activeCityTab, handleCityTabChange }: CityTabsPropsType): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityTabs.map((cityTab) => (
            <li className="locations__item" key={cityTab} onClick={handleCityTabChange(cityTab as CityTabType)}>
              <Link to="/" className={`locations__item-link tabs__item  ${cityTab === activeCityTab ? 'tabs__item--active' : ''}`}>
                <span>{cityTab}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;

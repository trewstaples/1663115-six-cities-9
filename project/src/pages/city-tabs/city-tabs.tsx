import { CityTabType } from '../../types/city-tab';
import { cityTabs } from '../../const';

type CityTabsPropsType = {
  handleCityChange: (cityTab: CityTabType) => () => void;
};

function CityTabs({ handleCityChange }: CityTabsPropsType): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityTabs.map((cityTab) => (
            <li className="locations__item" key={cityTab} onClick={handleCityChange(cityTab as CityTabType)}>
              <a className="locations__item-link tabs__item" href="/">
                <span>{cityTab}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;

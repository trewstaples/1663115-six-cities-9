import { CityCodeType } from '../../types/city-code';
import { cityCodes } from '../../const';

type CityTabsPropsType = {
  handleCityChange: (cityCode: CityCodeType) => () => void;
};

function CityTabs({ handleCityChange }: CityTabsPropsType): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityCodes.map((cityCode) => (
            <li className="locations__item" key={cityCode} onClick={handleCityChange(cityCode as CityCodeType)}>
              <a className="locations__item-link tabs__item" href="/">
                <span>{cityCode}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;

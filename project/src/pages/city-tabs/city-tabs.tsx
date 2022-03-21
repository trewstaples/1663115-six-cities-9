/* eslint-disable no-console */
import { cityCodes } from '../../mocks/city';

function CityTabs(): JSX.Element {
  const onCityChangeClick = (cityCode: string) => {
    console.log(cityCode);
  };
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityCodes.map((cityCode) => (
            <li className="locations__item" key={cityCode} onClick={(evt) => onCityChangeClick(cityCode)}>
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

import { sortTypes, OffersSortType } from '../../const';
import { OffersSortTypeKey } from '../../types/offers-sort';

//Поставить колбэк каждом уэлементу списка, который будет менять режим active у элементов
//В колбэк добавить смену сортировки исходного массива

function OffersSort(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortTypes.map((sortType) => (
          <li className="places__option places__option--active" tabIndex={0} key={sortType}>
            {OffersSortType[sortType as OffersSortTypeKey]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default OffersSort;

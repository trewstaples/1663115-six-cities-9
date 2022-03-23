/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { offersSortTypes, OffersSortType } from '../../const';
import { OffersSortTypeKey } from '../../types/offers-sort';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setOffersSortType } from '../../store/action';
import { useState } from 'react';

//Поставить колбэк каждом уэлементу списка, который будет менять режим active у элементов
//В колбэк добавить смену сортировки исходного массива

function OffersSort(): JSX.Element {
  const [isSortOpened, setIsSortOpened] = useState<boolean>(false);
  const activeSortType = useAppSelector((state) => state.offersSortType);
  const dispatch = useAppDispatch();

  const handleSortTypeChange = (offersSortType: OffersSortTypeKey) => {
    dispatch(setOffersSortType({ offersSortType }));
    setIsSortOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsSortOpened(!isSortOpened)}>
        {OffersSortType[activeSortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpened ? 'places__options--opened' : ''}`}>
        {offersSortTypes.map((offersSortType) => (
          <li
            className={`places__option ${activeSortType === offersSortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortTypeChange(offersSortType as OffersSortTypeKey)}
            key={offersSortType}
          >
            {OffersSortType[offersSortType as OffersSortTypeKey]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default OffersSort;

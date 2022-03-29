import { OffersType } from '../../types/offers';
import { offersSortTypes, OffersSortType } from '../../const';
import { OffersSortTypeKey } from '../../types/offers-sort';
import { setOffers, setOffersSortType } from '../../store/offers/action';
import { sortOffersByType } from '../../utils/sort';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';

type OffersTypePropsType = {
  offers: OffersType;
};

function OffersSort({ offers }: OffersTypePropsType): JSX.Element {
  const [defaultOffers] = useState(offers);
  const [isSortOpened, setIsSortOpened] = useState<boolean>(false);
  const activeSortType = useAppSelector((state) => state.offersSortType);
  const dispatch = useAppDispatch();

  const handleSortTypeChange = (offersSortType: OffersSortTypeKey) => {
    const offersForSort = offersSortType === OffersSortType.Popular ? defaultOffers : offers;
    const sortedOffers = sortOffersByType(offersSortType, offersForSort);

    dispatch(setOffersSortType({ offersSortType }));
    dispatch(setOffers({ sortedOffers }));
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

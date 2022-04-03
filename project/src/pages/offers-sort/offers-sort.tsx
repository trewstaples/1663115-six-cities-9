import clsx from 'clsx';
import { DEFAULT_OFFERS_SORT_TYPE, offersSortTypes, OffersSortType } from '../../const';
import { getFilteredOffers, getActiveSortType } from '../../store/offers-data/selector';
import { OffersSortTypeKey } from '../../types/offers-sort';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import React from 'react';
import { sortOffersByType } from '../../utils/offers-sort';
import { setOffers, setOffersSortType } from '../../store/offers-data/offers-data';

function OffersSort(): JSX.Element {
  const offers = useAppSelector(getFilteredOffers);
  const activeSortType = useAppSelector(getActiveSortType);
  const [defaultOffers, setDefaultOffers] = useState(offers);
  const [isSortOpened, setIsSortOpened] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activeSortType === DEFAULT_OFFERS_SORT_TYPE) {
      setDefaultOffers(offers);
    }
  }, [activeSortType, offers]);

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
      <ul className={clsx('places__options', 'places__options--custom', { 'places__options--opened': isSortOpened })}>
        {offersSortTypes.map((offersSortType) => (
          <li
            className={clsx('places__option', { 'places__option--active': offersSortType === activeSortType })}
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

export default React.memo(OffersSort);

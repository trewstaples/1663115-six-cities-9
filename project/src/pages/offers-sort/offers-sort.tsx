import { offersSortTypes, OffersSortType, DEFAULT_OFFERS_SORT_TYPE } from '../../const';
import { OffersSortTypeKey } from '../../types/offers-sort';

import { sortOffersByType } from '../../utils/offers-sort';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import React from 'react';
import clsx from 'clsx';
import { setOffers, setOffersSortType } from '../../store/offers-data/offers-data';
import { getFilteredOffers, getActiveSortType } from '../../store/offers-data/selector';

function OffersSort(): JSX.Element {
  const [isSortOpened, setIsSortOpened] = useState<boolean>(false);
  const offers = useAppSelector(getFilteredOffers);
  const [defaultOffers, setDefaultOffers] = useState(offers);
  const activeSortType = useAppSelector(getActiveSortType);

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

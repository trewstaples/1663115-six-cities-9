import { AppRoute } from '../../../const';
import FavoriteButton from '../favorite-button/favorite-button';
import { getRating, getType } from '../../../utils/offer-item';
import { generatePath, Link } from 'react-router-dom';
import { loadOfferItemAction, loadOffersNearbyAction, loadReviewsAction } from '../../../store/offer-item-data/api-action';
import { OfferType } from '../../../types/offers';
import { useDispatch } from 'react-redux';
import React from 'react';

type MouseOverType = (offerId: number) => void;

type OfferCardPropsType = {
  offer: OfferType;
  onMouseOverAndLeave?: MouseOverType;
};

function OfferCard({ offer, onMouseOverAndLeave }: OfferCardPropsType): JSX.Element {
  const dispatch = useDispatch();

  const handleTitleClick = () => {
    dispatch(loadOfferItemAction(offer.id));
    dispatch(loadOffersNearbyAction(offer.id));
    dispatch(loadReviewsAction(offer.id));
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => (onMouseOverAndLeave instanceof Function ? onMouseOverAndLeave(offer.id) : null)}
      onMouseLeave={() => (onMouseOverAndLeave instanceof Function ? onMouseOverAndLeave(0) : null)}
      data-testid="offer-card"
    >
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ''
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place"></img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offer={offer} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRating(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: `${offer.id}` })} onClick={handleTitleClick}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{getType(offer.type)}</p>
      </div>
    </article>
  );
}

export default React.memo(OfferCard);

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOfferItemAction, fetchOffersNearbyAction, fetchReviewsAction } from '../../store/offer-item/api-actions';
import { OfferType } from '../../types/offers';
import FavoriteButton from '../favorite-button/favorite-button';

type MouseOverType = (offerId: number) => void;

type OfferCardPropsType = {
  offer: OfferType;
  onMouseOver?: MouseOverType;
};

function OfferCard({ offer, onMouseOver }: OfferCardPropsType): JSX.Element {
  const dispatch = useDispatch();

  const handleTitleClick = () => {
    dispatch(fetchOfferItemAction(offer.id));
    dispatch(fetchOffersNearbyAction(offer.id));
    dispatch(fetchReviewsAction(offer.id));
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={() => (onMouseOver instanceof Function ? onMouseOver(offer.id) : null)}>
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
            <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} onClick={handleTitleClick}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type[0].toUpperCase() + offer.type.substring(1)}</p>
      </div>
    </article>
  );
}

export default React.memo(OfferCard);

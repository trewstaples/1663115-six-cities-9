import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offers-types';

type PlaceCardPropsType = {
  offer: OfferType;
  onMouseOver: (offer: OfferType) => void;
};

function PlaceCard({ offer, onMouseOver }: PlaceCardPropsType): JSX.Element {
  return (
    // eslint-disable-next-line no-console
    <article className="cities__place-card place-card" onMouseOver={() => onMouseOver(offer)}>
      <div className="place-card__mark">
        <span>{offer.premium}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={offer.photos[0]} width="260" height="200" alt="Place"></img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={offer.favorites ? 'place-card__bookmark-button button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

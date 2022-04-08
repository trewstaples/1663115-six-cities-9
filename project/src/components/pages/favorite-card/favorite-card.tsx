import FavoriteButton from '../favorite-button/favorite-button';
import { getRating, getType } from '../../../utils/offer-item';
import { OfferType } from '../../../types/offers';

type FavoriteCardPropsType = {
  offer: OfferType;
};

function FavoriteCard({ offer }: FavoriteCardPropsType): JSX.Element {
  return (
    <article className="favorites__card place-card" data-testid="favorite-card">
      <div className="place-card__mark">
        <span>{offer.isPremium ? 'Premium' : ''}</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;180</b>
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
          <a href="/">{offer.title}</a>
        </h2>
        <p className="place-card__type">{getType(offer.type)}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;

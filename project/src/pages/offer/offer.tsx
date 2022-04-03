import { AuthorizationStatus } from '../../const';
import OfferReviews from '../offer-reviews/offer-reviews';
import Loading from '../../components/loading/loading';
import Map from '../map/map';
import { useAppSelector } from '../../hooks';
import ReviewsForm from '../reviews-form/reviews-form';
import { OfferHost } from '../offer-host/offer-host';
import OffersNearby from '../offers-nearby/offers-nearby';
import FavoriteButton from '../favorite-button/favorite-button';
import { useEffect, useMemo } from 'react';
import { fetchOfferData } from '../../store/offer-item-data/api-actions';
import { useParams } from 'react-router-dom';

function Offer(): JSX.Element {
  const authorizationStatus = useAppSelector(({ USER }) => USER.authorizationStatus);
  const reviews = useAppSelector(({ OFFER_ITEM }) => OFFER_ITEM.reviews);
  const offer = useAppSelector(({ OFFER_ITEM }) => OFFER_ITEM.offerItem);
  const offersNearby = useAppSelector(({ OFFER_ITEM }) => OFFER_ITEM.offersNearby);
  const params = useParams();
  const id = +(params?.id || 0);

  useEffect(() => {
    if (!offer || offer.id !== id) {
      fetchOfferData(id);
    }
  }, [id, offer, offersNearby, reviews]);

  const mapOffers = useMemo(() => (!offer ? [] : [offer, ...offersNearby]), [offer, offersNearby]);

  const isUserAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  if (!offer) {
    return <Loading></Loading>;
  }

  const reviewsForm = isUserAuthorized ? <ReviewsForm offerId={offer.id} /> : undefined;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.map((image, imageId) => {
              const keyValue = `${imageId}-${image}`;
              return (
                <div key={keyValue} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Studio" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium ? (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            ) : (
              ''
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">{offer.title}</h1>
              <FavoriteButton offer={offer} cssTag={'property'} iconWidth={31} iconHeight={33} />
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">{offer.type[0].toUpperCase() + offer.type.substring(1)}</li>
              <li className="property__feature property__feature--bedrooms">{offer.bedrooms} Bedrooms</li>
              <li className="property__feature property__feature--adults">Max {offer.maxAdults} adults</li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.goods.map((feature, goodId) => {
                  const keyValue = `${goodId}-${feature}`;
                  return (
                    <li key={keyValue} className="property__inside-item">
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
            <OfferHost offer={offer} />
            <OfferReviews reviews={reviews} reviewsForm={reviewsForm} />
          </div>
        </div>
        <section className="property__map map">
          <Map offers={mapOffers} selectedCardId={offer.id} />
        </section>
      </section>
      <div className="container">
        <OffersNearby offersNearby={offersNearby} />
      </div>
    </main>
  );
}

export default Offer;

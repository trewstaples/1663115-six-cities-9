import CommentsList from '../comments-list/comments-list';
import Header from '../../components/header/header';
import Loading from '../../components/loading/loading';
import Map from '../map/map';
import { AuthorizationStatus, MapMode } from '../../const';
import { useAppSelector } from '../../hooks';
import ReviewsForm from '../reviews-form/reviews-form';
import OfferCard from '../offer-card/offer-card';

function Offer(): JSX.Element {
  const offer = useAppSelector((state) => state.offerItem);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const offersNearby = useAppSelector((state) => state.offersNearby);
  const comments = useAppSelector((state) => state.comments);

  if (!offer) {
    return <Loading></Loading>;
  }

  const activeCity = offer.city;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image, id) => {
                const keyValue = `${id}-${image}`;
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
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
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
                  {offer.goods.map((feature, id) => {
                    const keyValue = `${id}-${feature}`;
                    return (
                      <li key={keyValue} className="property__inside-item">
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  {offer.host.isPro ? <span className="property__user-status">Pro</span> : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                {comments ? <CommentsList comments={comments} /> : ''}
                {authorizationStatus === AuthorizationStatus.Auth ? <ReviewsForm offerId={offer.id} /> : ''}
              </section>
            </div>
          </div>
          <Map offers={[offer, ...offersNearby]} city={activeCity} selectedCardId={offer.id} mapMode={MapMode.Offer} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersNearby.map((offerNearby) => (
                <OfferCard offer={offerNearby} key={offerNearby.id} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;

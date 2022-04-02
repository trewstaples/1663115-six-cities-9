import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUpdateFavoriteAction } from '../../store/favorites/api-action';
import { OfferType } from '../../types/offers';

type FavoriteButtonPropsType = {
  offer: OfferType;
};

function FavoriteButton({ offer }: FavoriteButtonPropsType): JSX.Element {
  const dispatch = useDispatch();

  const handleFavoriteButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    dispatch(
      fetchUpdateFavoriteAction({
        offerId: offer.id,
        status: +!offer.isFavorite,
      }),
    );
  };

  return (
    <button
      onClick={handleFavoriteButtonClick}
      className={offer.isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default FavoriteButton;

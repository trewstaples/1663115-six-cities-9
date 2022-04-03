import clsx from 'clsx';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { updateFavoritesOffersAction } from '../../store/favorites-data/api-action';
import { getIsUserAuthorized } from '../../store/user-data/selector';
import { OfferType } from '../../types/offers';

type FavoriteButtonPropsType = {
  offer: OfferType;
  cssTag?: string;
  iconWidth?: number;
  iconHeight?: number;
};

function FavoriteButton({ offer, cssTag = 'place-card', iconWidth = 18, iconHeight = 19 }: FavoriteButtonPropsType): JSX.Element {
  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFavoriteButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if (!isUserAuthorized) {
      navigate(AppRoute.Login);
    }

    dispatch(
      updateFavoritesOffersAction({
        offerId: offer.id,
        status: +!offer.isFavorite,
      }),
    );
  };

  return (
    <button onClick={handleFavoriteButtonClick} className={clsx(`${cssTag}__bookmark-button`, offer.isFavorite && `${cssTag}__bookmark-button--active`, 'button')} type="button">
      <svg className={`${cssTag}__bookmark-icon`} width={iconWidth} height={iconHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;

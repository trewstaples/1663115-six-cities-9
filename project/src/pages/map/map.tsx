import 'leaflet/dist/leaflet.css';
import { City } from '../../types/offers-types';
import { Icon, Marker } from 'leaflet';
import { Offers, OfferType } from '../../types/offers-types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';

type MapPropsType = {
  city: City;
  offers: Offers;
  selectedPoint: OfferType | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ offers, city, selectedPoint }: MapPropsType): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.coordinates.lat,
          lng: offer.coordinates.lng,
        });

        marker.setIcon(selectedPoint !== undefined && offer.title === selectedPoint.title ? currentCustomIcon : defaultCustomIcon).addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return <section className="cities__map map" style={{ height: '980px' }} ref={mapRef} />;
}

export default Map;

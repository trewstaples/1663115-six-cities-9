import 'leaflet/dist/leaflet.css';
import { CityType } from '../../types/city';
import { Icon, Marker } from 'leaflet';
import { MapMode } from '../../const';
import { OffersType, OfferType } from '../../types/offers';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';

type MapPropsType = {
  city: CityType;
  offers: OffersType;
  selectedPoint?: OfferType | undefined;
  mapMode: MapMode;
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

function Map({ offers, city, selectedPoint, mapMode }: MapPropsType): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  let mapContainer;
  mapMode === MapMode.Main
    ? (mapContainer = <section className="cities__map map" style={{ height: '980px' }} ref={mapRef} />)
    : (mapContainer = <section className="property__map map" style={{ height: '579px' }} ref={mapRef} />);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.lat,
          lng: offer.location.lng,
        });

        marker.setIcon(selectedPoint !== undefined && offer.title === selectedPoint.title ? currentCustomIcon : defaultCustomIcon).addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return mapContainer;
}

export default Map;

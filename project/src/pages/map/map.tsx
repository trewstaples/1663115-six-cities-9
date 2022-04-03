import 'leaflet/dist/leaflet.css';
import { Icon, LayerGroup, Marker } from 'leaflet';
import { OffersType } from '../../types/offers';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';

type MapPropsType = {
  offers: OffersType;
  selectedCardId?: number;
};

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ offers, selectedCardId }: MapPropsType): JSX.Element {
  const city = offers[0].city;

  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markers: Marker[] = [];
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(selectedCardId !== undefined && offer.id === selectedCardId ? currentCustomIcon : defaultCustomIcon);
        markers.push(marker);
      });
      const layerGroup = new LayerGroup(markers);
      layerGroup.addTo(map);

      return () => {
        map?.removeLayer(layerGroup);
      };
    }
  }, [map, offers, selectedCardId]);

  return <div style={{ height: '100%' }} ref={mapRef} />;
}

export default Map;

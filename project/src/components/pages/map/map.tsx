import 'leaflet/dist/leaflet.css';
import { Icon, LayerGroup, Marker } from 'leaflet';
import { OffersType } from '../../../types/offers';
import { useEffect, useRef } from 'react';
import useMap from '../../../hooks/use-map';

const enum MarkerUrl {
  Current = 'img/pin-active.svg',
  Default = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
}

const enum MarkerAttribute {
  Width = 40,
  Height = 40,
}

type MapPropsType = {
  offers: OffersType;
  selectedCardId?: number;
};

const currentCustomIcon = new Icon({
  iconUrl: MarkerUrl.Current,
  iconSize: [MarkerAttribute.Width, MarkerAttribute.Height],
  iconAnchor: [MarkerAttribute.Width / 2, MarkerAttribute.Height],
});

const defaultCustomIcon = new Icon({
  iconUrl: MarkerUrl.Default,
  iconSize: [MarkerAttribute.Width, MarkerAttribute.Height],
  iconAnchor: [MarkerAttribute.Width / 2, MarkerAttribute.Height],
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

import { CityType } from '../types/city';
import { LatLng, Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useState } from 'react';

const enum MapAttribute {
  Address = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: CityType): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(MapAttribute.Address, {
        attribution: MapAttribute.Attribution,
      });

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [map, mapRef, city]);

  useEffect(() => {
    if (map instanceof Map) {
      map.setView(new LatLng(city.location.latitude, city.location.longitude), city.location.zoom);
    }
  }, [city, map]);

  return map;
}

export default useMap;

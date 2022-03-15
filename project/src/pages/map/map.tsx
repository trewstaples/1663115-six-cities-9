/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/offers-types';
import useMap from './use-map';
import { useRef } from 'react';

type MapPropsType = {
  city: City;
};

function Map({ city }: MapPropsType): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return <section className="cities__map map" style={{ height: '980px' }} ref={mapRef}></section>;
}

export default Map;

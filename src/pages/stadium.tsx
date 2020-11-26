import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Typography } from '@material-ui/core';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Layout from '../components/layout';
import '../styles/stadium.scss';

export default function StadiumPage() {
  if (typeof window === undefined) {
    return null;
  }
  const position = {lat: 48.026957, lng: 7.837471};

  const { t } = useTranslation();

  return (
    <Layout>
      <div className="utils-width-80">
        <Typography variant="h2">{t("gettingHere")}</Typography>
        <MapContainer className="map-container" center={position} zoom={100} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}/>
        </MapContainer>
      </div>
    </Layout>
  );
}

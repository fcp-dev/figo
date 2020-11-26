import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Leaflet from 'leaflet';
import { Typography } from '@material-ui/core';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Layout from '../components/layout';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import '../styles/stadium.scss';

Leaflet.Marker.prototype.options.icon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

export default function StadiumPage() {
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

import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Box, Grid, Typography } from '@material-ui/core';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import Layout from '../components/layout';
import '../styles/stadium.scss';

export default function StadiumPage() {
  if (typeof window === undefined) {
    return;
  }
  const position = {lat: 48.026957, lng: 7.837471};

  const { t } = useI18next();

  return (
    <Layout>
      <Typography variant="h2">{t("gettingHere")}</Typography>
      <MapContainer className="map-container" center={position} zoom={100} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Tooltip className="map-tooltip" permanent opacity={1}>
            <Typography component="p">{t("sportsFacility")}</Typography>
            <Typography component="p">Hermann-Mitsch-Straße 38</Typography>
            <Typography component="p">79108 Freiburg im Breisgau</Typography>
          </Tooltip>
        </Marker>
      </MapContainer>
      <div className="utils-margin-bottom-30"></div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box fontWeight="fontWeightBold">{t("publicTransportProvider")}:</Box>
            <Typography component="p">{t("publicTransportProviderText")}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box fontWeight="fontWeightBold">{t("car")}:</Box>
            <Typography component="p">{t("carText")}</Typography>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Typography } from '@material-ui/core';
import Layout from '../components/layout';

export default function NotFound() {
  const { t } = useI18next();

  return (
    <Layout>
      <Typography variant="h1">{t("pageNotFoundTitle")}</Typography>
      <Typography component="p">{t("pageNotFoundText")}</Typography>
    </Layout>
  )
}
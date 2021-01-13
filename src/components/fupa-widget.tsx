import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

type FupaWidgetProps = {
  id: number,
  type: "spielplan" | "tabelle"
}

export default function FupaWidget({id, type}: FupaWidgetProps) {
  const { t } = useI18next();

  return(
    <div className="fupa_widget" data-widget={`{"type":"team_widget","type_values":["${type}"],"value":"${id}","selected_tab":1}`}>
      <a href={`http://www.fupa.net/club/fc-portugiesen-freiburg/team/${id}`} className="widget_link" target="_blank">
        {t("fullClubName")} {t("at")} FuPa
      </a>
      <a href="http://www.fupa.net/widget.html" target="_blank" className="widget_copy">
        &copy; FuPa-Widget
      </a>
    </div>  
  );
}
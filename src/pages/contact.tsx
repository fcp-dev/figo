import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Box, Typography } from '@material-ui/core';
import Layout from '../components/layout';

interface contact {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

interface contactGroups {
  [key: string]: contact[]
}

const contactGroups: contactGroups = {
  firstExecutive: [
    {
      firstName: 'Manuel',
      lastName: 'Ervos',
      email: 'm.ervoes@web.de'
    }
  ],
  secondExecutive: [
    {
      firstName: 'Ralf',
      lastName: 'Gänsler',
      email: 'gaensler@t-online.de'
    }
  ],
  ceo: [
    {
      firstName: 'Rodrigo',
      lastName: 'Rodrigues',
      email: 'rodrigoundluciana@web.de'
    }
  ],
  headOfDepartment: [
    {
      firstName: 'Manuel',
      lastName: 'da Silva',
      email: 'manuel.dasilva@gmx.net',
      phoneNumber: '0172 - 7659665',
    }
  ],
  matchCommittee: [
    {
      firstName: 'Thomas',
      lastName: 'Eichin',
      email: 'nadine.thoma@yahoo.de'
    },
    {
      firstName: 'Frank',
      lastName: 'Fischer',
      email: 'frankfischer123@icloud.com'
    }
  ],
  cultureAndFreeTime: [
    {
      firstName: 'Quim',
      lastName: 'Torres',
      email: 'jose.torres@grohmueller.de'
    },
    {
      firstName: 'Janis',
      lastName: 'Dietel',
      email: 'janisdietel@gmail.de'
    }
  ],
  publicRelations: [
    {
      firstName: 'Konrad',
      lastName: 'Wehrle',
      email: 'Kwehrle@gmx.net'
    }
  ],
  sponsoring: [
    {
      firstName: 'Patrick',
      lastName: 'Niegot',
      email: 'patrickniegot@t-online.de'
    }
  ]
};


export default function ContactPage() {
  const { t } = useTranslation();

  const contactList = [];
  for (const [groupName, contacts] of Object.entries(contactGroups)) {
    contactList.push(
      <div>
        <Typography component="p">
          <Box fontWeight="fontWeightBold">{t(groupName)}</Box>
          <div className="utils-margin-bottom-10"></div>
        </Typography>
        {contacts.map((contact) =>  {
          if (contact.phoneNumber === undefined) {
            return <div className="utils-margin-bottom-20">
              <Typography component="p">{contact.firstName} {contact.lastName}</Typography>
              <Typography component="p">{t("email")}: {contact.email}</Typography>
            </div>
          }
          return <div className="utils-margin-bottom-20">
            <Typography component="p">{contact.firstName} {contact.lastName}</Typography>
            <Typography component="p">{t("shortcutPhoneNumber")}.: {contact.phoneNumber}</Typography>
            <Typography component="p">{t("email")}: {contact.email}</Typography>
          </div>
        })}
      </div>
    );
  }

  return (
    <Layout>
      <div className="utils-width-80">
        <Typography variant="h2">{t("contactUs")}</Typography>
        <div className="utils-margin-bottom-30"></div>
        {contactList}
      </div>
    </Layout>
  );
}

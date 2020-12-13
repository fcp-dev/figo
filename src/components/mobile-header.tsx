import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { Divider, Drawer, IconButton, List, ListItem, ListItemText, Paper } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageSelector from './language-selector';
import '../styles/header.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: '100%',
    }
  }),
);

interface IListItem {
  path: string,
  title: string
}

const listItems: Array<IListItem> = [
  {path: '/news', title: 'news'},
  {path: '/teams', title: 'teams'},
  {path: '/club', title: 'club'},
  {path: '/stadium', title: 'stadium'},
  {path: '/legal-notice', title: 'legalNotice'},
  {path: '/contact', title: 'contact'}
];

export default function Header() {
  const { t } = useI18next();

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <header className="header">
        <div className="header-logo-mobile">
          <Link to="/">
            <img src="/img/logos/37x60.png"/>
          </Link>
        </div>
        <div className="header-menu-button-mobile">
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon className="utils-color-white"/>
          </IconButton>
        </div>
        <div className="header-nav-menu">
        </div>
        <div className="header-language-selector">
          <LanguageSelector/>
        </div>
      </header>
      <Drawer className="drawer" variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper }}>
        <div className="drawer-header">
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon className="utils-color-white"/>
          </IconButton>
        </div>
        <List>
          {listItems.map((listItem, index) => (
            <div key={index}>
              <div className="list-item">
                <Link to={listItem.path} onClick={() => setOpen(false)}>
                  <ListItem button>
                    <ListItemText>{t(listItem.title).toUpperCase()}</ListItemText>
                  </ListItem>
                </Link>
              </div>
              <Divider/>
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
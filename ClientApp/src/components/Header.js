import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BackgroundImage from './header.jpg';

const headerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity: 0.6,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 210,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: "transparent",
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
    fontFamily: ['Josefin Sans'],
    fontWeight: 100,
    fontSize:"3em",
    backgroundColor: "black",
  },
  iconbutton:{
    border: 0,
    color: 'white',
  }
}));

export default function Header() {
  const classes = headerStyles();

  return (
    <div className={classes.root} style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover',
    backgroundPosition: 'center' }}>
      <AppBar position="static" style={{backgroundColor:"transparent"}}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h5" noWrap>Employee Management Portal</Typography>
          <IconButton className={classes.iconbutton} aria-label="employee" color="inherit">
            <SupervisorAccountIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

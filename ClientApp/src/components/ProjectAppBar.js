import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const appbarStyles = makeStyles((theme) => ({
  iconbutton:{
    border: 0,
    color: 'white',
  }
}));

export default function ProjectAppBar(props) {

  const classes = appbarStyles();

  return (
  
    <Grid container >
        {/* Header Container */}
        <React.Fragment >
        <CssBaseline />
      <HideOnScroll {...props} >
      <AppBar style={{backgroundColor:"#03A9F4", color:"white", width:"100%"}}>
          <Toolbar style={{width:"100%"}}>
          <Grid item xs={12}>
          <Typography variant="h6" style={{fontFamily:"Josefin Sans", fontWeight:"600"}}>Employee Management Portal</Typography>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to='/' style={{textDecoration:"none"}}>
            <IconButton className={classes.iconbutton} edge="false" aria-label="employee" color="inherit">
            <SupervisorAccountIcon />
          </IconButton>
          </Link>
          </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      </React.Fragment>
      </Grid>
  );
}
import './Features.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const features_style = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  cardInfo: {
    height: "60%",
    width: '90%',
    textAlign: 'center',
    margin: '1em',
    color: theme.palette.text.secondary,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 'none',
  },
  media: {
    height: 300,
    objectFit: "cover",
    backgroundColor: "transparent",
  },
  iconStyle: {
    color: "#f5f5f5",
  }
}));

export default function Features() {

  const classes = features_style();

  return (
    <div className="features-container" >
      <Header/>
      <Grid container flexGrow="1" style={{ padding: "2rem", alignItems: "center", justifyContent: "center" }} direction="row" >

        <Grid item xs={8} md={5} lg={3}>
        <Link component={RouterLink} to='/employees' style={{textDecoration:"none"}}>
          <Card className={classes.cardInfo}>
            <CardActionArea >
              <CardMedia
                className={classes.media}
                image="/employee.png"
                title="Employees" />
              <CardContent>
                <Typography gutterBottom className="feature-titles" color="textPrimary">
                  Employees
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Add new employees, view, modify and delete employee records.
          </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
        </Grid>
 

        <Grid item xs={8} md={5} lg={3}>
        <Link component={RouterLink} to='/departments' style={{textDecoration:"none"}}>
          <Card className={classes.cardInfo}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/project1.png"
                title="Departments" />
              <CardContent>
                <Typography gutterBottom className="feature-titles" color="textPrimary">
                  Departments
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  View employees in a department and modify department records.
          </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
        </Grid>

        <Grid item xs={8} md={5} lg={3}>
        <Link component={RouterLink} to='/locations' style={{textDecoration:"none"}}>
          <Card className={classes.cardInfo}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/location.png"
                title="Location" />
              <CardContent>
                <Typography gutterBottom className="feature-titles" color="textPrimary">
                  Locations
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  View records of all the remote locations the employees work from.
          </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
        </Grid>

      </Grid>
    </div>
  );
}
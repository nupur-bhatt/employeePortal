import './Features.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, ButtonGroup } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const features_style = makeStyles((theme) => ({

  root: {
    flexGrow: 1, 
  },
  cardInfo: {
    height:"60%",
    width: '90%',
    textAlign: 'center',
    margin:'1em',
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
    backgroundColor:"transparent",
  },
  iconStyle: {
    color: "#f5f5f5",
  }
}));

export default function Features() {

  const classes = features_style();

  return (
      <div className="features-container" >

      <Grid container flexGrow="1" style={{padding:"2rem", alignItems:"center", justifyContent:"center"}} direction="row" >
        <Grid item xs={8} md={5} lg={3}>
          <Card className={classes.cardInfo}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image="/employee.png"
          title="Employees"
        />

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
        </Grid>


        <Grid item xs={8} md={5} lg={3}>
          <Card className={classes.cardInfo}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image="/team.png"
          title="Departments"
        />

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
        </Grid>


        <Grid item xs={8} md={5} lg={3}>
          <Card className={classes.cardInfo}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image="/project1.png"
          title="Projects"
        />

        <CardContent>
          <Typography gutterBottom className="feature-titles" color="textPrimary">
          Projects
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            View all the projects that are undertaken by the employees in the organization. 
          </Typography>
        </CardContent>
      </CardActionArea>
      
          </Card>
        </Grid>


        <Grid item xs={8} md={5} lg={3}>
          <Card className={classes.cardInfo}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image="/location.png"
          title="Location"
        />

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
        </Grid>

    </Grid>
    </div>
  );
}
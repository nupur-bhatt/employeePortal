import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
}));

const theme = createMuiTheme({
  palette: {
    primary:{ 
      main:'#03a9f4'
    },
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:hover:not($disabled):not($focused):not($error):before': 
        {             
          borderBottomColor: "#ffffff",          
        }
      },
    },
  },
});

export default function EmployeeOperations() {
    const classes = useStyles();
  
    return (
      <div style={{marginBottom:"2em"}}>
      <ThemeProvider theme={theme}>
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="First Name" variant="outlined" color="primary" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Designation" variant="outlined" />
        <Button size="large" variant="outlined" style={{margin:"1em"}} color="primary">Add</Button>
    </form>

    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Employee ID" variant="outlined" color="primary" />
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Designation" variant="outlined" />
        <Button size="large" variant="outlined" style={{margin:"1em"}} color="primary">Update</Button>
    </form>

    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Employee ID" variant="outlined" color="primary" />
        <Button size="large" variant="outlined" style={{margin:"1em"}} color="primary">Delete</Button>
    </form>
    </ThemeProvider>
    </div>
    );
  }
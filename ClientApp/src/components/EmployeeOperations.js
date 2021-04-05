
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { Redirect } from 'react-router'
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: 'auto',
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

class EmployeeOperations extends Component {

  constructor(props){
    super(props);
    
    this.state = { 
      employee: {
        first_name: props.first_name,
        last_name: props.last_name,
        designation: props.designation,
        department_id: props.department_id,
        office_id: props.office_id
      },
      employeeUpdate: {
        id_up: props.id,
        first_name_up: props.first_name,
        last_name_up: props.last_name,
        designation_up: props.designation,
        department_id_up: props.department_id,
        office_id_up: props.office_id
      },
      employeeDelete: {
        id_de: props.id
      }
    }
  }
    //ADD EMPLOYEE
    handleFirstNameChange(event){
        var employee = this.state.employee;
        employee.first_name = event.target.value;
        this.setState({employee:employee});
    }
    handleLastNameChange(event){
      var employee = this.state.employee;
      employee.last_name = event.target.value;
      this.setState({employee:employee});
    }
    handleDesignationChange(event){
      var employee = this.state.employee;
      employee.designation = event.target.value;
      this.setState({employee:employee});
    }
    handleDepartmentIdChange(event){
      var employee = this.state.employee;
      employee.department_id = event.target.value;
      this.setState({employee:employee});
    }
    handleOfficeIdChange(event){
      var employee = this.state.employee;
      employee.office_id = event.target.value;
      this.setState({employee:employee});
    }
    handleAddEmployee(event) {
      console.log(this.state.employee);
      axios.post('https://employeeportaldemo.azurewebsites.net/api/employee/',this.state.employee)
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(error =>{
        console.log(error.res);
      });
    }

  //UPDATE EMPLOYEE

  handleUIdChange(event){
    var employee = this.state.employeeUpdate;
    employee.id_up = event.target.value;
    this.setState({employeeUpdate:employee});
  }

  handleUFirstNameChange(event){
    var employee = this.state.employeeUpdate;
    employee.first_name_up = event.target.value;
    this.setState({employeeUpdate:employee});
}
  handleULastNameChange(event){
    var employee = this.state.employeeUpdate;
    employee.last_name_up = event.target.value;
    this.setState({employeeUpdate:employee});
  }
  handleUDesignationChange(event){
    var employee = this.state.employeeUpdate;
    employee.designation_up = event.target.value;
    this.setState({employeeUpdate:employee});
  }
  handleUDepartmentIdChange(event){
    var employee = this.state.employeeUpdate;
    employee.department_id_up = event.target.value;
    this.setState({employeeUpdate:employee});
  }
  handleUOfficeIdChange(event){
    var employee = this.state.employeeUpdate;
    employee.office_id_up = event.target.value;
    this.setState({employeeUpdate:employee});
  }
  handleUpdateEmployee(event){
    console.log(this.state.employeeUpdate);
    console.log(this.state.employeeUpdate.id_up);

    const employeeUp = {
        "id":this.state.employeeUpdate.id_up,
        "first_name":this.state.employeeUpdate.first_name_up,
        "last_name":this.state.employeeUpdate.last_name_up,
        "designation":this.state.employeeUpdate.designation_up,
        "department_id":this.state.employeeUpdate.department_id_up,
        "office_id":this.state.employeeUpdate.office_id_up
    }

    axios.request({
      url: `https://employeeportaldemo.azurewebsites.net/api/employee/${this.state.employeeUpdate.id_up}`,
      method: 'put',
      data : employeeUp,
    })
    .then(res => {
      console.log(employeeUp);
      console.log(res);
      window.location.reload();
    }).catch(err =>{
      console.log(employeeUp);
      console.log(err);
    });
  }


  //DELETE EMPLOYEE

  handleDIdChange(event){
    var employee = this.state.employeeDelete;
    employee.id_de = event.target.value;
    this.setState({employeeDelete:employee});
  }

  handleDeleteEmployee(event){
    console.log(this.state.employeeDelete);
    axios.delete(`https://employeeportaldemo.azurewebsites.net/api/employee/${this.state.employeeDelete.id_de}`,this.state.employeeDelete)
    .then(res => {
      console.log(res);
      window.location.reload();
    })
  }

  render() { 
    return ( 
      <div style={{marginBottom:"2em"}}>
      <ThemeProvider theme={theme}>
    <form className={useStyles.root} noValidate autoComplete="off">
        <TextField id="first_name" label="First Name" variant="outlined" color="primary" value={this.state.employee.first_name} onChange={this.handleFirstNameChange.bind(this)} style={{margin:"0.5em"}}/>
        <TextField id="last_name" label="Last Name" variant="outlined" value={this.state.employee.last_name} onChange={this.handleLastNameChange.bind(this)} style={{margin:"0.5em"}}/>
        <TextField id="designation" label="Designation" variant="outlined" value={this.state.employee.designation} onChange={this.handleDesignationChange.bind(this)} style={{margin:"0.5em"}}/>
        <TextField id="department_id" label="Department ID" variant="outlined" value={this.state.employee.department_id} onChange={this.handleDepartmentIdChange.bind(this)} style={{margin:"0.5em"}}/>
        <TextField id="office_id" label="Office ID" variant="outlined" value={this.state.employee.office_id} onChange={this.handleOfficeIdChange.bind(this)} style={{margin:"0.5em"}}/>
        <Button size="large" variant="outlined" style={{margin:"0.5em"}} color="primary" onClick={this.handleAddEmployee.bind(this)}>Add</Button>
    </form>

    <form className={useStyles.root} noValidate autoComplete="off">
        <TextField id="id_update" label="Employee ID" variant="outlined" color="primary" value={this.state.employee.id_up} onChange={this.handleUIdChange.bind(this)} style={{margin:"0.5em"}}/>
        <TextField id="fname_update" label="First Name" variant="outlined" value={this.state.employee.first_name_up} onChange={this.handleUFirstNameChange.bind(this)} style={{margin:"0.5em"}}/>
        <TextField id="lname_update" label="Last Name" variant="outlined" value={this.state.employee.last_name_up} onChange={this.handleULastNameChange.bind(this)} style={{margin:"0.5em"}}/>
        <TextField id="designation_update" label="Designation" variant="outlined" value={this.state.employee.designation_up} onChange={this.handleUDesignationChange.bind(this)} style={{margin:"0.5em"}}/>
        <TextField id="depid_update" label="Department ID" variant="outlined" value={this.state.employee.department_id_up} onChange={this.handleUDepartmentIdChange.bind(this)} style={{margin:"0.5em"}}/>
        <TextField id="offid_update" label="Office ID" variant="outlined" value={this.state.employee.office_id_up} onChange={this.handleUOfficeIdChange.bind(this)} style={{margin:"0.5em"}}/>
        <Button size="large" variant="outlined" style={{margin:"0.5em"}} color="primary" onClick={this.handleUpdateEmployee.bind(this)}>Update</Button>
    </form>

    <form className={useStyles.root} noValidate autoComplete="off">
        <TextField id="id_delete" label="Employee ID" variant="outlined" color="primary" value={this.state.employee.id_de} onChange={this.handleDIdChange.bind(this)} style={{margin:"0.5em"}}/>
        <Button size="large" variant="outlined" style={{margin:"0.5em"}} color="primary" onClick={this.handleDeleteEmployee.bind(this)}>Delete</Button>
    </form>
    </ThemeProvider>
    </div>
     );
  }
}
export default EmployeeOperations;

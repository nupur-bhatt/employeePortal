import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import './materialtheme.css';

class EmployeeList extends Component {

  state = { 
    rows:[]
   }

  componentDidMount(){
    axios.get("https://employeeportaldemo.azurewebsites.net/api/employee")
    .then(response =>{
      const rows = response.data;
      this.setState({rows});
    })
  }

  render() { 
    return ( 
      <Paper className="paper-style">
      <TableContainer className="table-style">
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Department ID</TableCell>
            <TableCell align="right">Office ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.designation}</TableCell>
              <TableCell align="right">{row.departmentId}</TableCell>
              <TableCell align="right">{row.officeId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    </Paper>
     );
  }
}

export default EmployeeList;
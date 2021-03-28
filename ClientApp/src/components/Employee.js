import React, { Component } from 'react';
import ProjectAppBar from './ProjectAppBar';
import EmployeeList from './EmployeeList';
import EmployeeOperations from './EmployeeOperations';
import './materialtheme.css';

class Employee extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{justifyContent:"center", alignSelf:"center", alignItems:"center", width:"100%", height:"100%"}}>
                <div style={{marginBottom:"2em"}}>
                    <ProjectAppBar/>
                </div>
                <div 
                style={{justifyContent:"center", alignSelf:"center", 
                alignItems:"center", width:"100%", alignContent:"center", 
                padding:"5em", backgroundColor:"#F7F7F7"}}>
                    <EmployeeOperations/>
                    <EmployeeList/>
                 
                </div>
            </div>
         );
    }
}
 
export default Employee;
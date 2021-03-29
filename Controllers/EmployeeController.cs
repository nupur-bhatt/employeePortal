using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using employeePortal.Models;
using Microsoft.AspNetCore.Mvc;


namespace employeePortal.Controllers{

    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController: ControllerBase{

        private List<Employee> employeeList = new List<Employee>{
            new Employee { Id = 1, FirstName = "Luke", LastName = "Skywalker", Designation="Manager", DepartmentId = 5, OfficeId = 6 },
            new Employee { Id = 2, FirstName = "Han", LastName = "Solo", Designation="Employee", DepartmentId = 2, OfficeId = 6 },
            new Employee { Id = 3, FirstName = "Leia", LastName = "Organa", Designation="Team Leader", DepartmentId = 4, OfficeId = 6 },
            new Employee { Id = 4, FirstName = "Rey", LastName = "Skywalker", Designation="Employee", DepartmentId = 2, OfficeId = 6 },
        };

        //GET: api/<EmployeeController>
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get(){
            return employeeList;
        }

        //GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id){

            Employee empresult = employeeList.FirstOrDefault(employee => employee.Id == id);
            if(empresult == null){
                return NotFound(new {Message = "Employee not found. Try again!"});
            }
            return Ok(empresult);
        }

        //POST api/<EmployeeController>
        [HttpPost]
        public ActionResult<IEnumerable<Employee>> Post(Employee newEmployee){   
            employeeList.Add(newEmployee);
            return employeeList;
        }

        //PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public void put(int id, [FromBody] string value){
        }

        //DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id){

        }
    }

}
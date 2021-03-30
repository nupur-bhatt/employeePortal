using System.Collections.Generic;
using System.Threading.Tasks;
using employeePortal.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace employeePortal.Controllers{

    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController: ControllerBase{

        private readonly EmployeeContext _context;

        public EmployeeController(EmployeeContext context){
            _context = context;
        }

        //GET: api/<EmployeeController>
        [Route("/api/employee")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees(){
            return await _context.Employees.ToListAsync();
        }

        //GET api/<EmployeeController>/5
        [Route("/api/employee")]
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id){

            var employee = await _context.Employees.FindAsync(id);
            if(employee==null){
                return NotFound();
            }
            return employee;
        }

        //POST api/<EmployeeController>
        // [HttpPost]
        // public ActionResult<IEnumerable<Employee>> Post(Employee newEmployee){   
        //     employeeList.Add(newEmployee);
        //     return employeeList;
        // }

        // //PUT api/<EmployeeController>/5
        // [HttpPut("{id}")]
        // public ActionResult<IEnumerable<Employee>> Put(Employee newEmployee){

        //     Employee empresult = employeeList.FirstOrDefault(employee => employee.Id == newEmployee.Id);
        //     empresult.Id = newEmployee.Id;
        //     empresult.FirstName = newEmployee.FirstName;
        //     empresult.LastName = newEmployee.LastName;
        //     empresult.Designation = newEmployee.Designation;
        //     empresult.DepartmentId = newEmployee.DepartmentId;
        //     empresult.OfficeId = newEmployee.OfficeId;
        //     return employeeList;

        // }

        // //DELETE api/<EmployeeController>/5
        // [HttpDelete("{id}")]
        // public ActionResult<IEnumerable<Employee>> Delete(int id){

        //     Employee empresult = employeeList.FirstOrDefault(employee => employee.Id == id);
        //     if(empresult == null){
        //         return NotFound(new {Message = "Employee not found. Try again!"});
        //     }
        //     employeeList.Remove(empresult);
        //     return Ok(employeeList);

        // }
    }

}
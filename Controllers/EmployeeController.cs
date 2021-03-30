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

        // POST api/<EmployeeController>
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee newEmployee){   
            
            var employee = await _context.Employees.FindAsync(newEmployee.id);
            if(employee==null){
                _context.Employees.Add(newEmployee);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetEmployee", new {id = newEmployee.id}, newEmployee);
            }
            return BadRequest();
        }

        //PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee newEmployee){
            
            var employee_to_change = await _context.Employees.FindAsync(id);
            if(employee_to_change == null){
                return NotFound();
            }
            else{
                try{
                    employee_to_change.first_name = newEmployee.first_name;
                    employee_to_change.last_name = newEmployee.last_name;
                    employee_to_change.designation = newEmployee.designation;
                    employee_to_change.department_id = newEmployee.department_id;
                    employee_to_change.office_id = newEmployee.office_id;
                    _context.SaveChanges();
                    return Ok(newEmployee);
                }
                catch(DbUpdateException){
                    throw;
                }
            }
        }

        //DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id){

            var empstatus = await _context.Employees.FindAsync(id);
            if(empstatus==null){
                return NotFound();
            }

            _context.Employees.Remove(empstatus);
            await _context.SaveChangesAsync();
            return empstatus;
        }
    }

}
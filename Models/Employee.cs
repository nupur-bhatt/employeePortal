using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace employeePortal.Models{
    
    public class Employee{

        public int id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string designation { get; set; }
        public int department_id { get; set; }
        public int office_id { get; set; }
    }
}
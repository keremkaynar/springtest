package test.spring.web.employee.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import test.spring.web.employee.model.Employee;

@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@RequestMapping(value = "/getallemployees", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Employee> getAllEmployees() {
		List<Employee> employeeList = employeeService.getAllEmployees();
		return employeeList;
	}

	@RequestMapping(value = "/addemployee", method = RequestMethod.POST, headers = "Accept=application/json")
	public void addEmployee(@RequestBody Employee employee) {
		employeeService.addEmployee(employee);
	}

	@RequestMapping(value = "/updateemployee", method = RequestMethod.PUT, headers = "Accept=application/json")
	public void updateEmployee(@RequestBody Employee employee) {
		employeeService.updateEmployee(employee);
	}

	@RequestMapping(value = "/deleteemployee/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void deleteEmployee(@PathVariable("id") int id) {
		employeeService.deleteEmployee(id);
	}
}

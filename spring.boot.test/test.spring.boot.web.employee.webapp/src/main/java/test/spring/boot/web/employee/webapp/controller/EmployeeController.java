package test.spring.boot.web.employee.webapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import test.spring.boot.web.employee.dao.access.EmployeeService;
import test.spring.boot.web.employee.dao.model.Employee;

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
	public Integer addEmployee(@RequestBody Employee employee) {
		return employeeService.addEmployee(employee);
	}

	@RequestMapping(value = "/updateemployee", method = RequestMethod.PUT, headers = "Accept=application/json")
	public Integer updateEmployee(@RequestBody Employee employee) {
		return employeeService.updateEmployee(employee);
	}

	@RequestMapping(value = "/deleteemployee/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public Integer deleteEmployee(@PathVariable("id") int id) {
		return employeeService.deleteEmployee(id);
	}
}

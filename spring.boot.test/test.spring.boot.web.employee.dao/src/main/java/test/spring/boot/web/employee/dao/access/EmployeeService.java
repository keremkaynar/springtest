package test.spring.boot.web.employee.dao.access;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import test.spring.boot.web.employee.dao.model.Employee;

@Service("employeeService")
public class EmployeeService {

	@Autowired
	private EmployeeDAO employeeDao;

	@Transactional
	public List<Employee> getAllEmployees() {
		return employeeDao.getAllEmployees();
	}

	@Transactional
	public Integer addEmployee(Employee employee) {
		return employeeDao.addEmployee(employee);
	}

	@Transactional
	public Integer updateEmployee(Employee employee) {
		return employeeDao.updateEmployee(employee);
	}

	@Transactional
	public Integer deleteEmployee(int employeeId) {
		return employeeDao.deleteEmployee(employeeId);
	}
}

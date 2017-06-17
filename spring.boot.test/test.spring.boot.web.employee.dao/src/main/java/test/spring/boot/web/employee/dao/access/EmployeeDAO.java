package test.spring.boot.web.employee.dao.access;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.jpa.HibernateEntityManagerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;

import test.spring.boot.web.employee.dao.model.Employee;

@Repository
public class EmployeeDAO {
	@Autowired
	private SessionFactory sessionFactory;

	@Bean
	public SessionFactory getSessionFactory(HibernateEntityManagerFactory hemf) {
		return hemf.getSessionFactory();
	}

	public void setSessionFactory(SessionFactory sf) {
		this.sessionFactory = sf;
	}

	@SuppressWarnings("unchecked")
	public List<Employee> getAllEmployees() {
		Session session = this.sessionFactory.getCurrentSession();
		List<Employee> employeeList = session.createQuery("from Employee").list();
		return employeeList;
	}

	public Integer addEmployee(Employee employee) {
		Session session = this.sessionFactory.getCurrentSession();
		session.save(employee);
		return employee.getId();
	}

	public Integer updateEmployee(Employee employee) {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(employee);
		return employee.getId();
	}

	public Integer deleteEmployee(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		Employee employee = session.load(Employee.class, new Integer(id));
		if (employee != null) {
			session.delete(employee);
		}
		return id;
	}
}

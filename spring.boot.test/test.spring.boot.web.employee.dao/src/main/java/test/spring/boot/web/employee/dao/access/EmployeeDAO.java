package test.spring.boot.web.employee.dao.access;

import java.util.List;

import javax.persistence.EntityManagerFactory;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;

import test.spring.boot.web.employee.dao.model.Employee;

@Repository
public class EmployeeDAO {
	@Autowired
	private SessionFactory sessionFactory;

	@Bean
	public SessionFactory getSessionFactory(EntityManagerFactory entityManagerFactory) {
		if (entityManagerFactory.unwrap(SessionFactory.class) == null) {
			throw new NullPointerException("entitymanagerfactory is not a hibernate factory");
		}
		return entityManagerFactory.unwrap(SessionFactory.class);
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

	public void addEmployee(Employee employee) {
		Session session = this.sessionFactory.getCurrentSession();
		session.save(employee);
	}

	public void updateEmployee(Employee employee) {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(employee);
	}

	public void deleteEmployee(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		Employee employee = session.load(Employee.class, new Integer(id));
		if (employee != null) {
			session.delete(employee);
		}
	}
}

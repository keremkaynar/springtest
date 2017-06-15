package test.spring.boot.web.employee.webapp.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "test.spring.boot.web.employee")
public class SpringBootWebEmployeeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootWebEmployeeApplication.class, args);
	}
}

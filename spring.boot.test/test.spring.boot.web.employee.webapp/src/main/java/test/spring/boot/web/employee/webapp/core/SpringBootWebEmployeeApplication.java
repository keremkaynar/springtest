package test.spring.boot.web.employee.webapp.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = { "test.spring.boot.web.employee" })
@EntityScan(basePackages = "test.spring.boot.web.employee.dao")
public class SpringBootWebEmployeeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootWebEmployeeApplication.class, args);
	}
}

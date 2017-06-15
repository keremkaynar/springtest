import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EmployeeServices} from "appjs/employee_services";

@Component({
	templateUrl: 'apptemplates/create_update_employee_component.html',
	providers: [EmployeeServices]
})

export class CreateUpdateEmployeeComponent {
	
	private update: true;

	public currentEmployee: null;

	public createdCertificate: {};

	public currentCertificate: null;
	
	constructor(private employeeServices: EmployeeServices, private router: Router) {
		currentEmployee = employeeServices.getEmployeeForCreateUpdate();
		if(currentEmployee==null)
		{
			update = false;
			currentEmployee = {firstName:"", lastName:"", mail:"", address:"", certificates:[]};
		}
	}
	
	addCertificate() {
		if (createdCertificate.name != "") {
			if (createdCertificate.type != "") {
				currentEmployee.certificates
						.push(createdCertificate);
			}
		}
	}

	deleteCertificate() {
		if (currentCertificate) {
			currentEmployee.certificates = currentEmployee.certificates
					.filter(function(el) {
						return el.id != currentCertificate.id;
					});
		}
	}

	saveEmployee() {
		if (update == true) {
			employeeServices
			.updateEmployee(
					currentEmployee)
					.then(
							function(response) {
								console.log("Save (Update) employee: "+response);
							},
							function(errResponse) {
								console
								.error('Error while saving employee');
							});
		}
		else
		{
			employeeServices
			.addEmployee(
					currentEmployee)
					.then(
							function(response) {
								console.log("Save (Create) employee: "+response);
							},
							function(errResponse) {
								console
								.error('Error while saving employee');
							});
		}
		router.navigate(["/showemployees"]);
	}
}
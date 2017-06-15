import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EmployeeServices} from "components/pages/employee_services";

@Component({
	selector: 'show-employees',
	templateUrl: 'components/templates/show_employees_component.hmtl',
	providers: [EmployeeServices]
})

export class ShowEmployeesComponent {
	
	public employees: [];

	public currentEmployee: null;

   	constructor(private employeeServices: EmployeeServices, private router: Router) {}

	getAllEmployees() {
		employeeServices.getAllEmployees().then(function(employees) {
			this.employees = employees;
		}, function(errResponse) {
			console.error('Error while fetching employees');
		});
	}
	
	createEmployee() {
		employeeServices.setEmployeeForCreateUpdate(null);
		this.router.navigate(["/createupdateemployee"]);
	}
	
	updateEmployee() {
		if(this.currentEmployee!=null)
		{
			employeeServices.setEmployeeForCreateUpdate(currentEmployee);
		}
		this.router.navigate(["/createupdateemployee"]);
	}
	
	deleteEmployee() {
		if(this.currentEmployee!=null)
		{
			employeeServices.deleteEmployee(this.currentEmployee.id).then(function(response) {
				console.log("Response for deleting employee "+response);
			}, function(errResponse) {
				console.error('Error while deleting employee');
			});
		}
	}
	getAllEmployees();
}
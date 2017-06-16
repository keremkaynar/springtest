import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeServices {

	private REST_SERVICE_URI = 'http://localhost:8080/test.spring.boot.web.employee/';

	private employeeForCreateUpdate = null;

	constructor (private http: Http) {}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}

	private handleError (error: Response | any) {
		let errMsg: string;
	if (error instanceof Response) {
		const body = error.json() || '';
		const err = body.error || JSON.stringify(body);
		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	} else {
		errMsg = error.message ? error.message : error.toString();
	}
	console.error(errMsg);
	return Observable.throw(errMsg);
	}

	getAllEmployees(): Observable<[]> {
		return http.get(REST_SERVICE_URI+"getallemployees")
		.map(this.extractData)
		.catch(this.handleError);
	}

	addEmployee(employee): Observable {
		return http.post(REST_SERVICE_URI+"addemployee", employee)
		.map(this.extractData)
		.catch(this.handleError);
	}


	updateEmployee(employee): Observable {
		return http.put(REST_SERVICE_URI+"updateemployee", employee)
		.map(this.extractData)
		.catch(this.handleError);
	}

	deleteEmployee(id): Observable {
		return http.delete(REST_SERVICE_URI+"deleteemployee/"+id)
		.map(this.extractData)
		.catch(this.handleError);
	}

	setEmployeeForCreateUpdate(employee)
	{
		employeeForCreateUpdate = employee;
	}

	getEmployeeForCreateUpdate()
	{
		return employeeForCreateUpdate;
	}
}
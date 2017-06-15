import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from 'appjs/app_component';
import {ShowEmployeesComponent} from 'appjs/show_employees_component';
import {CreateUpdateEmployeeComponent} from 'appjs/create_update_employee_component';

const appRoutes: Routes = 
	[
	 {path: '/showemployees', component: ShowEmployeesComponent},
	 {path: '/createupdateemployee', component: CreateUpdateEmployeeComponent},
	 {path: '',
		 redirectTo: '/showemployees',
		 pathMatch: 'full'
	 }
	 ];

@NgModule({
	imports: 
		[
		 RouterModule.forRoot(appRoutes)
		 ],
    declarations: 
		 [
		  AppComponent,
		  ShowEmployeesComponent,
		  CreateUpdateEmployeeComponent,
		  ],
	bootstrap: [AppComponent]
})

export class AppModule { }
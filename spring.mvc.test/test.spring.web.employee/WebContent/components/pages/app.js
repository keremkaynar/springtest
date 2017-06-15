var webEmployeeTestApp = angular.module('webEmployeeTestApp', ['ngRoute']);

webEmployeeTestApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/createupdateemployee/', {
		templateUrl: 'components/templates/create_update_employee.html',
		controller: 'CreateUpdateEmployeeController'
	}).
      when('/showemployees/', {
		templateUrl: 'components/templates/show_employees.html',
		controller: 'ShowEmployeesController'
      }).
      otherwise({
		redirectTo: '/showemployees'
      });
}]);

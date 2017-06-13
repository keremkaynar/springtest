angular.module('webEmployeeTestApp').controller('ShowEmployeesController',
		[ '$scope', '$location', 'EmployeeServices', function($scope, $location, EmployeeServices) {

			function getAllEmployees() {
				EmployeeServices.getAllEmployees().then(function(employees) {
					$scope.employees = employees;
				}, function(errResponse) {
					console.error('Error while fetching employees');
				});
			}
			
			$scope.createEmployee = function () {
				EmployeeServices.setEmployeeForCreateUpdate(null);
				$location.path("/createupdateemployee");
			}
			
			$scope.updateEmployee = function () {
				if($scope.currentEmployee!=null)
				{
					EmployeeServices.setEmployeeForCreateUpdate($scope.currentEmployee);
				}
				$location.path("/createupdateemployee");
			}
			
			$scope.deleteEmployee = function () {
				if($scope.currentEmployee!=null)
				{
					EmployeeServices.deleteEmployee($scope.currentEmployee.id).then(function(response) {
						console.log("Response for deleting employee "+response);
					}, function(errResponse) {
						console.error('Error while deleting employee');
					});
				}
			}
			
			$scope.employees = [];
			$scope.currentEmployee = null;
			
			getAllEmployees();
}]);
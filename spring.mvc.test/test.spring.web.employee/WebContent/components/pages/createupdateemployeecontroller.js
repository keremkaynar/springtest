angular
		.module('webEmployeeTestApp')
		.controller(
				'CreateUpdateEmployeeController',
				[
						'$scope',
						'$location',
						'EmployeeServices',
						function($scope, $location, EmployeeServices) {

							$scope.addCertificate = function() {
								if ($scope.createdCertificate.name != "") {
									if ($scope.createdCertificate.type != "") {
										$scope.currentEmployee.certificates
												.push($scope.createdCertificate);
									}
								}
							}

							$scope.deleteCertificate = function() {
								if ($scope.currentCertificate) {
									$scope.currentEmployee.certificates = $scope.currentEmployee.certificates
											.filter(function(el) {
												return el.id != $scope.currentCertificate.id;
											});
								}
							}

							$scope.saveEmployee = function() {
								if ($scope.currentEmployee) {
									if ($scope.update == true) {
										EmployeeServices
												.updateEmployee(
														$scope.currentEmployee)
												.then(
														function(response) {
															console.log("Save (Update) employee: "+response);
														},
														function(errResponse) {
															console
																	.error('Error while saving employee');
															deferred
																	.reject(errResponse);
														});
									}
									else
									{
										EmployeeServices
										.addEmployee(
												$scope.currentEmployee)
										.then(
												function(response) {
													console.log("Save (Create) employee: "+response);
												},
												function(errResponse) {
													console
															.error('Error while saving employee');
													deferred
															.reject(errResponse);
												});
									}
								}
								$location.path("/showemployees");
							}
							
							$scope.update = true;
							$scope.currentEmployee = EmployeeServices.getEmployeeForCreateUpdate();
							if($scope.currentEmployee==null)
							{
								$scope.update = false;
								$scope.currentEmployee = {firstName:"", lastName:"", mail:"", address:"", certificates:[]};
							}

						} ]);
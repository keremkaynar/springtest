angular.module('webEmployeeTestApp').factory('EmployeeServices', ['$http', '$q', function($http, $q){
 
    var REST_SERVICE_URI = 'http://localhost:8080/test.spring.web.employee/';
 
    var employeeForCreateUpdate = null;
    
    var factory = {
        getAllEmployees: getAllEmployees,
        addEmployee: addEmployee,
        updateEmployee: updateEmployee,
        deleteEmployee: deleteEmployee,
        setEmployeeForCreateUpdate: setEmployeeForCreateUpdate,
        getEmployeeForCreateUpdate: getEmployeeForCreateUpdate
    };
 
    return factory;
 
    function getAllEmployees() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI+"getallemployees")
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while getting all employees');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
    function addEmployee(employee) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"addemployee", employee)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating employee');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
 
    function updateEmployee(employee) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+"updateemployee", employee)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating employee');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
    function deleteEmployee(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+"deleteemployee/"+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting employee');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function setEmployeeForCreateUpdate(employee)
    {
    	employeeForCreateUpdate = employee;
    }
    
    function getEmployeeForCreateUpdate()
    {
    	return employeeForCreateUpdate;
    }
    
}]);

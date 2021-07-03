(function (){
'use strict';

angular.module('myFirstApp', [])

 .controller('myFirstController', function($scope)
{
$scope.name="ssn";
$scope.age="34";
 $scope.sayHello=function(name1)
 {
    var myname
    $scope.myname = name1;
 	//$scope.name1 = "sasi"
 	return myname;
 };
});
})();

var myApp = angular.module("myApp", [])
				   .controller("navig",function($scope){
					   var categories = [
						   { name: "About Me"},
						   { name: "Technology"},
						   { name:"Life"}];
					   
					   $scope.categories = categories;
				   });

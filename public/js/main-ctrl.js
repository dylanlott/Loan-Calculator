var app = angular.module('loan-calculator') 

app.controller('main-ctrl', function($scope) {
	//get number between 0.01 and 20 for interest rate 
	var random = function(){
		return Math.random() * (20 - 0.01) + 0.01; 
	};
	$scope.interest_rate = random(); 
})
var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

	$scope.getBooks = function(){
		$http.get('/api/cars').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getAudi = function(){
		$http.get('/api/cars/audi').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getBMW = function(){
		$http.get('/api/cars/BMW').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getMercedes = function(){
		$http.get('/api/cars/mercedes').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getAllCars = function(){
		$http.get('/api/cars/carsadmin').success(function(response){
			$scope.books = response;
		});
	}

	/*$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/cars/'+id).success(function(response){
			$scope.book = response;
		});
	}*/

	$scope.getCar = function(){
		var id = $routeParams.id;
		$http.get('/api/cars/'+id).success(function(response){
			$scope.book = response;
		});
	}

	$scope.addBook = function(){
		console.log($scope.book);
		$http.post('/api/cars/', $scope.book).success(function(response){
			if (response == 'success') window.location.href='#/cars/carsadmin';

		});
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/cars/'+id, $scope.book).success(function(response){
			window.location.href='#/cars/carsadmin';
		});
	}

	$scope.removeBook = function(id){
		$http.delete('/api/cars/'+id).success(function(response){
			window.location.href='#/cars/carsadmin';
		});
	}
}]);

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/cars.html'
	})
	.when('/cars', {
		controller:'BooksController',
		templateUrl: 'views/cars.html'
	})
	.when('/cars/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/car_details.html'
	})
	.when('/cars/add',{
		controller:'BooksController',
		templateUrl: 'views/add_book.html'
	})
	.when('/books/parola',{
		controller:'BooksController',
		templateUrl: 'views/parola.html'
	})
	.when('/cars/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_book.html'
	})
	.when('/cars/carsadmin',{
		controller:'BooksController',
		templateUrl: 'views/carsadmin.html'
	})
	.when('/cars/audi',{
		controller:'BooksController',
		templateUrl: 'views/Audi.html'
	})

	.when('/cars/BMW',{
		controller:'BooksController',
		templateUrl: 'views/BMW.html'
	})

	.when('/cars/mercedes',{
		controller:'BooksController',
		templateUrl: 'views/Mercedes.html'
	})

	.when('/cars/admindetails/:id',{
		controller:'BooksController',
		templateUrl: 'views/car_details-admin.html'
	})

});

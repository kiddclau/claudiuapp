const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre =require('./models/genre');
Book =require('./models/book');

// Connect to Mongoose
//mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-bko6b.mongodb.net:27017,cluster0-shard-00-01-bko6b.mongodb.net:27017,cluster0-shard-00-02-bko6b.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-bko6b.mongodb.net:27017,cluster0-shard-00-01-bko6b.mongodb.net:27017,cluster0-shard-00-02-bko6b.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
////mongodb://admin:<PASSWORD>@cluster0-shard-00-00-bko6b.mongodb.net:27017,cluster0-shard-00-01-bko6b.mongodb.net:27017,cluster0-shard-00-02-bko6b.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin
//mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', (req, res) => {
	Genre.getGenres((err, genres) => {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.put('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.delete('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	Genre.removeGenre(id, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

/*app.get('/api/books', (req, res) => {
	Book.getBooks(req.params.make,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});*/

/*app.get('/api/books', (req, res) => {
	Book.getBooks(req.params.make,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});*/
//adu toate masinile in carsadmin
app.get('/api/cars/carsadmin', (req, res) => {
	Book.getAllCars((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

//Adu Mercedes
app.get('/api/cars/mercedes', (req, res) => {
	Book.getMercedes(req.params.make,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

//Adu Audi
app.get('/api/cars/audi', (req, res) => {
	Book.getAudi(req.params.make,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

//Adu BMW
app.get('/api/cars/bmw', (req, res) => {
	Book.getBMW(req.params.make,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/cars/:_id', (req, res) => {
	Book.getCarById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/cars', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/cars/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/cars/:_id', (req, res) => {
	var id = req.params._id;
	Book.removeBook(id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(||3000);
console.log('Running on port 3000...');

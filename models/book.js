const mongoose = require('mongoose');

// Book Schema
const bookSchema = mongoose.Schema({
	model:{
		type: String,

	},
	make:{
		type: String,

	},
	description:{
		type: String
	},
	fuel:{
		type: String,

	},
	reg_date:{
		type: String
	},
	mileage:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	price:{
		type: Number
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books////am adaugat conditia pe make dupa ce am editata si app.js cu req.params.make
module.exports.getAudi = (make, callback) => {
	var queryc = {"make": "Audi"};
	Book.find(queryc,callback);
}


module.exports.getBMW = (make, callback) => {
	var queryb = {"make": "BMW"};
	Book.find(queryb,callback);
}

module.exports.getMercedes = (make, callback) => {
	var querym = {"make": "Mercedes-Benz"};
	Book.find(querym,callback);
}

module.exports.getAllCars = (callback, limit) => {
	Book.find(callback).limit(limit);
}


// Get Book
module.exports.getCarById = (id, callback) => {
	Book.findById(id, callback);
}

// Add Book
module.exports.addBook = (book, callback) => {
	Book.create(book, callback);
}

// Update Book
module.exports.updateBook = (id, book, options, callback) => {
	var query = {_id: id};
	var update = {
		model: book.model,
		make: book.make,
		description: book.description,
		fuel: book.fuel,
		reg_date: book.reg_date,
		mileage: book.mileage,
		price: book.price,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = (id, callback) => {
	var query = {_id: id};
	Book.remove(query, callback);
}

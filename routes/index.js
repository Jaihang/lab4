
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.view = function(req, res){
	res.render("index", {
		"name": "Waiting in Line",
		"image": "lorempixel.people.1.jpeg",
		"id": "project1"
	});
};

exports.view = function(req, res){
	res.render("index", {
		"projects": [
		{ "name": "Waiting in Line", 
		"image": "lorempixel.people.1.jpeg", 
		"id": "project1"},
		{ "name": "Needfinding", 
		"image": "lorempixel.city.1.jpeg",
		"id": "project2"},
		{"name": "Tech", 
		"image": "lorempixel.technics.1.jpeg",
		"id": "project3"},
		{ "name": "Abstract", 
		"image": "lorempixel.abstract.1.jpeg",
		"id": "project4"},
		{"name": "Impression", 
		"image": "lorempixel.abstract.8.jpeg",
		"id": "project5"},
		{"name": "People", 
		"image": "lorempixel.people.2.jpeg",
		"id": "project6"},
		{"name": "Technology", 
		"image": "lorempixel.technics.2.jpeg",
		"id": "project7"},
		{"name": "Citylife", 
		"image": "lorempixel.city.2.jpeg",
		"id": "project8"}

		]
	});
};
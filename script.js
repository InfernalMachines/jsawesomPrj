//obj literals 
//Quick and dirty method to describe an object
var apple = {
	color:"red",
	worms:"false",
	taste:"crisp",
	rotten: function(){
		return " Do not eat please!!! "
	}
};

//Use a constructor when you're going to need multiple instances of that object; when you're going to reuse that object - here we instantiate both a banana and a pear as opposed to instantiating an apple directly like above
function Fruit(name, taste, size){
	this.name = name;
	this.taste = taste;
	this.size = size;
	this.salad = function(){
		return "You can chop up the " + this.name + " into pieces to make a delicious fruit salad."
	}
}

var banana = new Fruit("banana", "sweet", "medium");
var pear = new Fruit("pear", "crisp", "round");

//you can use dot notation, or square brackets
banana.size 
banana.pear
banana.salad
banana["name"]

//An object can inherit traits/attributes from a parent object using prototypical objects

function Holiday(date, season, theme){
	this.date = date;
	this.season = season;
	this.theme = theme;
	this.party = function(){
		return "come out on " + this.date + " to celebrate... " + this.theme + "-style";
	}
}
// You can instantiate a new instance using the object
var turkeyDay = new Holiday("Some thursday in november", "fall", "pilgrim")

//You can also extend the parent object to a child object. In the following example, Independence Day is categorized as its own special prototype (class) of object with an additional arguments passed in which specifies the country
function IndependenceDay(date, season, theme, country){
	this.country = country;
	Holiday.apply(this,arguments);
}
//This aligns the prototype of the child object with that of the parent object, so that any changes made to the parent object will be available in the child object as well.
IndependenceDay.prototype = new Holiday();

//here are some instances of the Independence Day object which extends the Holiday object
var theFourth = new IndependenceDay("July 4th", "summer", "freedom", "'MURICA");
var elCinco = new IndependenceDay("Cinco de Mayo", "spring", "rememberance", "Mexico");


//Adding a method to the parent object --> it will also be applied to any child objects when you use the syntax below:
Holiday.prototype.listing_props = function(){   
	//declaring an empty array for the upcoming method ******* BE SURE TO DECLARE THIS VARIABLE INSIDE OF THE FUNCTION OR ELSE IT WILL JUST KEEP ADDING PROPERTIES ON TOP OF EACH OTHER EVERYTIME IT'S CALLED ********
	var emptyArray = []
	//using a (for, in) loop -> 'this' refers to the current instance on which the method is being called
	for (x in this){
	//this pushes the individual properties into the aforementioned empty array
		emptyArray.push(this[x]);
	} 
	return emptyArray;
}


//The Multiplier object with a constructor function
function Multiplier(){
	this.currentValue = 1;
	this.getCurrentValue = function(){
		return this.currentValue;
	}
	this.multiply = function(num){
		var newValue = this.currentValue * num
		this.currentValue = newValue;
		return this.currentValue;
	}
}

var mult = new Multiplier();

//The Multiplier in object literal
var Multiplier = {
	"currentValue": 1,
	getCurrentValue: function(){
		return this.currentValue;
	},
	multiply: function(num){
		var newValue = this.currentValue * num;
		this.currentValue = newValue;
		return this.currentValue;
	}
}








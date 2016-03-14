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
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

//Create a new object called Album
function Album(){
	this.photo_list = [];
//pushes new photos into the array that is the album
	this.new_photo = function(photo){
		this.photo_list.push(photo);
		return this.photo_list;
	}
	this.list_photos = function(){
		for (i = 0; i < this.photo_list.length; i++){
			console.log(this.photo_list[i].name + " at the " + this.photo_list[i].location);
		}
	}
	this.get_photo = function(num){
		val = num - 1;
		return this.photo_list[val];
	}
}
//create a new object called photo
function Photo(name, location){
	this.name = name;
	this.location = location;
}
//instantiate a new Album instance and some new Photo instances
var summerBreak = new Album;
var photo1 = new Photo("sandcastles", "beach");
var photo2 = new Photo("crowdsurfing", "concert");
var photo3 = new Photo("new baby", "hospital");

summerBreak.new_photo(photo1);
summerBreak.new_photo(photo2);
summerBreak.new_photo(photo3);





//Create a new Person Object
function Person(name, age){
	this.name = name;
	this.age = age;
	this.breathes = function(){
		return this.name + " takes a deep breath and tries not to do anything rash...";
	}
}

//The Student object extends the Person Object
function Student(name, age, grade, subjects){
	Person.apply(this,arguments);
	this.grade = grade;
	this.subjects = subjects;
	this.description = function(){
		return this.name + " is in " + this.grade + "th grade and is studying the following: " + this.subjects;
	}
}

//The Teacher object also extends the Person Object
function Teacher(name, age, subject, poison, favoriteDiscipline){
	Person.apply(this,arguments);
	this.subject = subject;
	this.poison = poison;
	this.favoriteDiscipline = favoriteDiscipline;
	this.how = function(){
		return this.name + " survives teaching by partaking in " + this.poison + ". When students act out in class, the old go-to disciplinary method is: " + favoriteDiscipline;
	}
}

//Create a School Object that can store Student instances and Teacher instances
function School(name){
	this.name = name;
	this.all = [];
	this.students = [];
	this.teachers = [];
	this.new_teacher = function(teach){
		this.all.push(teach);
		this.teachers.push(teach);
		return this.teachers;
	}
	this.new_student = function(stud){
		this.all.push(stud);
		this.students.push(stud);
		return this.students;
	}
	this.listStudents = function(){
		for (i = 0; i < this.students.length; i++){
			return this.students[i].name;
		}
	}
	this.listTeachers = function(){
		for (i = 0; i < this.teachers.length; i++){
			return this.teachers[i].name;
		}
	}
	this.listAll = function(){
		for (i = 0; i < this.all.length; i++){
			console.log(this.all[i].name + " is " + this.all[i].age + ".");
		}
	}
}


//Instantiate a new instance of a School
var hogwarts = new School("Hogwarts");

//Make sure that any changes made to the Person object will also be applied to the Teacher and Student prototypes
Student.prototype = new Person();
Teacher.prototype = new Person();




var Bertrand = new Student("Bertrand", "15", "10", "math, science, history, and gym");
var Beulah = new Student("Beulah", "17", "8", "mostly just recess");

var Dave = new Teacher("Mr. Thermopolis", "72 and too old for this shit", "Government", "illegal cockfighting", "paddling");
var Delilah = new Teacher("Delilah", "31", "yoga", "selling babies on the black market, also whiskey", "casting a hex")

hogwarts.new_student(Beulah)
hogwarts.new_student(Bertrand)
hogwarts.new_teacher(Dave)
hogwarts.new_teacher(Delilah)







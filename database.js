import { Mongo } from 'meteor/mongo';

Submissions = new Mongo.Collection('submissions');
Quizes = new Mongo.Collection('quizes');
QuizUsers = new Mongo.Collection('quizusers');

var quiz1 = {
	'quizCode' : 123456,
	'questions' : [
		{
			"_id" : 1,
			"questionNumber" : 1,
			"title" : "1. What is Pan Yuehao's favourite brand of wallet and bags",
			"answers" : [
				{"answer" : "Porter"}, 
				{"answer" : "Prada"}, 
				{"answer" : "Gnome n Bow"}, 
				{"answer" : "Armani"}
				],
			"correctAnswer": "Gnome n Bow",
			"points" : 5,
			"imageURL" : ""
		},
		{
			"_id" : 2,							
			"questionNumber" : 2,
			"title" : "2. What is Jeremy Lim's favourite line",
			"answers" : [
				{"answer" : "We are family"}, 
				{"answer" : "Lets go for lunch"}, 
				{"answer" : "Bye Jimson"}, 
				{"answer" : "Blue sky Friday"}
				],
			"correctAnswer": "We are family",
			"points" : 10,
			"imageURL" : ""
		},
		{
			"_id" : 3,								
			"questionNumber" : 3,							
			"title" : "What is Hakim's favourite food",
			"answers" : [
				{"answer" : "KFC"}, 
				{"answer" : "McDonalds"}, 
				{"answer" : "Koufu"}, 
				{"answer" : "Pastamania"}
				],
			"correctAnswer": "KFC",
			"points" : 15,
			"imageURL" : ""
		},
		{
			"_id" : 4,	
			"questionNumber" : 4,							
			"title" : "How many weekend downtimes have we attended?",
			"answers" : [
				{"answer" : 8}, 
				{"answer" : 16}, 
				{"answer" : 32}, 
				{"answer" : 64}
				],
			"correctAnswer": 16,
			"points" : 20,
			"imageURL" : ""
		},
		{
			"_id" : 5,								
			"questionNumber" : 5,							
			"title" : "Who is Ganesh's look a like",
			"answers" : [
				{"answer" : "Ance Kujumon"}, 
				{"answer" : "Yuehao Pan"}, 
				{"answer" : "Preeti Ramachandran"}, 
				{"answer" : "Ayush Modi"}
				],
			"correctAnswer": "Ance Kujumon",
			"points" : 25,
			"imageURL" : ""
		},

]};

var quiz2 = {
	'quizCode' : 456789,
	'questions' : [
		{
			"_id" : 1,
			"questionNumber" : 1,
			"title" : "1. What is the first watch on the moon?",
			"answers" : [
				{"answer" : "Seiko SKX007"}, 
				{"answer" : "Omega Speedmaster"}, 
				{"answer" : "Rolex Submariner"}, 
				{"answer" : "Jaeger-LeCoultre Reverso"}
				],
			"correctAnswer": "Omega Speedmaster",
			"points" : 5,
			"imageURL" : ""
		},
		{
			"_id" : 2,							
			"questionNumber" : 2,
			"title" : "2. Which is the most expensive watch of the 4?",
			"answers" : [
				{"answer" : "Jaeger-LeCoultre Reverso"}, 
				{"answer" : "Grand Seiko Snowflake"}, 
				{"answer" : "Rolex Date-just"}, 
				{"answer" : "A.Lange and Sohnne Datograph"}
				],
			"correctAnswer": "A.Lange and Sohnne Datograph",
			"points" : 10,
			"imageURL" : ""
		},
		{
			"_id" : 3,								
			"questionNumber" : 3,							
			"title" : "Which of the following comes with a camo nato strap?",
			"answers" : [
				{"answer" : "Omega Speedmaster"}, 
				{"answer" : "Tudor Heritage Blackbay"}, 
				{"answer" : "Rolex Explorer"}, 
				{"answer" : "Seiko Turtle"}
				],
			"correctAnswer": "Tudor Heritage Blackbay",
			"points" : 15,
			"imageURL" : ""
		},
		{
			"_id" : 4,	
			"questionNumber" : 4,							
			"title" : "Which watch is made in Germany?",
			"answers" : [
				{"answer" : "Sinn 104"}, 
				{"answer" : "Brietling Navitimer"}, 
				{"answer" : "Hamilton Ventura"}, 
				{"answer" : "Longines Heritage 1948"}
				],
			"correctAnswer": "Sinn 104",
			"points" : 20,
			"imageURL" : ""
		},
		{
			"_id" : 5,								
			"questionNumber" : 5,							
			"title" : "Which watch is square in shape?",
			"answers" : [
				{"answer" : "Seiko Monster"}, 
				{"answer" : "Cartier Tank"}, 
				{"answer" : "G-Shock"}, 
				{"answer" : "Omega Seasmaster"}
				],
			"correctAnswer": "Ance Kujumon",
			"points" : 25,
			"imageURL" : ""
		},

]};

Quizes.insert(quiz1);
Quizes.insert(quiz2);
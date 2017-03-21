import { Mongo } from 'meteor/mongo';

Submissions = new Mongo.Collection('submissions');
Quiz = new Mongo.Collection('quiz');
QuizUsers = new Mongo.Collection('quizusers');

var quiz = {
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
			"title" : " Question 2",
			"answers" : [
				{"answer" : 1}, 
				{"answer" : 2}, 
				{"answer" : 3}, 
				{"answer" : 4}
				],
			"correctAnswer": "Gnome n Bow",
			"points" : 5,
			"imageURL" : ""
		},
		{
			"_id" : 3,								
			"questionNumber" : 3,							
			"title" : " Question 3",
			"answers" : [
				{"answer" : 1}, 
				{"answer" : 2}, 
				{"answer" : 3}, 
				{"answer" : 4}
				],
			"correctAnswer": "Gnome n Bow",
			"points" : 5,
			"imageURL" : ""
		},
		{
			"_id" : 4,	
			"questionNumber" : 4,							
			"title" : " Question 4",
			"answers" : [
				{"answer" : 1}, 
				{"answer" : 2}, 
				{"answer" : 3}, 
				{"answer" : 4}
				],
			"correctAnswer": "Gnome n Bow",
			"points" : 5,
			"imageURL" : ""
		},
		{
			"_id" : 5,								
			"questionNumber" : 5,							
			"title" : " Question 5",
			"answers" : [
				{"answer" : 1}, 
				{"answer" : 2}, 
				{"answer" : 3}, 
				{"answer" : 4}
				],
			"correctAnswer": "Gnome n Bow",
			"points" : 5,
			"imageURL" : ""
		},

]};

Quiz.insert(quiz);

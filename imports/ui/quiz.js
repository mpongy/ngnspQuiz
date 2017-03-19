import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './quiz.html';



Template.quiz.helpers({
	'returnQuizQuestions': function(){
		console.log('Retrieving quiz questions!');
		var questions = [
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
		];
		return questions;
	},
	'submission': function(){
		return Submissions.findOne();
	}
});

Template.quizListItem.events({
  'submit form'(event) {
	    event.preventDefault(); 

  		Session.set('answeredQuestionId', this._id);
		console.log("This question ID is: " + Session.get('answeredQuestionId'));

		var submittedAnswer = event.target.quizAnswer.value; 
		console.log("You answered : " + submittedAnswer);

		console.log("Correct answer is : " + this.correctAnswer);

		var returnQuestionID = this._id;

		if(submittedAnswer == this.correctAnswer){
			$("#"+ returnQuestionID).css("background-color", "green");
			console.log("Answer is CORRECT!");
			console.log("Adding item" + this.questionNumber + "to database");
			//answers.addone( question (questionNumber: this.QuestionNumber, pointsAwarded: this.points), ) where editionNumber:??)
			//points array[++1] : ++points
		}
		else{
			$("#"+ returnQuestionID).css("background-color", "red");
			console.log("Answer is WRONG!!");
			console.log("Adding item" + this.questionNumber + "to database");
			//answers.addone( question (questionNumber: this.QuestionNumber, pointsAwarded: ZERO), ) where editionNumber:??)	
			//pointsArray[++1] : ++ZERO
		}
		var returnAnswerID = this._id;		
		$("form","#"+ returnAnswerID).hide();
	},
	// 'completeQuiz'(event) {
	// 	for(pointsArray++; {
	// 		var totalPoints += pointsArray[i]
	// 	answers.addone(totalpoints : totalPoints) where user== and where editionNumber:??)
	// }
});

Template.quizListItem.helpers({
  'returnQuestionID': function () {
  	    return this._id;
  },
  'returnAnswerID': function () {
  	    return this._id;
  }, 
  'answered': function () {
  	    return true;
  },    
});
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './quiz.html';


Session.set('currentUser': playerNameVar);

var submissionArray = [];

Template.quiz.helpers({
	'returnQuizQuestions': function(){
    return Quiz.findOne().questions;
	},
});


Template.quizListItem.events({
 	'submit form'(event) {
	    event.preventDefault(); 
	    var submittedAnswer = event.target.quizAnswer.value; 
      var returnQuestionID = this._id;
	    console.log(submittedAnswer);

      submissionArray.push(submittedAnswer);

      console.log("from the array: " + submissionArray[returnQuestionID])

      if(submittedAnswer == this.correctAnswer){
        $("#"+ returnQuestionID).css("background-color", "green");
        console.log("Answer is CORRECT!");
        console.log("Adding item" + this.questionNumber + "to array");
        //answers.addone( question (questionNumber: this.QuestionNumber, pointsAwarded: this.points), ) where editionNumber:??)
        //points array[++1] : ++points
      }
      else{
        $("#"+ returnQuestionID).css("background-color", "red");
        console.log("Answer is WRONG!!");
        console.log("Adding item" + this.questionNumber + "to array");
        //answers.addone( question (questionNumber: this.QuestionNumber, pointsAwarded: ZERO), ) where editionNumber:??)  
        //pointsArray[++1] : ++ZERO
      }
	},
  'click .logout'(event){
      var arrayLength = submissionArray.length;
      for (var i = 0; i < arrayLength; i++) {
          alert(submissionArray[i]);
          //Do something
      }
    },
});



Template.quizListItem.helpers({
  'returnQuestionID': function () {
  	    return this._id;
  },
  'returnAnswerID': function () {
  	    return this._id;
  },   
});
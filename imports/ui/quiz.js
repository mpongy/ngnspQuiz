import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './quiz.html';

var submissionArray = [];
var pointsArray = [];
var correctAnswersArray = [];
var quizTotalPoints = 0;
var userTotalPoints = 0;

Template.quiz.helpers({
	'returnQuizQuestions': function(){
    return Quizes.findOne({'quizCode' : Session.get('currentQuiz')}).questions;
	},
});

Template.quiz.events({
  'click #submitAnswers'(event){

    //Retrieving submissions
    var retrieveSubmission = Submissions.findOne({'user' : Meteor.user().username , 'quizCode' : Session.get('currentQuiz')});      
    var retrieveSubmissionID = retrieveSubmission._id;
    console.log(retrieveSubmissionID);

    //Looping through array to push items into Submissions document
    for (var i = 0; i < submissionArray.length; i++) {

      alert("Submitted answer = " + submissionArray[i] + " Points awarded = " + pointsArray[i]);


      //Push submitted answer into Submissions.answers
      Submissions.update({'_id' : retrieveSubmissionID},{$push:{ answers : submissionArray[i]}});

      //Push awarded points into Submissions.points
      Submissions.update({'_id' : retrieveSubmissionID},{$push:{ points : pointsArray[i]}});  

      //Push correct answers into Submissions.correctAnswers
      Submissions.update({'_id' : retrieveSubmissionID},{$push:{ correctAnswers : correctAnswersArray[i]}});  

      //Calculate total points
      quizTotalPoints += pointsArray[i];

      //Print total points and 
      console.log("PRINTING TOTAL POINTS AND SUBMISSIONS DOCUMENT");      
      console.log("Total points for this quiz : " + quizTotalPoints);
      console.log("Submissions document : ");
      console.log(Submissions.findOne({'user' : Meteor.user().username , 'quizCode' : Session.get('currentQuiz')}));
    }

    //Updating total points into Submission.totalPoints 
    Submissions.update({'_id' : retrieveSubmissionID},{$set: { totalPoints : quizTotalPoints}});  

    //Updating total points into Meteor.users.thisWeeksScore
    Meteor.users.update({'_id' : Meteor.userId()}, {$set: { 'profile.thisWeeksScore': quizTotalPoints}});
    
    //Updating grand total score into Meteor.users.totalScore
    userTotalPoints = Meteor.user().profile.totalScore + quizTotalPoints;
    Meteor.users.update({'_id' : Meteor.userId()}, {$set: { 'profile.totalScore': userTotalPoints}});

    //Resetting current quiz total score
    quizTotalPoints = 0;    

    //Go to 'results' page
    Router.go("/results");      
  },
});


Template.quizListItem.events({
 	'submit form'(event) {
	    event.preventDefault(); 
	    var submittedAnswer = event.target.quizAnswer.value; 
      var returnQuestionID = this._id;
	    console.log(submittedAnswer);

      var arrayIndex = this.questionNumber - 1;
      submissionArray[arrayIndex] = submittedAnswer;
      correctAnswersArray[arrayIndex] = this.correctAnswer;

      $("#"+ returnQuestionID).css("background-color", "blue");

      if(submittedAnswer == this.correctAnswer){
        console.log("Answer is CORRECT!");
        console.log("Adding item" + this.questionNumber + "to array");

        //Add points to array (Correct Answer)
        pointsArray[arrayIndex] = this.points;
      }
      else{
        console.log("Answer is WRONG!!");
        console.log("Adding item" + this.questionNumber + "to array");

        //Add zero points to array (Wrong Answer)
        pointsArray[arrayIndex] = 0;
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
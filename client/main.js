import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './main.html';
import '/imports/ui/quiz.js';

Template.leaderboard.helpers({
	'player': function(){
		return Meteor.users.find();
	}
});

Template.leaderboard.helpers({
	'playersExist': function(){
		var totalUser=Meteor.users.find().count();
  		if(totalUser>1)
  		{
  			return true;
  		}
		else{
			return false;
		}
	},
});


Template.entryPoint.helpers({
	'active': function(){
		return true;
	},
	settings: function() {
		return {
			limit: 10,
			rules: [{
	  				collection: Meteor.users,
	  				field: 'username',
	  				matchAll: true,
	  				template: Template.item,
	  				noMatchTemplate: Template.noitem
			}]
		};
	},
});

Template.entryPoint.events({
  'submit form'(event) {
    event.preventDefault(); 
	var playerNameVar = event.target.enterpriseIDautocomplete.value;     	
	var dateOfBirthVar = event.target.inputDateOfBirth.value;
	var checkbox = event.target.inputCheckbox.checked; 

	console.log(playerNameVar);
    console.log(dateOfBirthVar);
  	console.log(checkbox);
    


    // if (dateOfBirthVar == Meteor.users.find({username: playerNameVar}).fetch()[0].password && event.target.inputCheckbox.checked){
    if (event.target.inputCheckbox.checked){
		Meteor.loginWithPassword(playerNameVar, dateOfBirthVar, function(error){
		    if(error){
		        console.log(error.reason);
		    } else {
		        Router.go("quiz");
		    }
		});
	}
	else{
		console.log('failed!');
	}
 //    if (dateOfBirthVar == Meteor.users.find({username: playerNameVar}).fetch()[0].dob && event.target.inputCheckbox.checked){
 //    	console.log("Success!");
 //    	Session.set("currentUser", playerNameVar);
 //    	console.log("Current user is " + Session.get("currentUser"));
 //    	Meteor.loginWithPassword(playerNameVar, dateOfBirthVar);
 //    }
 //    else{
 //    	console.log("Failed!");
 //    }
 //    var retrieve = Meteor.users.find({username: playerNameVar}).fetch()[0].dob;
 //    console.log(retrieve);
	// Router.go('quiz');
 //    // PlayerList.update({enterpriseID: "playerNameVar"},{score: 5});
  },
});


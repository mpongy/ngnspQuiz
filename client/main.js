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

		console.log("Name: " +playerNameVar);
		console.log("DOB: " +dateOfBirthVar);
		console.log("Checkbox: " + checkbox);

		if (event.target.inputCheckbox.checked){
			Meteor.loginWithPassword(playerNameVar, dateOfBirthVar, function(error){
			    if(error){
			    	window.alert(error.reason);
			        console.log(error.reason);
			    } else {
			    	Session.set('currentUser': playerNameVar);
					insertSubmission();
					console.log(insertSubmission());
			        Router.go("quiz");
			    }
			});
		}
		else{
			console.log('failed!');
		}
 	},
 	'click .logout'(event){
        event.preventDefault();
        Meteor.logout();
    }
});

function insertSubmission(){
	if(false){
		console.log(Submissions.find({'user': Session.get('currentUser'), 'editionNumber': 2}))
		console.log("Record exists!")
		console.log("DO NOT add new submission!")
	}
	else{
		console.log("Add new submission!")
		Submissions.insert({'editionNumber': 1,
					'user' : 'yuehao.pan',
					'year' : 2017,
					'week' : 11,
					'answers' : [	{ 'questionNumber' : 1, 'answer' : 'prada' , 'pointsAwarded' : 5},
									{ 'questionNumber' : 2, 'answer' : 'gucci' , 'pointsAwarded' : 5},
									{ 'questionNumber' : 3, 'answer' : 'LV' , 'pointsAwarded' : 5},
									{ 'questionNumber' : 4, 'answer' : 'bvlgari' , 'pointsAwarded' : 5},
									{ 'questionNumber' : 5, 'answer' : 'tiffany' , 'pointsAwarded' : 5},
						],
					'totalPoints' : 25,
		});
	}
}


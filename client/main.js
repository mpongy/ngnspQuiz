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

		// if (dateOfBirthVar == Meteor.users.find({username: playerNameVar}).fetch()[0].password && event.target.inputCheckbox.checked){
		if (event.target.inputCheckbox.checked){
			Meteor.loginWithPassword(playerNameVar, dateOfBirthVar, function(error){
			    if(error){
			    	window.alert(error.reason);
			        console.log(error.reason);
			    } else {
			    	// ADD TO ANSWERS COLLECTION HERE
					//answers.addone(user: currentuser, year: ??, week:??, editionNumber:??)
					insertSubmission();
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

// function insertSubmission(){
// 	Submissions.insert({'editionNumber': 1,
// 					'user' : 'yuehao.pan',
// 					'year' : 2017,
// 					'week' : 11,
// 					'answers' : [	{ '1' : 'prada' , 'pointsAwarded' : 5},
// 									{ '2' : 'gucci' , 'pointsAwarded' : 5},
// 									{ '3' : 'bvlgari' , 'pointsAwarded' : 5},
// 									{ '4' : 'armani' , 'pointsAwarded' : 5},
// 									{ '5' : 'gnome n bow' , 'pointsAwarded' : 5},
// 						],
// 					'totalPoints' : 25,
// 	});
// }


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './main.html';
import '/imports/ui/login.js';
import '/imports/ui/quiz.js';
import '/imports/ui/results.js';
import '/imports/ui/leaderboard.js';

Template.leaderboard.helpers({
	'playerWeeklyScore': function(){
		return Meteor.users.find({},{sort:{'profile.thisWeeksScore': -1}});
	},
	'playerTotalScore': function(){
		return Meteor.users.find({},{sort:{'profile.totalScore': -1}});
	},	
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

Template.leaderboard.events({
	'click .nav li' (event){
		$('.nav li').removeClass('active');
		$(event.currentTarget).addClass('active');
	},
	'click #thisWeek' (event){
		$('#thisWeekPane').addClass('active')
		$('#allTimePane').removeClass('active')
	},
	'click #allTime' (event){
		$('#thisWeekPane').removeClass('active')
		$('#allTimePane').addClass('active')
	},	
});


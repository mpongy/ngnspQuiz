import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './main.html';
import '/imports/ui/login.js';
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


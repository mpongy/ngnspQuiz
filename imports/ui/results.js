import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './results.html';

Template.results.helpers({
	'returnSubmittedAnswers': function(){
		return Submissions.findOne();
	},
});


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './quiz.html';

Template.quizListItem.events({
  'submit form'(event) {
    event.preventDefault(); 
	var playerNameVar = event.target.quizAnswer.value;     	
	console.log(playerNameVar);
	}
});
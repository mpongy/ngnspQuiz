import './login.html';

Template.login.helpers({
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

Template.login.events({
  	'submit form'(event) {
		event.preventDefault(); 

		var quizCodeVar = event.target.inputQuizCode.value; 		
		var playerNameVar = event.target.enterpriseIDautocomplete.value;     	
		var dateOfBirthVar = event.target.inputDateOfBirth.value;
		var checkbox = event.target.inputCheckbox.checked; 
		var quizCodeInt = parseInt(quizCodeVar);

		console.log("Quiz code: " + quizCodeVar);
		console.log(quizCodeVar);
		console.log("Name: " + playerNameVar);
		console.log("DOB: " + dateOfBirthVar);
		console.log("Checkbox: " + checkbox);

		if(Quiz.findOne({'quizCode' : quizCodeInt})){
			if (event.target.inputCheckbox.checked){
				Meteor.loginWithPassword(playerNameVar, dateOfBirthVar, function(error){
				    if(error){
				    	window.alert(error.reason);
				        console.log(error.reason);
				    } else {
 						if(Submissions.findOne({'user': playerNameVar, 'quizCode': quizCodeInt})){
 							Router.go("/quiz");
 						}
 						else{
				    		insertSubmission(); 
							Router.go("/quiz");					
 						}
				    }
				});
			}
			else{
				alert("Agree to privacy policy")		
			}	
		}else{
			alert("Invalid quiz code!")
		}

 	},
 	'click .logout'(event){
        event.preventDefault();
        Meteor.logout();
    }
});

function checkSubmission(){
}

function insertSubmission(){
	console.log("inserting!");
	Submissions.insert({
				'editionNumber': 1,
				'quizCode' : 123456,
				'user' : 'yuehao.pan',
				'year' : 2017,
				'week' : 11,
	});
}
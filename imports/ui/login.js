import './login.html';

Template.login.helpers({
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

Template.login.events({
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
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  var totalUser=Meteor.users.find().count();
  if(totalUser<1)
  {
  	populatePlayers();
  }
});


Accounts.onCreateUser(function(options, user) {
   // Use provided profile in options, or create an empty object
   user.profile = options.profile || {};
   // Assigns names to the newly created user object
   user.profile.name = options.name;
   // Assigns total score to the newly created user object
   user.profile.totalScore = options.totalScore;
   // Assigns this week's score to the newly created user object
   user.profile.thisWeeksScore = options.thisWeeksScore;
   // Returns the user object
   return user;
});

function populatePlayers(){
	Accounts.createUser({
		name: 'Pan Yuehao',
		username: 'yuehao.pan',
		password: '01234567',
		totalScore: 150,
		thisWeeksScore: 15,
		active: true
	});
	Accounts.createUser({
		name: 'Ganesh Kumar',
		username: 'ganesh.e.kumar',
		password: '12345678',
		totalScore: 100,
		thisWeeksScore: 10,
		active: true
	});
	Accounts.createUser({
		name: 'Mellavin Mar',
		username: 'mellavin.mar',
		password: '23456789',
		totalScore: 50,
		thisWeeksScore: 5,
		active: true
	});
};

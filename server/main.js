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
   // Assigns score to the newly created user object
   user.profile.score = options.score;
   // Returns the user object
   return user;
});

function populatePlayers(){
	Accounts.createUser({
		name: 'Pan Yuehao',
		username: 'yuehao.pan',
		password: '01234567',
		score: '50',
		active: true
	});
	Accounts.createUser({
		name: 'Ganesh Kumar',
		username: 'ganesh.e.kumar',
		password: '12345678',
		score: '100',
		active: true
	});
	Accounts.createUser({
		name: 'Mellavin Mar',
		username: 'mellavin.mar',
		password: '23456789',
		score: '80',
		active: true
	});
};

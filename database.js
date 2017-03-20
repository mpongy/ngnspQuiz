import { Mongo } from 'meteor/mongo';

Submissions = new Mongo.Collection('submissions');
Quiz = new Mongo.Collection('quiz');
QuizUsers = new Mongo.Collection('quizusers');


// Submissions.insert({'editionNumber': 1,
// 				'user' : 'yuehao.pan',
// 				'year' : 2017,
// 				'week' : 11,
// 				'answers' : [	{ '1' : 'prada' , 'pointsAwarded' : 5},
// 								{ '2' : 'gucci' , 'pointsAwarded' : 5},
// 								{ '3' : 'bvlgari' , 'pointsAwarded' : 5},
// 								{ '4' : 'armani' , 'pointsAwarded' : 5},
// 								{ '5' : 'gnome n bow' , 'pointsAwarded' : 5},
// 					],
// 				'totalPoints' : 25,
// });



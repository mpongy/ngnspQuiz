var require = meteorInstall({"quizConfig.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// quizConfig.js                                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     //
///////////////////////////////////////////////////////////////////////

},"router.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// router.js                                                         //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Router.route('/', function () {                                      // 2
  this.render('home', {});                                           // 3
});                                                                  // 5
Router.route('/quiz', function () {                                  // 7
  this.render('quiz', {});                                           // 8
});                                                                  // 10
///////////////////////////////////////////////////////////////////////

},"server":{"main.js":["meteor/meteor","/imports/api/playerlist.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor = void 0;                                                 // 1
module.import('meteor/meteor', {                                     // 1
	"Meteor": function (v) {                                            // 1
		Meteor = v;                                                        // 1
	}                                                                   // 1
}, 0);                                                               // 1
var PlayerList = void 0;                                             // 1
module.import('/imports/api/playerlist.js', {                        // 1
	"PlayerList": function (v) {                                        // 1
		PlayerList = v;                                                    // 1
	}                                                                   // 1
}, 1);                                                               // 1
Meteor.startup(function () {                                         // 4
	var totalUser = PlayerList.find().count();                          // 5
                                                                     //
	if (totalUser < 1) {                                                // 6
		populatePlayers();                                                 // 8
	}                                                                   // 9
});                                                                  // 10
                                                                     //
function populatePlayers() {                                         // 12
	PlayerList.insert({                                                 // 13
		name: 'Pan Yuehao',                                                // 14
		enterpriseID: 'yuehao.pan',                                        // 15
		dob: '01234567',                                                   // 16
		score: '50',                                                       // 17
		active: true                                                       // 18
	});                                                                 // 13
	PlayerList.insert({                                                 // 20
		name: 'Ganesh Kumar',                                              // 21
		enterpriseID: 'ganesh.e.kumar',                                    // 22
		dob: '12345678',                                                   // 23
		score: '100',                                                      // 24
		active: true                                                       // 25
	});                                                                 // 20
	PlayerList.insert({                                                 // 27
		name: 'Mellavin Mar',                                              // 28
		enterpriseID: 'mellavin.mar',                                      // 29
		dob: '23456789',                                                   // 30
		score: '80',                                                       // 31
		active: true                                                       // 32
	});                                                                 // 27
}                                                                    // 34
                                                                     //
;                                                                    // 34
///////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./quizConfig.js");
require("./router.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map

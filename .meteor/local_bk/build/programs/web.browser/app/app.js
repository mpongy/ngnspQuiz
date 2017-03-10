var require = meteorInstall({"imports":{"ui":{"quiz.html":["./template.quiz.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/quiz.html                                                                                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.exports = require("./template.quiz.js");                                                            // 1
                                                                                                           // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.quiz.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/template.quiz.js                                                                             //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("quiz");                                                                              // 2
Template["quiz"] = new Template("Template.quiz", (function() {                                             // 3
  var view = this;                                                                                         // 4
  return [ HTML.H1("You are ", Blaze.View("lookup:returnCurrentUser", function() {                         // 5
    return Spacebars.mustache(view.lookup("returnCurrentUser"));                                           // 6
  })), "\n\t", HTML.DIV({                                                                                  // 7
    class: "quiz-list"                                                                                     // 8
  }, "\n\t\t", HTML.DIV({                                                                                  // 9
    class: "quiz-list-section"                                                                             // 10
  }, "\n\t\t\t", HTML.DIV({                                                                                // 11
    class: "quiz-list-container col-xs-12 col-md-8 col-md-offset-2"                                        // 12
  }, "\n\t\t\t\t", HTML.Raw("<!-- {{#each quizList}} -->"), "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("quizListItem")), "\n\t\t\t\t", HTML.Raw("<!-- {{/each}} -->"), "\n\t\t\t"), "\n\t\t"), "\n\t") ];
}));                                                                                                       // 14
                                                                                                           // 15
Template.__checkName("quizListItem");                                                                      // 16
Template["quizListItem"] = new Template("Template.quizListItem", (function() {                             // 17
  var view = this;                                                                                         // 18
  return HTML.DIV({                                                                                        // 19
    class: "quiz-list-item-container"                                                                      // 20
  }, HTML.Raw('\n\t\t<div class="quiz-list-item-image">\n\t\t\tIMAGE HERE \n\t\t</div>\n\t\t'), HTML.DIV({
    class: "quiz-list-item-title"                                                                          // 22
  }, "\n\t\t \t", HTML.H4("Title: ", Blaze.View("lookup:title", function() {                               // 23
    return Spacebars.mustache(view.lookup("title"));                                                       // 24
  }), " Points: ", Blaze.View("lookup:points", function() {                                                // 25
    return Spacebars.mustache(view.lookup("points"));                                                      // 26
  })), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                     // 27
    class: "pitch-list-item-description"                                                                   // 28
  }, "\n\t\t\tDescription: ", Blaze.View("lookup:description", function() {                                // 29
    return Spacebars.mustache(view.lookup("description"));                                                 // 30
  }), "\n\t\t"), HTML.Raw('\n\t\t<div class="pitch-list-item-answers">\n\t\t\tAnswer:\n\t\t\t<form>\n\t\t\t\t<input type="text">\n\t\t\t\t<input type="submit">\n\t\t\t</form>\n\t\t</div>\n\t'));
}));                                                                                                       // 32
                                                                                                           // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"quiz.js":["meteor/templating","meteor/reactive-var","meteor/session","./quiz.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/quiz.js                                                                                      //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var Template = void 0;                                                                                     // 1
module.import('meteor/templating', {                                                                       // 1
	"Template": function (v) {                                                                                // 1
		Template = v;                                                                                            // 1
	}                                                                                                         // 1
}, 0);                                                                                                     // 1
var ReactiveVar = void 0;                                                                                  // 1
module.import('meteor/reactive-var', {                                                                     // 1
	"ReactiveVar": function (v) {                                                                             // 1
		ReactiveVar = v;                                                                                         // 1
	}                                                                                                         // 1
}, 1);                                                                                                     // 1
var Session = void 0;                                                                                      // 1
module.import('meteor/session', {                                                                          // 1
	"Session": function (v) {                                                                                 // 1
		Session = v;                                                                                             // 1
	}                                                                                                         // 1
}, 2);                                                                                                     // 1
module.import('./quiz.html');                                                                              // 1
var currentUser = Session.get("currentUser");                                                              // 9
console.log(currentUser);                                                                                  // 10
var userObject = PlayerList.find({                                                                         // 11
	enterpriseID: currentUser                                                                                 // 11
}).fetch()[0];                                                                                             // 11
console.log(userObject);                                                                                   // 12
Template.quiz.helpers({                                                                                    // 14
	'returnCurrentUser': function () {                                                                        // 15
		return currentUser;                                                                                      // 16
	}                                                                                                         // 17
});                                                                                                        // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"client":{"main.html":["./template.main.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/main.html                                                                                        //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.exports = require("./template.main.js");                                                            // 1
                                                                                                           // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.main.js                                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.body.addContent((function() {                                                                     // 2
  var view = this;                                                                                         // 3
  return "";                                                                                               // 4
}));                                                                                                       // 5
Meteor.startup(Template.body.renderToDocument);                                                            // 6
                                                                                                           // 7
Template.__checkName("home");                                                                              // 8
Template["home"] = new Template("Template.home", (function() {                                             // 9
  var view = this;                                                                                         // 10
  return HTML.DIV({                                                                                        // 11
    class: "container"                                                                                     // 12
  }, "\n    ", HTML.DIV({                                                                                  // 13
    class: "row"                                                                                           // 14
  }, "\n      ", HTML.DIV({                                                                                // 15
    class: "col-md-8 col-md-offset-2"                                                                      // 16
  }, "\n        ", HTML.Raw('<div class="page-header">\n          <h1>Welcome to NS Portal Weekly Quiz!</h1>\n        </div>'), "\n        ", Spacebars.include(view.lookupTemplate("leaderboard")), "\n        ", HTML.Raw("<br>"), "\n        ", Spacebars.include(view.lookupTemplate("entryPoint")), "\n      "), "\n    "), "\n  ");
}));                                                                                                       // 18
                                                                                                           // 19
Template.__checkName("entryPoint");                                                                        // 20
Template["entryPoint"] = new Template("Template.entryPoint", (function() {                                 // 21
  var view = this;                                                                                         // 22
  return Blaze.If(function() {                                                                             // 23
    return Spacebars.call(view.lookup("active"));                                                          // 24
  }, function() {                                                                                          // 25
    return [ "\n    ", HTML.DIV({                                                                          // 26
      class: "page-header"                                                                                 // 27
    }, "\n      ", HTML.H1("Weekly Quiz"), "\n    "), "  \n    ", HTML.FORM("\n      ", HTML.DIV({         // 28
      class: "form-group"                                                                                  // 29
    }, "\n        ", HTML.LABEL({                                                                          // 30
      for: "exampleInputEmail1"                                                                            // 31
    }, "Enterprise ID"), "\n        ", HTML.DIV({                                                          // 32
      class: "input-group"                                                                                 // 33
    }, "\n          ", Blaze._TemplateWith(function() {                                                    // 34
      return {                                                                                             // 35
        settings: Spacebars.call(view.lookup("settings")),                                                 // 36
        id: Spacebars.call("enterpriseIDautocomplete"),                                                    // 37
        class: Spacebars.call("form-control"),                                                             // 38
        name: Spacebars.call("enterpriseIDautocomplete"),                                                  // 39
        placeholder: Spacebars.call("Enter your enterprise ID")                                            // 40
      };                                                                                                   // 41
    }, function() {                                                                                        // 42
      return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                                  // 43
    }), "\n          ", HTML.SPAN({                                                                        // 44
      class: "input-group-addon",                                                                          // 45
      id: "basic-addon2"                                                                                   // 46
    }, "@accenture.com"), "\n        "), "\n      "), "\n      ", HTML.DIV({                               // 47
      class: "form-group"                                                                                  // 48
    }, "\n        ", HTML.LABEL({                                                                          // 49
      for: "exampleInputEmail1"                                                                            // 50
    }, "Date of Birth"), "\n        ", HTML.INPUT({                                                        // 51
      type: "text",                                                                                        // 52
      class: "form-control",                                                                               // 53
      id: "inputDateOfBirth",                                                                              // 54
      name: "inputDateOfBirth",                                                                            // 55
      placeholder: "Enter your date of birth: DDMMYYYY"                                                    // 56
    }), "\n      "), "\n      ", HTML.INPUT({                                                              // 57
      type: "checkbox",                                                                                    // 58
      id: "inputCheckbox",                                                                                 // 59
      name: "inputCheckbox"                                                                                // 60
    }), "I hereby swear that I am the above person\n      ", HTML.BR(), "\n      ", HTML.BR(), "\n      ", HTML.INPUT({
      class: "btn btn-primary btn-md",                                                                     // 62
      type: "submit",                                                                                      // 63
      value: "Enter quiz"                                                                                  // 64
    }), "\n    "), "  \n  " ];                                                                             // 65
  }, function() {                                                                                          // 66
    return [ "\n    ", HTML.H1("QUIZ IS NOT ACTIVE"), "\n  " ];                                            // 67
  });                                                                                                      // 68
}));                                                                                                       // 69
                                                                                                           // 70
Template.__checkName("item");                                                                              // 71
Template["item"] = new Template("Template.item", (function() {                                             // 72
  var view = this;                                                                                         // 73
  return Blaze.View("lookup:enterpriseID", function() {                                                    // 74
    return Spacebars.mustache(view.lookup("enterpriseID"));                                                // 75
  });                                                                                                      // 76
}));                                                                                                       // 77
                                                                                                           // 78
Template.__checkName("noitem");                                                                            // 79
Template["noitem"] = new Template("Template.noitem", (function() {                                         // 80
  var view = this;                                                                                         // 81
  return "NO MATCH";                                                                                       // 82
}));                                                                                                       // 83
                                                                                                           // 84
Template.__checkName("loginForm");                                                                         // 85
Template["loginForm"] = new Template("Template.loginForm", (function() {                                   // 86
  var view = this;                                                                                         // 87
  return "NO MATCH";                                                                                       // 88
}));                                                                                                       // 89
                                                                                                           // 90
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","meteor/session","./main.html","/imports/ui/quiz.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/main.js                                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var Template = void 0;                                                                                     // 1
module.import('meteor/templating', {                                                                       // 1
	"Template": function (v) {                                                                                // 1
		Template = v;                                                                                            // 1
	}                                                                                                         // 1
}, 0);                                                                                                     // 1
var ReactiveVar = void 0;                                                                                  // 1
module.import('meteor/reactive-var', {                                                                     // 1
	"ReactiveVar": function (v) {                                                                             // 1
		ReactiveVar = v;                                                                                         // 1
	}                                                                                                         // 1
}, 1);                                                                                                     // 1
var Session = void 0;                                                                                      // 1
module.import('meteor/session', {                                                                          // 1
	"Session": function (v) {                                                                                 // 1
		Session = v;                                                                                             // 1
	}                                                                                                         // 1
}, 2);                                                                                                     // 1
module.import('./main.html');                                                                              // 1
module.import('/imports/ui/quiz.js');                                                                      // 1
Template.leaderboard.helpers({                                                                             // 9
	'player': function () {                                                                                   // 10
		return PlayerList.find();                                                                                // 11
	}                                                                                                         // 12
});                                                                                                        // 9
Template.leaderboard.helpers({                                                                             // 15
	'playersExist': function () {                                                                             // 16
		var totalUser = PlayerList.find().count();                                                               // 17
                                                                                                           //
		if (totalUser > 1) {                                                                                     // 18
			return true;                                                                                            // 20
		} else {                                                                                                 // 21
			return false;                                                                                           // 23
		}                                                                                                        // 24
	}                                                                                                         // 25
});                                                                                                        // 15
Template.entryPoint.helpers({                                                                              // 29
	'active': function () {                                                                                   // 30
		return true;                                                                                             // 31
	},                                                                                                        // 32
	settings: function () {                                                                                   // 33
		return {                                                                                                 // 34
			limit: 10,                                                                                              // 35
			rules: [{                                                                                               // 36
				// token: '',                                                                                          // 37
				collection: PlayerList,                                                                                // 38
				field: 'enterpriseID',                                                                                 // 39
				matchAll: true,                                                                                        // 40
				template: Template.item,                                                                               // 41
				noMatchTemplate: Template.noitem                                                                       // 42
			}]                                                                                                      // 36
		};                                                                                                       // 34
	}                                                                                                         // 45
});                                                                                                        // 29
Template.entryPoint.events({                                                                               // 48
	'submit form': function (event) {                                                                         // 49
		event.preventDefault();                                                                                  // 50
		var playerNameVar = event.target.enterpriseIDautocomplete.value;                                         // 51
		var dateOfBirthVar = event.target.inputDateOfBirth.value;                                                // 52
		var checkbox = event.target.inputCheckbox.checked;                                                       // 53
		console.log(playerNameVar);                                                                              // 55
		console.log(dateOfBirthVar);                                                                             // 56
		console.log(checkbox);                                                                                   // 57
                                                                                                           //
		if (dateOfBirthVar == PlayerList.find({                                                                  // 59
			enterpriseID: playerNameVar                                                                             // 59
		}).fetch()[0].dob && event.target.inputCheckbox.checked) {                                               // 59
			console.log("Success!");                                                                                // 60
			Session.set("currentUser", playerNameVar);                                                              // 61
			console.log("Current user is " + Session.get("currentUser"));                                           // 62
		} else {                                                                                                 // 63
			console.log("Failed!");                                                                                 // 65
		}                                                                                                        // 66
                                                                                                           //
		var retrieve = PlayerList.find({                                                                         // 67
			enterpriseID: playerNameVar                                                                             // 67
		}).fetch()[0].dob;                                                                                       // 67
		console.log(retrieve); // PlayerList.update({enterpriseID: "playerNameVar"},{score: 5});                 // 68
	}                                                                                                         // 71
});                                                                                                        // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"quizConfig.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// quizConfig.js                                                                                           //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// router.js                                                                                               //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Router.route('/', function () {                                                                            // 2
  this.render('home', {});                                                                                 // 3
});                                                                                                        // 5
Router.route('/quiz', function () {                                                                        // 7
  this.render('quiz', {});                                                                                 // 8
});                                                                                                        // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./quizConfig.js");
require("./router.js");
require("./client/main.js");
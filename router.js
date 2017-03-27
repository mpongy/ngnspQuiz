
Router.route('/', function () {
  this.render('home', {
  });
});

 Router.route('/login', function () {
  this.render('login', {
  });
});
      
Router.route('/quiz/:quizNumber', function () {
  this.render('quiz', {
    data: function(){
      return Quizes.findOne().questions;
    }
  });
});
     
Router.route('/results', function () {
  this.render('results', {
  });
});     

Router.route('/leaderboard', function () {
  this.render('leaderboardPage', {
  });
});   

Router.route('/', function () {
  this.render('home', {
  });
});

 Router.route('/login', function () {
  this.render('login', {
  });
});
      
Router.route('/quiz', function () {
  this.render('quiz', {
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
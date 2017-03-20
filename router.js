
Router.route('/', function () {
  this.render('home', {
  });
});

 Router.route('/login', function () {
  this.render('login', {
  });
});
      
Router.route('/quiz/:quizCode', function () {
  this.render('quiz', {
  });
});
     
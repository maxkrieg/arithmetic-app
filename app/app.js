(function questionsAppIIFE() {
  var app = angular.module('questionsApp', ['ngRoute', 'angularUtils.directives.dirPagination']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/allquestions.html',
        controller: 'allQuestionsController as allQuestionsCtrl'
      })
      .when('/viewquestion/:question_id', {
        templateUrl: 'app/views/viewquestion.html',
        controller: 'questionController as questionCtrl'
      })
      .when('/createquestion', {
        templateUrl: 'app/views/createquestion.html',
        controller: 'questionController as questionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();

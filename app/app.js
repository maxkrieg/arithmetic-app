(function questionsAppIIFE() {
  var app = angular.module('questionsApp', ['ngRoute', 'angularUtils.directives.dirPagination']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/questions.html',
        controller: 'questionsController as questionsCtrl'
      })
      .when('/viewquestion/:question_id', {
        templateUrl: 'app/views/viewquestion.html',
        controller: 'viewQuestionController as viewQuestionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();

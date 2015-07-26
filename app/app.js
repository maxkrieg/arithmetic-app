(function questionsAppIIFE() {
  var app = angular.module('questionsApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/questions.html',
        controller: 'questionsController',
        constrollerAs: 'questionsCtrl'
      })
      .when('/distractors/:question_id', {
        templateUrl: 'app/views/distractors.html',
        controller: 'distractorsController',
        controllerAs: 'distractorsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();

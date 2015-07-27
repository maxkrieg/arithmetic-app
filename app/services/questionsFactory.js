(function questionsFactoryIIFE() {

  var questionsFactory = function($http) {
    var factory = {};
    factory.operators = ["Addition", "Multiplication", "Subtraction"];

    factory.getQuestions = function() {
      return $http.get('http://localhost:3000/questions');
    };

    factory.getQuestion = function(questionId) {
      return $http.get('http://localhost:3000/questions/' + questionId);
    };
    return factory;
  };

  questionsFactory.$inject = ['$http'];

  angular.module('questionsApp').factory('questionsFactory', questionsFactory);
})();

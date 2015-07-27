(function questionsFactoryIIFE() {

  // Create a customers factory
  var questionsFactory = function($http) {
    var factory = {};
    factory.operators = ["Addition", "Multiplication", "Subtraction"];

    factory.getQuestions = function() {
      // allow access to the list of questions
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

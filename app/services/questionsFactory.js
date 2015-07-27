(function questionsFactoryIIFE() {

  var questionsFactory = function($http) {
    var factory = {};

    factory.getQuestions = function() {
      return $http.get('http://localhost:3000/questions');
    };

    factory.getQuestion = function(questionId) {
      return $http.get('http://localhost:3000/questions/' + questionId);
    };

    factory.editQuestion = function(questionId, data) {
      return $http.put('http://localhost:3000/questions/' + questionId, data);
    };

    factory.operators = [{
      id: "*",
      name: "Multiplication"
    }, {
      id: "+",
      name: "Addition"
    }, {
      id: "-",
      name: "Subtraction"
    }];




    return factory;
  };

  questionsFactory.$inject = ['$http'];

  angular.module('questionsApp').factory('questionsFactory', questionsFactory);
})();

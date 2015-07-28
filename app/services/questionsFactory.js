(function questionsFactoryIIFE() {

  var questionsFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    factory.getQuestions = function() {
      return $http.get(this.appSettings.railsURI + '/questions');
    };

    factory.getQuestion = function(questionId) {
      return $http.get(this.appSettings.railsURI + '/questions/' + questionId);
    };

    factory.editQuestion = function(questionId, data) {
      return $http.put(this.appSettings.railsURI + '/questions/' + questionId, data);
    };

    factory.createQuestion = function(data) {
      return $http.post(this.appSettings.railsURI + '/questions', data);
    };

    factory.operators = [{
      id: "default",
      name: "Select Operator"
    }, {
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

  questionsFactory.$inject = ['$http', 'appSettings'];

  angular.module('questionsApp').factory('questionsFactory', questionsFactory);
})();

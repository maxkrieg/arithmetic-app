(function distractorsFactoryIIFE() {

  var distractorsFactory = function($http) {
    var factory = {};

    factory.getDistractors = function(questionId) {
      return $http.get('http://localhost:3000/questions/' + questionId + '/distractors');
    };

    return factory;
  };

  distractorsFactory.$inject = ['$http'];

  angular.module('questionsApp').factory('distractorsFactory', distractorsFactory);
})();

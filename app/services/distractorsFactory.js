(function distractorsFactoryIIFE() {

  var distractorsFactory = function($http) {
    var factory = {};

    factory.getDistractors = function(questionId) {
      return $http.get('http://localhost:3000/questions/' + questionId + '/distractors');
    };

    factory.editDistractor = function(questionId, distractorId, data) {
      return $http.put('http://localhost:3000/questions/' + questionId + '/distractors/' + distractorId, data);
    };

    factory.createDistractor = function(questionId, data) {
      return $http.post('http://localhost:3000/questions/' + questionId + '/distractors', data);
    };

    return factory;
  };

  distractorsFactory.$inject = ['$http'];

  angular.module('questionsApp').factory('distractorsFactory', distractorsFactory);
})();

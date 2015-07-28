(function distractorsFactoryIIFE() {

  var distractorsFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    factory.getDistractors = function(questionId) {
      return $http.get(this.appSettings.railsURI + '/questions/' + questionId + '/distractors');
    };

    factory.editDistractor = function(questionId, distractorId, data) {
      return $http.put(this.appSettings.railsURI + '/questions/' + questionId + '/distractors/' + distractorId, data);
    };

    factory.createDistractor = function(questionId, data) {
      return $http.post(this.appSettings.railsURI + '/questions/' + questionId + '/distractors', data);
    };

    factory.deleteDistractor = function(questionId, distractorId) {
      return $http.delete(this.appSettings.railsURI + '/questions/' + questionId + '/distractors/' + distractorId);
    };

    return factory;
  };

  distractorsFactory.$inject = ['$http', 'appSettings'];

  angular.module('questionsApp').factory('distractorsFactory', distractorsFactory);
})();

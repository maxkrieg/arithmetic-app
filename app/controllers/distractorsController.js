(function distractorsControllerIIFE() {

  var DistractorsController = function($routeParams, questionsFactory) {
    var questionId = $routeParams.question_id;
    var vm = this;
    vm.currentQuestion = {};

    function init() {
      questionsFactory.getQuestion(questionId)
        .success(function(data) {
          console.log("success getting question");
          vm.currentQuestion = data;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting a customer from the remote api");
        });
    }

    init();
  };

  // Prevent the minifier from breaking dependency injection.
  DistractorsController.$inject = ['$routeParams', 'questionsFactory'];

  // The Controller is part of the module.
  angular.module('questionsApp').controller('distractorsController', DistractorsController);

})();

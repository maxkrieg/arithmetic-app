(function questionsControllerIIFE() {

  var QuestionsController = function(questionsFactory) {

    var vm = this;
    vm.questions = [];
    vm.operator = questionsFactory.operators;


    function init() {
      questionsFactory.getQuestions()
        .success(function(data) {
          console.log("success getting questionsss");
          vm.questions = data.questions;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting questions from the remote api");
        });
    }

    init();

  };

  QuestionsController.$inject = ['questionsFactory'];

  // The Controller is part of the module.
  angular.module('questionsApp').controller('questionsController', QuestionsController);

})();

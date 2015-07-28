(function allQuestionsControllerIIFE() {

  var AllQuestionsController = function(questionsFactory) {

    var vm = this;
    vm.questions = [];
    vm.operators = questionsFactory.operators;
    vm.sortBy = "answer";
    vm.reverse = false;

    function init() {
      questionsFactory.getQuestions()
        .success(function(data) {
          console.log("success getting questions");
          // data.questions.forEach(function(obj) {
          //   console.log(obj);
          //   obj.answer = questionsFactory.calculatedAnswer(obj.first_operand, obj.second_operand, obj.operator);
          // });
          vm.questions = data.questions;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting questions from the remote api");
        });
    }

    init();

    vm.doSort = function(propName) {
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

  };

  AllQuestionsController.$inject = ['questionsFactory'];

  // The Controller is part of the module.
  angular.module('questionsApp').controller('allQuestionsController', AllQuestionsController);

})();

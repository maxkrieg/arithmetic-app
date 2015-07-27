(function viewQuestionControllerIIFE() {

  var ViewQuestionController = function(questionsFactory, distractorsFactory, $routeParams) {
    var questionId = $routeParams.question_id;
    var vm = this;
    vm.operators = questionsFactory.operators;
    vm.question = {};
    vm.distractors = [];

    function init() {
      questionsFactory.getQuestion(questionId)
        .success(function(data) {
          console.log("success getting question");
          vm.question = data.question;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting question from the remote api");
        });

      distractorsFactory.getDistractors(questionId)
        .success(function(data) {
          console.log("success getting distractors");
          vm.distractors = data.distractors;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting distractors from the remote api");
        });

    }
    init();

    vm.calculatedAnswer = function(first_operand, second_operand, operator) {
      var first = parseInt(first_operand),
        second = parseInt(second_operand),
        answer;
      if (operator === "*") {
        answer = first * second;
      } else if (operator === "+") {
        answer = first + second;
      } else if (operator === "-") {
        answer = first - second;
      }
      vm.question.answer = answer.toString();
      return answer.toString();
    };

    vm.editQuestion = function() {
      questionsFactory.editQuestion(questionId, {
        question: vm.question
      })
        .success(function() {
          console.log('success updating question');
        })
        .error(function() {
          console.log('error updating question');
        });
    };

  };

  ViewQuestionController.$inject = ['questionsFactory', 'distractorsFactory', '$routeParams'];

  // The Controller is part of the module.
  angular.module('questionsApp').controller('viewQuestionController', ViewQuestionController);

})();

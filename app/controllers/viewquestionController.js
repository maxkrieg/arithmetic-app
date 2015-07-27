(function viewQuestionControllerIIFE() {

  var ViewQuestionController = function(questionsFactory, distractorsFactory, $routeParams) {
    var questionId = $routeParams.question_id;
    var vm = this;
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

  };

  ViewQuestionController.$inject = ['questionsFactory', 'distractorsFactory', '$routeParams'];

  // The Controller is part of the module.
  angular.module('questionsApp').controller('viewQuestionController', ViewQuestionController);

})();

(function questionsControllerIIFE() {

  var QuestionsController = function(questionsFactory) {
    var vm = this;
    vm.questions = [];

    function init() {
      // Init the customers from the factory
      // Get all the customers from the backend
      questionsFactory.getQuestions()
        .success(function(data) {
          console.log("success getting questions");
          vm.questions = data;
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

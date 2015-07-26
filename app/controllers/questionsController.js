(function questionsControllerIIFE() {

  var QuestionsController = function(questionsFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;

    vm.questions = [];
    // reflects the contents of the form, the current customer
    vm.currentCustomer = {};
    // The customer to be saved/persisted
    vm.master = {};

    function init() {
      // Init the customers from the factory
      // Get all the customers from the backend
      questionsFactory.getQuestions()
        .success(function(questions) {
          vm.questions = questions;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting questions from the remote api");
        });
    }

    init();

  };

  QuestionsController.$inject = ['questionsFactory', 'appSettings'];

  // The Controller is part of the module.
  angular.module('questionsApp').controller('questionsController', QuestionsController);

})();

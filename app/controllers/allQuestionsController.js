(function allQuestionsControllerIIFE() {

  var AllQuestionsController = function(questionsFactory) {

    // Alias for this controller
    var vm = this;

    // Array to store questions from API
    vm.questions = [];

    // Pull in operators
    vm.operators = questionsFactory.operators;

    // Default values for sorting
    vm.sortBy = "answer";
    vm.reverse = false;

    // Get all questions from API on page load
    function init() {
      questionsFactory.getQuestions()
        .success(function(data) {
          console.log("success getting questions");
          // Save questions into vm.questions array
          vm.questions = data.questions;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting questions from the remote api");
        });
    }
    // Immediately invoke the above
    init();

    // Method for Sorting
    vm.doSort = function(propName) {
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

  };

  AllQuestionsController.$inject = ['questionsFactory'];

  angular.module('questionsApp').controller('allQuestionsController', AllQuestionsController);

})();

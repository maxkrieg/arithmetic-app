(function distractorsControllerIIFE() {

  var DistractorsController = function($routeParams, questionsFactory) {
    var questionId = $routeParams.question_id;

    function init() {
      questionsFactory.getQuestion(questionId)
        .success(function(question) {
          $scope.customer = customer;
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
  angular.module('customersApp').controller('ordersController', OrdersController);

})();

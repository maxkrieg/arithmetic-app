(function questionControllerIIFE() {

  var QuestionController = function(questionsFactory, distractorsFactory, $routeParams) {
    // Grab question id from route params (for viewquestion view only)
    var questionId = $routeParams.question_id;

    // Create alias for this controller
    var vm = this;

    // Get operators from factory
    vm.operators = questionsFactory.operators;

    // For holding existing question and distractors
    vm.question = {};
    vm.distractors = [];

    // Construct the new distractor object
    vm.newDistractor = {};
    vm.newDistractor.distractor = "";

    // Construct the new question object
    vm.newQuestionForm = {};
    vm.newQuestionForm.operator = "default";

    // Get question and distractors when page loads (viewquestion view only)
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
    // Immediately invoke the above function
    init();

    // Calcuated answer (for both viewquestion and createquestion views)
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
      vm.question.answer = answer;
      vm.newQuestionForm.answer = answer;
      return answer;
    };

    // Edit existing Question (viewquestion view)
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

    // Create new question (createquestion view)
    vm.createQuestion = function() {
      questionsFactory.createQuestion({
        question: vm.newQuestionForm
      })
        .success(function(obj) {
          console.log('success creating question');
          questionId = obj.question.id;
        })
        .error(function() {
          console.log('error creating question');
        });
    };

    // Edit existing Distractors (viewquestion view)
    vm.editDistractors = function() {
      var distractorId;
      vm.distractors.forEach(function(obj) {
        distractorId = obj.id;
        distractorsFactory.editDistractor(questionId, distractorId, {
          distractor: obj
        })
          .success(function() {
            console.log('success updating distractor');
          })
          .error(function() {
            console.log('error updating distractor');
          });
      });
    };

    // Add a new Distractor (both viewquestion and create question views)
    vm.addDistractor = function() {
      distractorsFactory.createDistractor(questionId, {
        distractor: vm.newDistractor
      })
        .success(function(obj) {
          console.log('success adding new distractor');
          vm.distractors.push(obj.distractor);
          vm.newDistractor.distractor = "";
        })
        .error(function() {
          console.log('error adding new distractor');
        });
    };

    // Delete existing distractor (viewquestion view)
    vm.deleteDistractor = function(distractorId, index) {
      distractorsFactory.deleteDistractor(questionId, distractorId)
        .success(function() {
          console.log('success deleting distractor');
          vm.distractors.splice(index, 1);
        })
        .error(function() {
          console.log('error deleting distractor');
        });
    };
  };

  QuestionController.$inject = ['questionsFactory', 'distractorsFactory', '$routeParams'];

  angular.module('questionsApp').controller('questionController', QuestionController);

})();

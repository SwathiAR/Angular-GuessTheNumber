'use strict';

var guessWord = angular.module("guessWord" , []);

guessWord.controller("guessWordController" , function($scope){
  $scope.initializeGame = function (){
      $scope.original = Math.floor(Math.random()*1000) + 1;
      $scope.guess = null;
      $scope.noOfTries = 0;
      $scope.deviation = null;
  }

    $scope.checkGuess = function (guessedNumber) {
       $scope.deviation =  $scope.original - guessedNumber ;
        $scope.noOfTries = $scope.noOfTries + 1;


    }
    
    $scope.initializeGame();

});

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider

      .state('home', {
        url: '/home',
        views: {
          home: {
            templateUrl: 'views/home.html'
          }
        }
      })

      .state('help', {
        url: '/help',
        views: {
          help: {
            templateUrl: 'views/help.html'
          }
        }
      })

      .state('gear',{
        url: '/gear',
        views:{
          gear: {
            templateUrl:'views/gear.html',
            controller: 'ctrlLista'
          }
        }
      })
  })
  
  .controller('ctrlLista',function($scope){
      $scope.pessoas = [
        {nome:"jose",tel:'89239883'},
        {nome:"Pedro",tel:'89239883'},
        {nome:"Wesley",tel:'89239883'},
        {nome:"maria",tel:'89239883'},
        {nome:"Marta",tel:'89239883'},
        {nome:"Manuel",tel:'89239883'}
      ]
  })


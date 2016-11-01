/**
 * Created by hello world on 2016/11/1.
 */
angular.module('home.route',['home.controller'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.home',{
      url:'/home',
      views:{
        'tab-home':{
          templateUrl:'html/home/home.html',
          controller:'HomeCtrl'
        }
      }
    })
});

angular.module('route',['tab.route','home.route'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/home');/*route手动输入不正确是，自动跳回home主页*/
  });

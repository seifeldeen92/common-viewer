(function() {
  'use strict';

  angular
    .module('commonViewer')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/filemanager/templates/main.html',
        controller: 'FileManagerController',
      })
      .state('pdfviewer', {
        url: '/pdfviewer/:id',
        templateUrl: 'app/pdfviewer/templates/main.html',
        controller: 'pdfViewerController',
      });


    $urlRouterProvider.otherwise('/');
  }

})();

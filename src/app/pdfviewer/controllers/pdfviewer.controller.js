(function() {
  'use strict';

  angular
    .module('pdfviewer',['pdfjsViewer','annotations'])
    .controller('pdfViewerController', pdfViewerController);

  /** @ngInject */
  function pdfViewerController($scope, pdfBlobUrl) {
    $scope.pdf = {
      src: pdfBlobUrl
    }
  }

})();
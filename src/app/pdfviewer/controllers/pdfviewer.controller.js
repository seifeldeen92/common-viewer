(function() {
  'use strict';

  angular
    .module('pdfviewer',['pdfjsViewer'])
    .controller('pdfViewerController', pdfViewerController);

  /** @ngInject */
  function pdfViewerController($scope) {
  	function base64ToBlob(b64Data, contentType, sliceSize) {
  		contentType = contentType || '';
  		sliceSize = sliceSize || 512;

  		var byteCharacters = atob(b64Data);
  		var byteArrays = [];

  		for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  			var slice = byteCharacters.slice(offset, offset + sliceSize);

  			var byteNumbers = new Array(slice.length);
  			for (var i = 0; i < slice.length; i++) {
  				byteNumbers[i] = slice.charCodeAt(i);
  			}

  			var byteArray = new Uint8Array(byteNumbers);

  			byteArrays.push(byteArray);
  		}
  		
  		var blob = new Blob(byteArrays, {type: contentType});
  		return blob;
  	} 

  		// $http.get('http://10.170.76.85:8080/api/document/open/090007c280007113').success(function(response){
  		// 	var pdfContent = response.data,
  	 //        	contentType = 'data:application/pdf;base64, ',
  		// 		blob = base64ToBlob(pdfContent, contentType),
  		// 		blobUrl = URL.createObjectURL(blob);
  		// 	$scope.pdf = {
  		// 	     src: blobUrl
  		// 	};		
  		// });
  	console.log('Viewer Controller');
  }

})();
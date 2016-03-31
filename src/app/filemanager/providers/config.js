(function(angular) {
    'use strict';
    angular.module('FileManager').provider('fileManagerConfig', function() {

        var values = {
            appName: 'ECD File Manager',
            defaultLang: 'en',

            listUrl: 'http://springHost:8080/api/listUrl',
            uploadUrl: 'http://springHost:8080/api/uploadUrl',
            renameUrl: 'http://springHost:8080/api/renameUrl',
            copyUrl: 'http://springHost:8080/api/copyUrl',
            removeUrl: 'http://springHost:8080/api/deleteFolderUrl',
            editUrl: 'http://springHost:8080/api/editUrl',
            getContentUrl: 'http://springHost:8080/api/document/content',
            createFolderUrl: 'http://springHost:8080/api/createFolderUrl',
            downloadFileUrl: 'http://springHost:8080/api/document/content',
            compressUrl: 'http://springHost:8080/api/compressUrl',
            extractUrl: 'http://springHost:8080/api/extractUrl',
            permissionsUrl: 'http://springHost:8080/api/permissionsUrl',

            searchForm: true,
            sidebar: true,
            breadcrumb: true,
            allowedActions: {
                upload: true,
                rename: true,
                copy: true,
                edit: true,
                changePermissions: true,
                compress: true,
                compressChooseName: true,
                extract: true,
                download: true,
                preview: true,
                remove: true
            },

            showSizeForDirectories: false,
            useBinarySizePrefixes: false,

            previewImagesInModal: true,
            enablePermissionsRecursive: true,
            compressAsync: true,
            extractAsync: true,

            isEditableFilePattern: /\.(txt|html?|aspx?|ini|pl|py|md|css|js|log|htaccess|htpasswd|json|sql|xml|xslt?|sh|rb|as|bat|cmd|coffee|php[3-6]?|java|c|cbl|go|h|scala|vb)$/i,
            isImageFilePattern: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
            isExtractableFilePattern: /\.(gz|tar|rar|g?zip)$/i,
            tplPath: 'app/filemanager/templates'
        };

        return {
            $get: function() {
                return values;
            },
            set: function (constants) {
                angular.extend(values, constants);
            }
        };

    });
})(angular);

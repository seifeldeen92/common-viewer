# Common Viewer (File Manager + PDF Viewer) App used [Yeoman](http://yeoman.io) generator to generate App

## Project Dependencies

* [NodeJS](https://nodejs.org/) is used to run the app on a server.
* [AngularJS](https://angularjs.org/) is used as the frontend framework.
* [Gulp](http://gulpjs.com/) jobs for development, building, emulating, running your app, compiles and concatenates Sass files, local development server with live reload.

### Getting Started

#### Backend Workflow

* Run Documentum VM and copy the IP address of your VM.
* Clone the Spring boot project `git clone git@github.com:mmohen/dctm-rest-samples.git`. After cloning the project, update the properties file with your VM IP. Check the [READme.md](https://github.com/mmohen/dctm-rest-samples/blob/master/README.md) file for detailed step by step instructions. 

#### Frontend Workflow

* This doc assumes you have [NodeJS](https://nodejs.org/en/download/) and `gulp` installed globally (`npm install -g gulp`).
* Clone the project using `git clone git@github.com:seifeldeen92/common-viewer.git`. After the project is cloned navigate to the project directory and run `npm install & bower install` using `sudo` may be required.
* Use `gulp serve` to compile and run the project in the browser

##### Note
Add the IP address of your machine that is running the Spring boot and port by changing the constant value `SPRING_API` in the [Config.js](https://github.com/seifeldeen92/common-viewer/blob/master/src/app/filemanager/providers/config.js) file.


## Troubleshoot
* if you get `Unable to connect github.com` while running `npm install` , `bower install` or cloning the project, this because you trying to connect through SSH, just change this connect type to HTTPS. Type this config command in the terminal `git config --global url."https://".insteadOf git://` and it problem should be fix

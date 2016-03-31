# common-viewer

1-make sure you have the documentum VM up and running
2-make sure you have the spring boot project up and running  (adjust the properties file to the VM machine IP)
3-open cmd "windows" /terminal on Linux/Mac OS
4-navigate to the angular file manager folder locally (cd <filepath>)
5-type : npm install
6-type : gulp install
7-type : gulp  in the cmd/terminal
8-after a successful build , type : http-server -p <port>  (Note : use ports other than 8080 as it is the spring boot default port)
9-open localhost:<http-server port>
 
the file manager should be working fine.
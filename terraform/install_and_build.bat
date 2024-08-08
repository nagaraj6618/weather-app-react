@echo off

REM Remove the build files 
rmdir /s /q D:\Devops\weather-app\weather-app-react\build

REM remove the build files 
rmdir /s /q D:\Devops\weather-app\weather-app-react\node_modules

REM Navigate to the React project directory
cd D:\Devops\weather-app\weather-app-react

REM Install npm dependencies
npm install && npm install -g serve && npm run build 

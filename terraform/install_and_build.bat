@echo off

REM Navigate to the React project directory
cd D:\Devops\weather-app\weather-app-react

REM Install npm dependencies and build the project
npm run build

REM Copy build to deploy directory
xcopy "D:\Devops\weather-app\weather-app-react\build" "D:\Devops\weather-app\weather-app-react\deploy" /E /I /Y
REM Copy
cd .

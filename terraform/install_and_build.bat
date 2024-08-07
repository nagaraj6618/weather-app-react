@echo off
REM Navigate to the React project directory
cd /d %~dp0\\..\\your-react-project

REM Install npm dependencies
npm install

REM Build the React project
npm run build

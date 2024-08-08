provider "local" {}

resource "local_file" "npm_install_script" {
  content = <<-EOT
    @echo off

    REM Remove the build files 
    rmdir /s /q D:\Devops\weather-app\weather-app-react\build

    REM Remove the node_modules folder
    rmdir /s /q D:\Devops\weather-app\weather-app-react\node_modules

    REM Navigate to the React project directory
    cd D:\Devops\weather-app\weather-app-react

    REM Install npm dependencies and build the project
    npm install && npm run build

    REM Copy build to deploy directory
    xcopy "D:\Devops\weather-app\weather-app-react\build" "D:\Devops\weather-app\weather-app-react\deploy" /E /I /Y
  EOT
  filename = "${path.module}/install_and_build.bat"
  file_permission = "0755"
}


provider "local" {}

resource "local_file" "npm_install_script" {
  content = <<-EOT
    @echo off

    REM Remove the build files 
    rmdir /s /q D:\Devops\weather-app\weather-app-react\build

    REM remove the build files 
    rmdir /s /q D:\Devops\weather-app\weather-app-react\node_modules

    REM Navigate to the React project directory
    cd D:\Devops\weather-app\weather-app-react

    REM Install npm dependencies
    npm install && npm install -g serve && npm run build 
  EOT
  filename = "${path.module}/install_and_build.bat"
  file_permission = "0755"
}

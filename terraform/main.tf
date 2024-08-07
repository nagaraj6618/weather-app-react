provider "local" {}

resource "local_file" "npm_install_script" {
  content = <<-EOT
    @echo off

    REM Navigate to the React project directory
    cd D:\Devops\weather-app\weather-app-react

    REM Install npm dependencies and build the project
    npm run build

    REM Copy build to deploy directory
    xcopy "D:\Devops\weather-app\weather-app-react\build" "D:\Devops\weather-app\weather-app-react\deploy" /E /I /Y
    REM Copy
    cd .
  EOT
  filename = "${path.module}/install_and_build.bat"
  file_permission = "0755"
}

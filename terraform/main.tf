provider "local" {}

resource "local_file" "npm_install_script" {
  content = <<-EOT
    @echo off
    REM Navigate to the React project directory
    cd D:\Devops\weather-app\weather-app-react

    REM Install npm dependencies
    npm install && npm run build

    REM Build the React project
    npm run build
  EOT
  filename = "${path.module}/install_and_build.bat"
  file_permission = "0755"
}
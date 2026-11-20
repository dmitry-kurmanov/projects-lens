@echo off
cd /d "%~dp0"
start "" cmd /c "timeout /t 1 >nul & start http://localhost:5180"
node server.js || pause

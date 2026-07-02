@echo off
setlocal EnableExtensions DisableDelayedExpansion

set "VAIRN_APP_DIR=%~dp0"
if "%VAIRN_APP_DIR:~-1%"=="\" set "VAIRN_APP_DIR=%VAIRN_APP_DIR:~0,-1%"

echo.
echo Starting Vairn...
echo.
echo Vairn app dir:
echo %VAIRN_APP_DIR%
echo.

if not exist "%VAIRN_APP_DIR%\package.json" (
  echo ERROR: package.json was not found in the Vairn app dir.
  echo.
  echo Put this bat file in the Vairn project root.
  echo Current Vairn app dir:
  echo %VAIRN_APP_DIR%
  echo.
  pause
  exit /b 1
)

for /f "usebackq delims=" %%I in (`powershell -NoProfile -ExecutionPolicy Bypass -Command "Add-Type -AssemblyName System.Windows.Forms; $d = New-Object System.Windows.Forms.FolderBrowserDialog; $d.Description = 'Select project-root / data-dir for Vairn'; $d.ShowNewFolderButton = $false; if ($d.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { [Console]::Out.WriteLine($d.SelectedPath) }"`) do set "VAIRN_TARGET_DIR=%%I"

if not defined VAIRN_TARGET_DIR (
  echo.
  echo Canceled.
  echo.
  pause
  exit /b 1
)

echo.
echo ----------------------------------------
echo project-root:
echo %VAIRN_TARGET_DIR%
echo.
echo data-dir:
echo %VAIRN_TARGET_DIR%
echo ----------------------------------------
echo.
echo Running Vairn server...
echo.
echo Command:
echo npm run server:start -- --project-root "%VAIRN_TARGET_DIR%" --data-dir "%VAIRN_TARGET_DIR%"
echo.
echo Server logs will appear below.
echo ----------------------------------------
echo.

pushd "%VAIRN_APP_DIR%"
call npm.cmd run server:start -- --project-root "%VAIRN_TARGET_DIR%" --data-dir "%VAIRN_TARGET_DIR%"
set "EXIT_CODE=%ERRORLEVEL%"
popd

echo.
echo ----------------------------------------
echo Vairn process exited.
echo Exit code: %EXIT_CODE%
echo ----------------------------------------
echo.
pause

exit /b %EXIT_CODE%
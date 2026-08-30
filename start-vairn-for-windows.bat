@echo off
setlocal EnableExtensions DisableDelayedExpansion


set "PORT=4319"

echo Searching for a process listening on port %PORT%...

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command ^
  "$processIds = Get-NetTCPConnection -LocalPort %PORT% -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique;" ^
  "if (-not $processIds) {" ^
  "  Write-Host 'No process is listening on port %PORT%.';" ^
  "  exit 1;" ^
  "}" ^
  "foreach ($processId in $processIds) {" ^
  "  $process = Get-Process -Id $processId -ErrorAction SilentlyContinue;" ^
  "  if ($process) {" ^
  "    Write-Host ('Killing process: {0}  PID: {1}' -f $process.ProcessName, $processId);" ^
  "    Stop-Process -Id $processId -Force;" ^
  "    Write-Host ('Killed PID {0}.' -f $processId);" ^
  "  }" ^
  "}"

if errorlevel 1 (
    echo.
    echo No target process was found or the process could not be terminated.
) else (
    echo.
    echo Port %PORT% has been released.
)





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
echo data-dir parent:
echo %VAIRN_TARGET_DIR%
echo.
echo effective data dir:
echo %VAIRN_TARGET_DIR%\.vairn
echo ----------------------------------------
echo.
echo Running Vairn server...
echo.
echo Command:
echo npm run start:personal -- --project-root "%VAIRN_TARGET_DIR%" --data-dir "%VAIRN_TARGET_DIR%"
echo.
echo Server logs will appear below.
echo ----------------------------------------
echo.

pushd "%VAIRN_APP_DIR%"
call npm.cmd run start:personal -- --project-root "%VAIRN_TARGET_DIR%" --data-dir "%VAIRN_TARGET_DIR%"
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

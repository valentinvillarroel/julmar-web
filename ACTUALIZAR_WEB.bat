@echo off
echo ---------------------------------------------------
echo      ACTUALIZADOR AUTOMATICO WEB JULMAR
echo ---------------------------------------------------
echo.
echo Buscando nuevas fotos en 'NUEVAS_FOTOS_AQUI'...
echo.

python automatizar_flota.py

echo.
echo ---------------------------------------------------
echo Proceso finalizado.
echo Si hubo errores, revisa los mensajes arriba.
echo Si todo salio bien, las nuevas maquinas estan en la web.
echo ---------------------------------------------------
pause

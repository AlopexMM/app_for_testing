# Instrucciones

Para correr la aplicación ejecutar lo siguiente para Windows

```
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
python -m flask --app .\src\app.py run
```

Para correr la aplicación ejecutar lo siguiente para Linux o Mac

```
python -m venv venv
./venv/bin/activate
pip install -r requirements.txt
python -m flask --app ./src/app.py run
```

> En caso de tener errores al correr el aplicativo  pueden correr la aplicación en modo desarrollo
>
> python -m flask --app ./src/app.py run --debug

# URLs

La pagina de datos sobre el dolar la vamos a encontrar en localhost:5000/data

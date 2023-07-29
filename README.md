# YaBajo

**YaBajo** es una aplicación web diseñada para gestionar el periodo menstrual. Esta herramienta proporciona a las usuarias una forma conveniente de realizar un seguimiento de su ciclo menstrual, lo que les permite predecir y comprender mejor su salud reproductiva.

## Características principales

- **Registro del ciclo menstrual**: Las usuarias pueden registrar el inicio y fin de su periodo menstrual, lo que permite a la aplicación calcular la duración del ciclo y predecir futuros periodos.

- **Predicción del próximo periodo**: YaBajo proporciona una predicción del próximo periodo menstrual, lo que ayuda a las usuarias a estar preparadas y planificar con anticipación.


## Instalación

1. Clona este repositorio en tu máquina local.

```
git clone https://github.com/tu_usuario/YaBajo.git
```

2. Ve al directorio del proyecto.

```
cd YaBajo
```

3. Instala las dependencias necesarias.

```
npm install
```

4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias.

```
EXPRESS_SESSION_SECRET=tu_secreto_para_la_sesion
PORT=3000
```

5. Ejecuta la aplicación.

```
npm start
```

La aplicación estará disponible en `http://localhost:3003`.

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB (u otra base de datos)
- HTML, CSS y JavaScript
- Pug (motor de plantillas)
- Otros paquetes y librerías necesarios (ver `package.json`)

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir con mejoras, correcciones de errores o nuevas características, por favor crea un *pull request* explicando los cambios propuestos.

## Licencia

YaBajo se distribuye bajo la Licencia MIT. Para más información, consulta el archivo [LICENSE](LICENSE).

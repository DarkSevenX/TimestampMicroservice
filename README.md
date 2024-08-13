
Este proyecto proporciona una API REST que convierte fechas en marcas de tiempo Unix y cadenas en formato UTC. La API admite tanto cadenas de fecha como marcas de tiempo y maneja fechas inválidas y parámetros vacíos.

## Endpoints

### 1. Obtener Información de Fecha

**GET** `/api/:input?`

#### Parámetros

- `:input` (opcional) - Una cadena de fecha o una marca de tiempo Unix. Si se omite, se utilizará la fecha y hora actual.

#### Respuestas

- **Fecha/Texto Válido**: Devuelve un objeto JSON con la siguiente estructura:
  ```json
  {
    "unix": <marca de tiempo en milisegundos>,
    "utc": "<cadena de fecha formateada>"
  }
  ```

  Ejemplo:
  ```json
  {
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
  }
  ```

- **Fecha/Texto Inválido**: Si el input no se puede analizar en una fecha válida, devuelve:
  ```json
  {
    "error": "Invalid Date"
  }
*  ```

- **Parámetro Vacío**: Si no se proporciona ningún parámetro, devuelve la fecha y hora actual:
  ```json
  {
    "unix": <marca de tiempo actual en milisegundos>,
    "utc": "<cadena de fecha formateada actual>"
  }
  ```

  Ejemplo:
  ```json
  {
    "unix": 1691905795000,
    "utc": "Mon, 13 Aug 2024 16:56:35 GMT"
  }
  ```

## Ejecutar el Proyecto

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/DarkSevenX/TimestampMicroservice.git
   ```

2. **Navegar al Directorio del Proyecto**

   ```bash
   cd TimestampMicroservice
   ```

3. **Instalar Dependencias**

   ```bash
   npm install
   ```

4. **Iniciar el Servidor**

   ```bash
   npm start
   ```

5. **Acceder a la API**

   Abre tu navegador o usa una herramienta como Postman para hacer solicitudes a `http://localhost:3000/api/:input`.

## Ejemplos de Solicitudes

- **Cadena de Fecha Válida**

  Solicitud: `GET /api/2015-12-25`

  Respuesta:
  ```json
  {
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
  }
  ```

- **Marca de Tiempo Válida**

  Solicitud: `GET /api/1451001600000`

  Respuesta:
  ```json
  {
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
  }
  ```

- **Fecha Inválida**

  Solicitud: `GET /api/fecha-invalida`

  Respuesta:
  ```json
  {
    "error": "Invalid Date"
  }
  ```

- **Fecha/Hora Actual**

  Solicitud: `GET /api`

  Respuesta:
  ```json
  {
    "unix": <marca de tiempo actual>,
    "utc": "<cadena de fecha formateada actual>"
  }
  ```

## Contribuciones

Si deseas contribuir a este proyecto, por favor haz un fork del repositorio y envía un pull request con tus cambios. Asegúrate de que tus contribuciones se ajusten a los estándares de codificación del proyecto y pasen todas las pruebas.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT 

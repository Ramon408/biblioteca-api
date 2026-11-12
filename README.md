# 📚 API RESTful – Biblioteca Digital

API RESTful para gestionar una colección de libros, desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB** (Mongoose), siguiendo el patrón **MVC**.

## 🛠 Tecnologías

- Node.js (v20.12 o superior, necesario para `process.loadEnvFile()`)
- Express
- TypeScript
- MongoDB + Mongoose
- tsx (ejecución en desarrollo)

## 📁 Estructura del proyecto

```
src/
├── config/        # Variables de entorno y conexión a MongoDB
├── controllers/   # Lógica de cada endpoint
├── interfaces/    # Tipos e interfaces (IBook, IApiResponse)
├── models/        # Esquema y modelo de Mongoose (Book)
├── routes/        # Definición de rutas
├── utils/         # Respuestas estandarizadas y manejo de errores
├── app.ts         # Configuración de Express
└── index.ts       # Punto de entrada: conecta la DB y levanta el servidor
```

## 🚀 Instalación y ejecución local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/biblioteca-api.git
   cd biblioteca-api
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear el archivo `.env` a partir del ejemplo y ajustar los valores:
   ```bash
   cp .env.example .env
   ```
   ```env
   PORT=3000
   URI_DB=mongodb://127.0.0.1:27017/biblioteca
   ```
   (Podés usar MongoDB local o una URI de MongoDB Atlas.)
4. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```
5. O compilar y ejecutar en modo producción:
   ```bash
   npm run build
   npm start
   ```

La API queda disponible en `http://localhost:3000`.

## 📖 Modelo `Book`

| Campo          | Tipo    | Reglas                     |
|----------------|---------|----------------------------|
| `title`        | string  | Requerido y único          |
| `author`       | string  | Requerido                  |
| `publishedYear`| number  | Opcional                   |
| `genre`        | string  | Opcional                   |
| `available`    | boolean | Por defecto `true`         |

## 🔄 Endpoints

| Método | Ruta          | Descripción                |
|--------|---------------|----------------------------|
| GET    | `/books`      | Listar todos los libros    |
| GET    | `/books/:id`  | Obtener un libro por ID    |
| POST   | `/books`      | Crear un nuevo libro       |
| PATCH  | `/books/:id`  | Actualizar un libro        |
| DELETE | `/books/:id`  | Eliminar un libro          |

En el archivo `requests.http` hay ejemplos listos para probar con la extensión REST Client de VS Code (también sirven como referencia para Postman o Thunder Client).

### Ejemplo – crear un libro

```http
POST /books
Content-Type: application/json

{
  "title": "Rayuela",
  "author": "Julio Cortázar",
  "publishedYear": 1963,
  "genre": "Novela"
}
```

## 📦 Formato de respuesta

Todas las respuestas siguen la misma estructura.

**Éxito**
```json
{
  "success": true,
  "message": "Libro creado correctamente",
  "data": { "_id": "...", "title": "Rayuela", "author": "Julio Cortázar", "available": true }
}
```

**Error**
```json
{
  "success": false,
  "message": "Libro no encontrado",
  "data": null
}
```

### Códigos de estado utilizados

| Código | Caso                                                    |
|--------|---------------------------------------------------------|
| 200    | Operación exitosa                                       |
| 201    | Libro creado                                            |
| 400    | ID inválido, datos inválidos o JSON mal formado         |
| 404    | Libro o ruta no encontrados                             |
| 409    | Ya existe un libro con ese título                       |
| 500    | Error interno del servidor                              |

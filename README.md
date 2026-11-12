# API Biblioteca Digital

API REST para manejar una coleccion de libros. Hecha con Node.js, Express, TypeScript y MongoDB usando el patron MVC.

## Instalacion

1. Clonar el repo

```
git clone https://github.com/<usuario>/biblioteca-api.git
cd biblioteca-api
```

2. Instalar las dependencias

```
npm install
```

3. Crear un archivo `.env` en la raiz (hay un `.env.example` de ejemplo)

```
PORT=3000
URI_DB=mongodb://127.0.0.1:27017/biblioteca
```

4. Correr el proyecto

```
npm run dev
```

La API queda en `http://localhost:3000`

## Endpoints

- `GET /books` lista todos los libros
- `GET /books/:id` trae un libro por id
- `POST /books` crea un libro
- `PATCH /books/:id` actualiza un libro
- `DELETE /books/:id` elimina un libro

Ejemplo de body para crear un libro:

```json
{
  "title": "Rayuela",
  "author": "Julio Cortazar",
  "publishedYear": 1963,
  "genre": "Novela"
}
```

## Respuestas

Todas las respuestas tienen el mismo formato:

```json
{
  "success": true,
  "message": "Libro creado",
  "data": {}
}
```

Si hay un error `success` viene en `false` y `data` en `null`.

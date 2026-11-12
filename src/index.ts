import express from "express"
import connectMongoDb from "./config/mongo"
import bookRouter from "./routes/bookRouter"

process.loadEnvFile()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use("/books", bookRouter)

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Ruta no encontrada", data: null })
})

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
  connectMongoDb()
})

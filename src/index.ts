import express from "express"
import connectMongoDb from "./config/mongo"
import bookRouter from "./routes/bookRouter"

process.loadEnvFile()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use("/books", bookRouter)

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
  connectMongoDb()
})

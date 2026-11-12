import mongoose from "mongoose"

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.URI_DB as string)
    console.log("Conectado a MongoDB")
  } catch (error) {
    console.log("Error al conectar a MongoDB")
    process.exit(1)
  }
}

export default connectMongoDb

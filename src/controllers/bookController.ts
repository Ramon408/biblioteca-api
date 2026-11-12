import { Request, Response } from "express"
import { isValidObjectId } from "mongoose"
import Book from "../models/bookModel"
import { sendSuccess, sendError } from "../utils/response"

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find()
    sendSuccess(res, 200, "Libros encontrados", books)
  } catch (error) {
    sendError(res, 500, "Error al obtener los libros")
  }
}

const getBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string
    if (!isValidObjectId(id)) {
      return sendError(res, 400, "ID invalido")
    }
    const book = await Book.findById(id)
    if (!book) {
      return sendError(res, 404, "Libro no encontrado")
    }
    sendSuccess(res, 200, "Libro encontrado", book)
  } catch (error) {
    sendError(res, 500, "Error al obtener el libro")
  }
}

export { getAllBooks, getBook }

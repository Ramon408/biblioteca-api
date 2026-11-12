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

const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author, publishedYear, genre, available } = req.body
    const newBook = await Book.create({ title, author, publishedYear, genre, available })
    sendSuccess(res, 201, "Libro creado", newBook)
  } catch (error: any) {
    if (error.code === 11000) {
      return sendError(res, 409, "Ya existe un libro con ese titulo")
    }
    if (error.name === "ValidationError") {
      return sendError(res, 400, "Faltan datos obligatorios o son invalidos")
    }
    sendError(res, 500, "Error al crear el libro")
  }
}

export { getAllBooks, getBook, addBook }

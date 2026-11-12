import { Router } from "express"
import { getAllBooks, getBook, addBook, updateBook } from "../controllers/bookController"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBook)
bookRouter.post("/", addBook)
bookRouter.patch("/:id", updateBook)

export default bookRouter

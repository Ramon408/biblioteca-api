import { Router } from "express"
import { getAllBooks, getBook, addBook } from "../controllers/bookController"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBook)
bookRouter.post("/", addBook)

export default bookRouter

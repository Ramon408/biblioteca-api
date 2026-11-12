import { Router } from "express"
import { getAllBooks, getBook } from "../controllers/bookController"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBook)

export default bookRouter

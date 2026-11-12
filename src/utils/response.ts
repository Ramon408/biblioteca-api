import { Response } from "express"

const sendSuccess = (res: Response, status: number, message: string, data: any = null) => {
  return res.status(status).json({ success: true, message, data })
}

const sendError = (res: Response, status: number, message: string) => {
  return res.status(status).json({ success: false, message, data: null })
}

export { sendSuccess, sendError }

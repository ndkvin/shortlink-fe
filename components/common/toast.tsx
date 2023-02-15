import { toast } from "react-toastify"

export const success = (message: string) => toast.success(message, {
  theme: "dark"
})

export const error = (message: string) => toast.error(message, {
  theme: "dark"
})
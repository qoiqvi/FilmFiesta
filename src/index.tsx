import { router } from "./app/providers/Router/router"
import "./app/styles/index.scss"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"

const container = document.getElementById("root")
const root = createRoot(container as HTMLElement)
root.render(<RouterProvider router={router} />)

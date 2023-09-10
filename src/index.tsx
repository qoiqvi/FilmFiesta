import "./app/styles/index.scss"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "app/providers/StoreProvider"
import { App } from "app/App"
import ErrorBoundary from "app/providers/ErrorBoundary"

const container = document.getElementById("root")
const root = createRoot(container as HTMLElement)
root.render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>,
)

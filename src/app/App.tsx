import { Suspense } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Navbar } from "widgets/Navbar"
import AppRouter from "./providers/Router/ui/AppRouter"

export const App = () => {
	return (
		<div className={classNames("app", {}, [])}>
			<Navbar />
			<div className="content-page">
				<AppRouter />
			</div>
		</div>
	)
}

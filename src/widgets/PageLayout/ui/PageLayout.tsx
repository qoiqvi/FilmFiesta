import { Outlet } from "react-router-dom"
import { Navbar } from "widgets/Navbar"

export const PageLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	)
}

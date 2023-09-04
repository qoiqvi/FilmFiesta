import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CartoonPage.module.scss"
import { memo } from "react"
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader"
import { Page } from "widgets/Page"

export interface CartoonPageProps {
	className?: string
}

const CartoonPage = memo((props: CartoonPageProps) => {
	const { className } = props
	return (
		// <DynamicModuleLoader>
		<div className={classNames(cls.CartoonPage, {}, [className])}>{/* <Page></Page> */}</div>
		// </DynamicModuleLoader>
	)
})

export default CartoonPage

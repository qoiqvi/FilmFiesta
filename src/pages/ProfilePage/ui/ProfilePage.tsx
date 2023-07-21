import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfilePage.module.scss"

import { memo } from "react"
import { Counter } from "shared/ui/Counter/Counter"

export interface ProfilePageProps {
	className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
	const { className } = props

	return (
		<div className={classNames(cls.ProfilePage, {}, [className])}>
			PROFILE PAGE
			<Counter />
		</div>
	)
}

export default memo(ProfilePage)

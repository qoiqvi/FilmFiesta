import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfilePage.module.scss"

import { memo } from "react"

export interface ProfilePageProps {
	className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
	const { className } = props

	return <div className={classNames(cls.ProfilePage, {}, [className])}>PROFILE PAGE</div>
}

export default memo(ProfilePage)

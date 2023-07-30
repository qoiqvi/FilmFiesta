import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfilePage.module.scss"
import { memo } from "react"
import { Page } from "widgets/Page"

export interface ProfilePageProps {
	className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
	const { className } = props

	return <Page className={classNames(cls.ProfilePage, {}, [className])}>PROFILE PAGE</Page>
}

export default memo(ProfilePage)

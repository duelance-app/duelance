/**********************************************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *********************************************************************************************************/

import { type NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { Avatar, Badge, Button, Divider, Menu } from "@mantine/core"
import type {
    UserAward,
    UserCertificate,
    UserCourse,
    UserEducation,
    UserExperience,
    UserProject,
    UserPublication,
    UserSkill,
    UserSocial,
    UserTag,
} from "@prisma/client"
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBriefcase,
} from "@tabler/icons-react"
import { useAtomValue } from "jotai"

import { api } from "@/lib/utils/api"
import { userAtom, type userAtomType } from "@/lib/utils/store"
import Me from "@/assets/me.jpg"

interface LongBoxType {
    type: "Experience" | "Education" | "Skills" | "Projects"
}

const temp = [1, 2, 3]

type additionalUserDataType =
    | {
          socials: UserSocial[]
          tags: UserTag[]
          experience: UserExperience[]
          projects: UserProject[]
          skills: UserSkill[]
          education: UserEducation[]
          certificates: UserCertificate[]
          courses: UserCourse[]
          awards: UserAward[]
          publications: UserPublication[]
      }
    | null
    | undefined

const Profile: NextPage = () => {
    const userData = useAtomValue(userAtom)
    const additionalUserData = api.user.getAdditional.useQuery({
        id: userData?.[0]?.id as string,
    }).data
    return (
        <main className="flex grow items-start justify-between gap-8 p-4">
            <AccountInfoBox
                userData={userData}
                additionalUserData={additionalUserData}
            />
            <LongBox type="Experience" />
        </main>
    )
}

const AccountInfoBox = ({
    userData,
    additionalUserData,
}: {
    userData: userAtomType
    additionalUserData: additionalUserDataType
}) => {
    return (
        <div className="grid w-[30%] max-w-[18rem] grid-flow-row items-center justify-center gap-4 rounded-2xl bg-white p-4 text-left">
            <Avatar radius={1000} className="h-auto w-full">
                <Image
                    src={userData?.[0]?.image as string}
                    alt="Avatar"
                    width={1000}
                    height={1000}
                    className="h-auto w-full"
                />
            </Avatar>
            <h1 className="flex flex-col">
                <span className="text-3xl font-bold">
                    {userData?.[0]?.name}
                </span>
                <span className="text-xl font-light text-gray-500">
                    <span className="font-semibold">a.k.a. </span>
                    {userData?.[0]?.userName}
                </span>
            </h1>
            <div className="flex items-center justify-evenly overflow-auto text-center">
                {additionalUserData?.tags.map((v, i) => {
                    return (
                        <Badge variant="outline" color="gray" size="sm" key={i}>
                            {v.value}
                        </Badge>
                    )
                })}
            </div>
            <p className="text-gray-600">{userData?.[0]?.bio}</p>
            <Menu radius="md">
                <Menu.Target>
                    <Button
                        variant="outline"
                        radius="md"
                        color="dark"
                        leftIcon={<IconBriefcase />}
                    >
                        {userData?.[0]?.status}
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item>Ready to Work</Menu.Item>
                    <Menu.Item>Ready to Work</Menu.Item>
                    <Menu.Item>Ready to Work</Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <p className="text-gray-500">
                <span className="font-medium">{userData?.[1]}</span> followers ·{" "}
                <span className="font-medium">{userData?.[2]}</span> following
            </p>
            <div className="flex items-center justify-evenly">
                {additionalUserData?.socials.map((v, i) => {
                    return (
                        <Link href={v.socialLink} key={i} target="_blank">
                            {(v.socialLink.startsWith(
                                "https://www.linkedin.com"
                            ) && <IconBrandLinkedin />) ||
                                (v.socialLink.startsWith(
                                    "https://github.com"
                                ) && <IconBrandGithub />) ||
                                (v.socialLink.startsWith(
                                    "https://twitter.com"
                                ) && <IconBrandTwitter />)}
                        </Link>
                    )
                })}
                {/* <IconBrandLinkedin />
                <IconBrandTwitter />
                <IconBrandGithub /> */}
            </div>
            <Button variant="outline" radius="xl" size="md" color="dark">
                Edit Profile
            </Button>
        </div>
    )
}

const LongBox = ({ type }: LongBoxType) => {
    return (
        <div className="flex h-full grow flex-col gap-8">
            <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-6">
                <h1 className="text-3xl font-semibold">
                    {(type === "Experience" && "Experience") ||
                        (type === "Education" && "Education") ||
                        (type === "Skills" && "Skills") ||
                        (type === "Projects" && "Projects")}
                </h1>
                <div className="flex flex-col gap-4">
                    {temp.map((_, i, a) => {
                        return (
                            <>
                                <div key={i} className="flex flex-row gap-2">
                                    <Image
                                        src={Me}
                                        alt="Company"
                                        className="h-20 w-auto place-self-center rounded-md"
                                    />
                                    <div>
                                        <p className="text-xl font-medium">
                                            Engineer
                                        </p>
                                        <p className="text-gray-500">
                                            Atlas Fellowship · July 2022 -
                                            Present
                                        </p>
                                        <p className="text-gray-800 ">
                                            Wrote articles until SBF killed the
                                            funding.
                                        </p>
                                    </div>
                                </div>
                                <Divider key={i + a.length} />
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile

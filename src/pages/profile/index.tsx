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
import { Avatar, Badge, Button, Divider, Menu } from "@mantine/core"
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBriefcase,
} from "@tabler/icons-react"

import { api } from "@/lib/utils/api"
import Me from "@/assets/me.jpg"

interface LongBoxType {
    type: "Experience" | "Education" | "Skills" | "Projects"
}

const temp = [1, 2, 3]

const Profile: NextPage = () => {
    return (
        <main className="flex grow items-start justify-between gap-8 p-4">
            <AccountInfoBox />
            <LongBox type="Experience" />
        </main>
    )
}

const AccountInfoBox = () => {
    const userData = api.user.get.useQuery({
        id: "clfptdb0400083b6li3k2qw7p",
    }).data
    return (
        <div className="grid w-[30%] max-w-[18rem] grow grid-flow-row items-start justify-between gap-4 rounded-2xl bg-white p-4 text-left">
            <Avatar radius={1000} className="h-auto w-full">
                <Image src={Me} alt="Avatar" />
            </Avatar>
            <h1 className="flex flex-col">
                <span className="text-3xl font-bold">{userData?.name}</span>
                <span className="text-xl font-light text-gray-500">
                    <span className="font-semibold">a.k.a. </span>
                    {userData?.userName}
                </span>
            </h1>
            <div className="flex items-center justify-evenly overflow-auto text-center">
                <Badge variant="outline" color="gray">
                    Full-Stack Dev
                </Badge>
                <Badge variant="outline" color="gray">
                    Tomfullery
                </Badge>
                <Badge variant="outline" color="gray">
                    Brrrr
                </Badge>
            </div>
            <p className="text-gray-600">{userData?.bio}</p>
            <Menu radius="md">
                <Menu.Target>
                    <Button
                        variant="outline"
                        radius="md"
                        color="dark"
                        leftIcon={<IconBriefcase />}
                    >
                        {userData?.status}
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item>Ready to Work</Menu.Item>
                    <Menu.Item>Ready to Work</Menu.Item>
                    <Menu.Item>Ready to Work</Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <p className="text-gray-500">
                <span className="font-medium">30</span> follower ·{" "}
                <span className="font-medium">32</span> following
            </p>
            <div className="flex items-center justify-evenly">
                <IconBrandLinkedin />
                <IconBrandTwitter />
                <IconBrandGithub />
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

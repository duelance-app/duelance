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
import { Avatar, Badge, Button, Menu } from "@mantine/core"
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBriefcase,
} from "@tabler/icons-react"

import Me from "@/assets/me.jpg"

const Home: NextPage = () => {
    return (
        <main className="flex grow items-start justify-between gap-8 p-4">
            <div className="grid w-[30%] max-w-[18rem] grow grid-flow-row items-start justify-between gap-4 rounded-2xl bg-white p-4 text-left">
                <Avatar radius={1000} className="h-auto w-full">
                    <Image src={Me} alt="Avatar" />
                </Avatar>
                <h1 className="flex flex-col">
                    <span className="text-3xl font-bold">Shreyans Jain</span>
                    <span className="text-xl font-light text-gray-500">
                        <span className="font-bold">a.k.a. </span>
                        DestroyerXyz
                    </span>
                </h1>
                <div className="flex items-center justify-evenly text-center">
                    <Badge variant="outline" color="gray">
                        Writing
                    </Badge>
                    <Badge variant="outline" color="gray">
                        Copywriting
                    </Badge>
                    <Badge variant="outline" color="gray">
                        SEO
                    </Badge>
                </div>
                <p className="text-gray-600">POTUS | Yep that’s right POTUS!</p>
                <Menu radius="md">
                    <Menu.Target>
                        <Button
                            variant="outline"
                            radius="md"
                            color="dark"
                            leftIcon={<IconBriefcase />}
                        >
                            Ready to Work
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
            <div className="flex h-full grow flex-col gap-8">
                <div className="h-40 w-full rounded-lg bg-white"></div>
                <div className="h-40 w-full rounded-lg bg-white"></div>
                <div className="h-40 w-full rounded-lg bg-white"></div>
                <div className="h-40 w-full rounded-lg bg-white"></div>
            </div>
        </main>
    )
}

export default Home

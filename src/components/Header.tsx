/**********************************************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *********************************************************************************************************/

import Image from "next/image"
import { ActionIcon, Avatar } from "@mantine/core"
import { IconBell, IconSearch } from "@tabler/icons-react"

import Logo from "@/assets/logo.svg"
import Me from "@/assets/me.jpg"

const Header = () => {
    return (
        <header className="m-4 flex h-14 items-center justify-between rounded-lg bg-white px-8 py-2">
            <Image src={Logo} alt="Duelance" className="h-full w-auto" />
            <div className="flex items-center gap-2">
                <ActionIcon>
                    <IconSearch />
                </ActionIcon>
                <ActionIcon>
                    <IconBell />
                </ActionIcon>
                <Avatar radius="xl">
                    <Image src={Me} alt="Avatar" fill />
                </Avatar>
            </div>
        </header>
    )
}

export default Header

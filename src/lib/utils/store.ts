/**********************************************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *********************************************************************************************************/

import type { Social, User } from "@prisma/client"
import { atom } from "jotai"

const userAtom = atom<
    | [
          user: User | null,
          followerCount: number,
          followingCount: number,
          socials: Social[]
      ]
    | undefined
>(undefined)

export { userAtom }

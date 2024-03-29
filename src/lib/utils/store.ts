/**********************************************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *********************************************************************************************************/

import { atom } from "jotai"

type userAtomType =
    | [
          {
              id: string
              name: string
              email: string
              image: string | null
              bio: string | null
              status: string | null
              userName: string
          } | null,
          number,
          number
      ]
    | undefined

const userAtom = atom<userAtomType>(undefined)

export { userAtom, type userAtomType }

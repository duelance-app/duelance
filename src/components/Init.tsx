import { useSetAtom } from "jotai"
import { useSession } from "next-auth/react"

import { api } from "@/lib/utils/api"
import { userAtom } from "@/lib/utils/store"

const Init = () => {
    const setUser = useSetAtom(userAtom)
    const userId = useSession().data?.user?.id
    const data = api.user.getBasic.useQuery({
        id:
            (process.env.NODE_ENV === "production" && userId) ||
            "clfthvbq70000l208ql1r1536",
    }).data
    setUser(data)
    return null
}

export default Init

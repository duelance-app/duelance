import { useSetAtom } from "jotai"
import { useSession } from "next-auth/react"

import { api } from "@/lib/utils/api"
import { userAtom } from "@/lib/utils/store"

const Init = () => {
    const setUser = useSetAtom(userAtom)
    console.log(useSession().data?.user?.id)
    setUser(api.user.get.useQuery({ id: useSession().data?.user?.id }).data)
    return null
}

export default Init

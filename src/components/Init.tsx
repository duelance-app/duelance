import { useSetAtom } from "jotai"
import { useSession } from "next-auth/react"

import { api } from "@/lib/utils/api"
import { userAtom } from "@/lib/utils/store"

const Init = () => {
    const setUser = useSetAtom(userAtom)
    // TODO: Change id to useSession().data?.user?.id
    setUser(api.user.get.useQuery({ id: "clfptdb0400083b6li3k2qw7p" }).data)
    return null
}

export default Init

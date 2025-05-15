
import { getServerSession } from "next-auth"
import { authOptions } from "./auth-config"

export const getUserSession = async () => {
    const session = await getServerSession(authOptions)

    return session?.user ?? null
}
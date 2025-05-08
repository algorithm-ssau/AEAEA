import NextAuth, { AuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hashSync } from "bcrypt";
import { prisma } from "@/lib/prisma";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                login: {
                    type: "text",
                    label: "login",
                },
                password: {
                    type: "text",
                    label: "password",
                },
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                const values = {
                    login: credentials.login,
                };
                const findUser = await prisma.user.findFirst({
                    where: values,
                });
                if (!findUser) {
                    return null;
                }

                // const isPasswordValid = await compare(
                //     credentials.password,
                //     findUser.password
                // );
                const isPasswordValid =
                    credentials.password === findUser.password;

                if (!isPasswordValid) {
                    return null;
                }
                return {
                    id: String(findUser.id),
                    login: findUser.login,
                };
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account }) {
            try {
                if (account?.provider === "credentials") {
                    return true;
                }
                if (!user.login) {
                    return false;
                }                
                return true;
            } catch (error) {
                console.error("Error signIn", error);
                return false;
            }
        },
        async jwt({ token }) {
            if (!token.login) {
                return token;
            }
            const findUser = await prisma.user.findFirst({
                where: {
                    login: token.login,
                },
            });
            if (findUser) {
                token.id = String(findUser.id);
                token.login = findUser.login;
            }

            return token;
        },
        session({ session, token }) {
            if (session?.user) {
                session.user.id = token.id;
            }
            return session;
        },
    },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

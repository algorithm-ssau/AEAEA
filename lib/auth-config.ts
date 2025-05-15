// lib/auth-config.ts
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        login: { label: "Login", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { login: credentials.login }
        });

        if (!user) return null;
        if (credentials.password !== user.password) return null;

        return {
          id: String(user.id),
          login: user.login
        };
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.login = user.login;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.login = token.login as string;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" }
};
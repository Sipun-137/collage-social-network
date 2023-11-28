type UserType = {
    name: string,
    password: string,
    email: string,
    role: string
}
import type { NextAuthOptions, User } from 'next-auth';
import GithubProvider from 'next-auth/providers/github'
import CredentialsProviders from "next-auth/providers/credentials"
import { GithubProfile } from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import connect from "@/dbconfig/dbConfig";
import Users from "@/models/UserModel"
connect()
export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            profile(profile: GithubProfile) {
                console.log(profile)
                return {
                    ...profile,
                    role: profile.role ?? "user",
                    id: profile.id.toString(),
                    image: profile.avatar_url
                }
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }), GoogleProvider({
            profile(profile: GoogleProfile) {
                console.log(profile)
                return {
                    ...profile,
                    role: profile.role ?? "user",
                    id: profile.sub.toString(),
                    image: profile.picture
                }
            },
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProviders({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email:",
                    type: "email",
                    placeholder: "your email"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "password"
                }
            },
            async authorize(credentials) {
                // const user = { id: "42",email:"test@gmail.com", name: "test", password: "test", role: "admin" }
                const UserObj: any = await Users.findOne({ email: credentials?.email });
                if (credentials?.email === UserObj?.email && credentials?.password === UserObj?.password) {
                    console.log(UserObj)
                    return UserObj;
                } else {
                    return null;
                }
            }

        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            return session
        }
    }
}
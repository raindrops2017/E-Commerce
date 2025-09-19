import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import { jwtDecode } from "jwt-decode"

interface DecodedToken {
  id?: string
  [key: string]: unknown
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },


  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })

        const payload = await response.json();
        console.log("API payload:", payload);

        if (payload.message === "success" && payload.token) {
          const decodedToken: {id:string} = jwtDecode(payload.token)

          return {
           id: decodedToken.id,
           user: payload.user,
           token: payload.token
          }
        } else {
          throw new Error(payload.message || "Wrong credentials")
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user?.user,
          token.token = user.token
      }
      return token
    },

    async session({ session, token }) {
      session.user = token.user;
      return session
    },
  },

};



/* eslint-dusable*/
import { NextAuth, User } from "next-auth"
import type { JWT } from "next-auth/jwt"



declare module "next-auth" {
  interface User {
    user: {
      name: string,
      email: string,
      role: string
    };
    token: string;
  }

  interface Session {
    user: User['user'];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends User {
    idToken?: string
  }
}
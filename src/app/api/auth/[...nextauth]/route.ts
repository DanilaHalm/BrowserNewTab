import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  secret: "secret",
  callbacks: {
    async signIn({ user }) {
      return true
      }
    },
  
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

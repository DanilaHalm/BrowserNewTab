import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "313786689650-lbfo2u8la0ngqgo05q0h5t3p3uccjeab.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "secret",
  callbacks: {
    async signIn({ user }) {
      return true
      }
    },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

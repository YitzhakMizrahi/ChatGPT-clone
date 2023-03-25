import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization:
        'https://accounts.google.com/o/oauth2/auth?prompt=select_account',
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);

import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { callApi } from 'utils';
import type { CallApiResponse } from 'utils/src/api';

const GOOGLE_CLIENT_ID =
  '311687047905-ns4v77t6ktatvtv5khar5hsj7pm3p5tb.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const googleProvider = GoogleProvider({
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
});

interface CredentialInput {
  email: string;
  password: string;
}

const credentialProvider = Credentials({
  name: 'Credentials',
  credentials: {
    email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
    password: { label: 'Password', type: 'password' },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async authorize(credentials: CredentialInput, _req): Promise<any> {
    const data: CallApiResponse = await callApi({
      method: 'POST',
      endpoint: `/auth/login`,
      body: credentials,
    });

    if (!data.error) {
      return credentials;
    }

    throw new Error(data.errorMessage);
  },
});

const handler = NextAuth({
  providers: [googleProvider, credentialProvider],
  secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'google') {
        const data: CallApiResponse = await callApi({
          method: 'POST',
          endpoint: `/auth/loginGoogle`,
          body: { ...account, ...profile },
        });

        return !data.error;
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };

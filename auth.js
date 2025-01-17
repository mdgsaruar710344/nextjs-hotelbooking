import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import { dbConnect } from "./app/services";
import { getUserByEmail } from "./app/queries";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./app/lib";

export const {
  handlers:{GET,POST},
  auth,
  signIn,
  signOut
}=NextAuth({
  adapter: MongoDBAdapter(client),
  session:{
    strategy:'jwt'
  },
  trustHost:true,
  providers:[
    CredentialsProvider({
      credentials:{
        email:{},
        password:{}
      },
      async authorize(credentials){
        if (credentials==null) {
          return null;
        }
        else {
          await dbConnect();
         const user= await getUserByEmail(credentials?.email);
         console.log('user before authorisation',user);
         if (user?.email) {
                if (user.password==credentials.password) {
                  console.log('credentials email and password', credentials.email,credentials.password);
                  return user;
                }
                else {
                  throw new Error('Credentials did not match!');
                }
         }else{
          throw new Error('No user found!')
         }
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ]
});
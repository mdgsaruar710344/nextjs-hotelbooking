import { auth } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session=await auth();
  const user=session?.user;
  return (
   <div>
    Home Page
    {user && (<>User: {user.name},
    <br></br>
    Email:
    {user.email} </>)}
   </div>
  );
}

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function BookingsPage() {
  const session=await auth();
  const user=session?.user;
   if (!session) {
    redirect('/login')
  }
  else {
    return (
      <div>
         Bookings Page!
         {user && user.email}
      </div>
    );
  }

}


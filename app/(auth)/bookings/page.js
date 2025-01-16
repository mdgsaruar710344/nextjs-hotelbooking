import { auth } from "@/auth";

export default async function BookingsPage() {
  const session=await auth();
  const user=session?.user;
  return (
    <div>
      Bookings Page!
      {user && user.email}
    </div>
  );
}


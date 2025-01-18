import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function PaymentProcessPage({searchParams}) {
  const hotelid=searchParams?.hotelid;
  const guestsnumber=searchParams?.guestsnumber;
  const checkin=searchParams?.checkin;
  const checkout=searchParams?.checkout;
  const session=await auth();
  const user=session?.user;
  if (!session) {
    redirect('/login')
  }
  else {
    return (

      <div>
        Payment Page:
        
      </div>
    );
  }

}


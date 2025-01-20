import { handleGetBookingById } from "@/app/actions";
import PdfDownload from "@/app/components/booking/PdfDownload";
import SuccessfulPaymentComponent from "@/app/components/booking/SuccessfulPaymentComponent";
import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SuccessfulPaymentPage({searchParams}) {
  const bookingId= searchParams?.bookingId;
 const session=await auth();
  const user=session?.user;
  if (!session) {
    redirect('/login')
  }
  else if(!bookingId){
return (
  <div>Please go to Bookings page to see all your bookings <Link href={'/bookings'}>All Bookings</Link> 
    <div>
      Or to make payment for a bookings, Please Reserve it <Link href={'/'}>See All Hotels</Link>
    </div>

  </div>
)
  }
  
    const bookingdata= await handleGetBookingById(bookingId);
const bookingStringified= JSON.stringify(bookingdata);
const booking=JSON.parse(bookingStringified);
console.log('booking object before passing',booking)
    return (
      <SuccessfulPaymentComponent booking={booking} ></SuccessfulPaymentComponent>
    );
  

}


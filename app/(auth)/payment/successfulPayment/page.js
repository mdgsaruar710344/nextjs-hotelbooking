import { handleGetBookingById } from "@/app/actions";
import PdfDownload from "@/app/components/booking/PdfDownload";
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
  else {
    const booking= await handleGetBookingById(bookingId);

    return (
      <div>
        Successful Payment Page.
        Total Payment: {booking?.totalPayment && booking.totalPayment}
        <br></br>
        Checkin: {booking?.checkin && booking.checkin}
        <br></br>

        Checkout: {booking?.checkout && booking.checkout}
        <br></br>

        Guests: {booking?.guestsnumber && booking.guestsnumber}
        <br></br>

       Booking ID: {booking?._id && booking._id}
     
     <div>
      <PdfDownload></PdfDownload>
     </div>
      </div>
    );
  }

}


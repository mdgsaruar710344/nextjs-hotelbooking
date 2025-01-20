import PdfDownload from "@/app/components/booking/PdfDownload";
import { getAllBookingByUserId, getUserByEmail } from "@/app/queries";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function BookingsPage() {
  const session=await auth();
  const user=session?.user;
   if (!session) {
    redirect('/login')
  }
  else {
    const userFromDB= await getUserByEmail(user?.email);
    const userId= userFromDB?._id;
    const bookings= await getAllBookingByUserId(userId);
    return (
      <div>
         Bookings Page!
         {user && user.email}
         <br></br>
         {bookings?.length>0 ? bookings.map((booking,idx)=> <div key={booking?._id} > Booking Serial : {idx+1}  <PdfDownload booking={booking} ></PdfDownload> </div> ) : <>Sorry! No bookings made yet!</> }
      </div>
    );
  }

}


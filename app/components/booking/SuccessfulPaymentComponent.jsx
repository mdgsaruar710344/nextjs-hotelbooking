"use client"

import PdfDownload from "./PdfDownload";

const SuccessfulPaymentComponent = ({booking}) => {
  const checkin=booking?.checkin;
  const checkout=booking?.checkout;
  
  const formattedBooking = {
    ...booking,
    checkin: checkin.toString(),
    checkout: checkout.toString(),
  };
  console.log('formatted',formattedBooking)
  return (
    <div>
      <div>
        Successful Payment Page.
        Total Payment: {formattedBooking?.totalPayment && formattedBooking.totalPayment}
        <br></br>
        {/* Checkin: {formattedBooking?.checkin && formattedBooking.checkin}
        <br></br>

        Checkout: {formattedBooking?.checkout && formattedBooking.checkout} */}
        <br></br>

        Guests: {formattedBooking?.guestsnumber && formattedBooking.guestsnumber}
        <br></br>

       Booking ID: {formattedBooking?._id && formattedBooking._id}
     
     <div>
      <PdfDownload booking={formattedBooking} ></PdfDownload>
     </div>
      </div>
    </div>
  );
};

export default SuccessfulPaymentComponent;
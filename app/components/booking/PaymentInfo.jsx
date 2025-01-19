"use client"

import { handleCreateBookingsAndPayment } from "@/app/actions";
import { getDateDifferenceFromTimestamps } from "@/app/utils/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const PaymentInfo = ({hotel,user}) => {
  const searchParams=useSearchParams();
  const router=useRouter();
  const [message,setMessage]=useState();
  const userEmail=user?.email;
  const hotelid=hotel?._id;


 const handlePaymentSubmit=async(e)=>{
      e.preventDefault();

      const checkinTimeStamp=searchParams?.get('checkin');
      const checkoutTimeStamp=searchParams?.get('checkout');
      const guestsnumber=searchParams?.get('guestsnumber');
      const days= getDateDifferenceFromTimestamps(checkinTimeStamp,checkoutTimeStamp);
      const ratePerDay= hotel?.lowRate;  
      const totalReserveCost= (days*ratePerDay);
      const fees= 9.99;
      const totalPayment= totalReserveCost+fees;
      const formData= new FormData(e.currentTarget);
      const formObject=Object.fromEntries(formData.entries());

      formObject.checkin=checkinTimeStamp;
      formObject.checkout=checkoutTimeStamp;
      formObject.email=userEmail;
      formObject.totalPayment=totalPayment;
      formObject.guestsnumber=guestsnumber;
      formObject.hotelId=hotelid;
      console.log(formObject);

      const booking=await handleCreateBookingsAndPayment(formObject);
     
      const bookingdata=JSON.parse(booking);
      console.log(bookingdata);
      if (bookingdata) {
        setMessage('Redirecting to confirmation Page')
        router.push(`/payment/successfulPayment?bookingId=${bookingdata?._id}`)
      }
      else {
        setMessage('Booking Failed!')
      }

}
  return (
    <div>
      <form onSubmit={handlePaymentSubmit}>

      <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Pay with American Express
            </h2>
            <div className="space-y-4">
              <input
              name="cardnumber"
                type="number"
                placeholder="Card number"
                className="w-full p-3 border rounded-lg"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                name="cardexpiration"
                  type="text"
                  placeholder="Expiration"
                  className="p-3 border rounded-lg"
                />
                <input
                name='ccv'
                  type="number"
                  placeholder="CVV"
                  className="p-3 border rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Billing address</h2>
            <div className="space-y-4">
              <input
              name="streetaddress"
                type="text"
                placeholder="Street address"
                className="w-full p-3 border rounded-lg"
              />
              <input
              name="suitenumber"
                type="number"
                placeholder="Apt or suite number"
                className="w-full p-3 border rounded-lg"
              />
              <input
              name="city"
                type="text"
                placeholder="City"
                className="w-full p-3 border rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                name="state"
                  type="text"
                  placeholder="State"
                  className="p-3 border rounded-lg"
                />
                <input
                name="zipcode"
                  type="number"
                  placeholder="ZIP code"
                  className="p-3 border rounded-lg"
                />
              </div>
            </div>
          </section>

          
          <button type="submit">
          Request to book

          </button>
          
      </form>
      <div>
        {message && message}
      </div>
    </div>
  );
};

export default PaymentInfo;
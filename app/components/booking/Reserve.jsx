
"use client"
import React, { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function Reserve() {
    const searchParams= useSearchParams();
   const params= useParams();
   const hotelid=params?.hotelid;
  const router=useRouter();
  const [formData, setFormData] = useState({
    guestsnumber: "",
    checkin: null,
    checkout: null,
  });

  const [showcheckinPicker, setShowcheckinPicker] = useState(false);
  const [showcheckoutPicker, setShowcheckoutPicker] = useState(false);
  const [error,setError]=useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (name, date) => {
    setError('')
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
  };

  const togglecheckinPicker = () => setShowcheckinPicker((prev) => !prev);
  const togglecheckoutPicker = () => setShowcheckoutPicker((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Currentparams= new URLSearchParams(searchParams);
    const currentTimeStamp= Date.now();
   const guestsnumber=formData.guestsnumber;
    const checkinTimeStamp=formData.checkin.getTime();
    const checkoutTimeStamp=formData.checkout.getTime();
  
    if (checkinTimeStamp>checkoutTimeStamp || checkinTimeStamp< currentTimeStamp) {
      setError('Select Checkout date carefully')
    }
    else {
      console.log("Form Data:", formData);
      if (guestsnumber && checkinTimeStamp && checkoutTimeStamp) {
        // Add individual parameters
        Currentparams.set('hotelid', hotelid);
        Currentparams.set('guestsnumber', guestsnumber);
        Currentparams.set('checkin', checkinTimeStamp);
        Currentparams.set('checkout', checkoutTimeStamp);
      
      } else {
        // Remove parameters if invalid
        Currentparams.delete("guestsnumber");
        Currentparams.delete("checkin");
        Currentparams.delete("checkout");
      }
      
      // Update the router with the modified params
      router.replace(`/payment?${Currentparams.toString()}`);
      
        }
    }

  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
        guestsnumber:
          <input
            type="number"
            name="guestsnumber"
            min={0}
            value={formData.guestsnumber}
            onChange={handleChange}
            required
          />
        </label>
      </div>
 
      <div style={{ position: "relative" }}>
        <label>
          Start Date:
          <input
            type="text"
            value={
              formData.checkin
                ? formData.checkin.toLocaleDateString()
                : "Select a date"
            }
            readOnly
            onClick={togglecheckinPicker}
            style={{ cursor: "pointer" }}
          />
        </label>
        {showcheckinPicker && (
          <div style={{ position: "absolute", zIndex: 10, background: "white" }}>
            <DayPicker
              mode="single"
              selected={formData.checkin}
              onSelect={(date) => {
                handleDateChange("checkin", date);
                setShowcheckinPicker(false); // Close after selecting
              }}
            />
          </div>
        )}
      </div>
      <div style={{ position: "relative" }}>
        <label>
          End Date:
          <input
            type="text"
            value={
              formData.checkout
                ? formData.checkout.toLocaleDateString()
                : "Select a date"
            }
            readOnly
            onClick={togglecheckoutPicker}
            style={{ cursor: "pointer" }}
          />
        </label>
        {showcheckoutPicker && (
          <div style={{ position: "absolute", zIndex: 10, background: "white" }}>
            <DayPicker
              mode="single"
              selected={formData.checkout}
              onSelect={(date) => {
                handleDateChange("checkout", date);
                setShowcheckoutPicker(false); // Close after selecting
              }}
            />
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
    {error && error}
    </>
  );
}


// import { useRouter, useSearchParams } from "next/navigation";
// import { DayPicker } from "react-day-picker";

// const Reserve = () => {
//   const searchParams= useSearchParams();
//   const router=useRouter();


//       const handleReservesubmit=(e)=>{
//         e.preventDefault();
//       const Currentparams= new URLSearchParams(searchParams);
//       const checkin=e.target.checkin.value;
//       const checkout=e.target.checkout.value;
//       const guestsnumber=e.target.guestsnumber.value;

//       if (checkin && checkin && guestsnumber) {
//            const reserveQuery={
//             checkin,checkout,guestsnumber
//            }
//         Currentparams.set('search',term)
//           }
//           else{
//             Currentparams.delete("search");
//           }
//           router.push(`/?${Currentparams.toString()}`);
//         }

//   return (
//     <div>
//        <div className="bg-white shadow-lg rounded-xl p-6 border">
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <span className="text-xl font-bold">$450</span>
//                 <span className="text-gray-600 ml-1">per night</span>
//               </div>
//               <div className="flex items-center">
//                 <i className="fas fa-star text-yellow-500 mr-1"></i>
//                 <span>5</span>
//               </div>
//             </div>

//             <div className="border rounded-lg mb-4">
//               <form onSubmit={handleReservesubmit}>
//               <div className="grid grid-cols-2 border-b">
//                 <input
//                 name='checkin'
//                   type="text"
//                   placeholder="Check in"
//                   className="p-3 border-r"
//                 />
//                 <input name='checkout' type="text" placeholder="Check out" className="p-3" />
//               </div>
//               <input name='guestsnumber' type="number" placeholder="Guests" className="w-full p-3" />
          
//               <button
//             type='submit'
//               className="w-full block text-center bg-primary text-white py-3 rounded-lg transition-all hover:brightness-90"
//             >
//               Reserve
//             </button>
//               </form>
       
//             </div>

//             <DayPicker  mode="single"/>

//             <div className="text-center mt-4 text-gray-600">
//               <p>You wont be charged yet</p>
//             </div>
//           </div>
//     </div>
//   );
// };

// export default Reserve;
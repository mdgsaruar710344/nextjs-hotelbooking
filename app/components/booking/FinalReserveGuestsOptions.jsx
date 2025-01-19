
"use client"
import React, { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";


export default function FinalReserveGuestsOptions() {
    const searchParams= useSearchParams();
   const params= useParams();
 
  const router=useRouter();
  const [formData, setFormData] = useState({
    guestsnumber: searchParams.get('guestsnumber') || '',
  
  });

 const [error,setError]=useState('');

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const Currentparams= new URLSearchParams(searchParams);  
    Currentparams.set('guestsnumber', formData.guestsnumber);
      
      // Update the router with the modified params
      router.replace(`/payment?${Currentparams.toString()}`);
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
 
     
      <button type="submit">Submit</button>
    </form>
    {error && error}
    </>
  );
}

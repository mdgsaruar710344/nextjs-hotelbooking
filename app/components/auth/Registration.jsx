"use client"
import { handleCreateUser } from '@/app/actions';
import { useRouter } from 'next/navigation';
import React from 'react';

const RegistrationComponent = () => {
 const router= useRouter();
  const handleRegistrationSubmit=async(e)=>{
e.preventDefault();
const formData=new FormData(e.currentTarget);
const userCreated= await handleCreateUser(formData);
console.log(userCreated);
if (userCreated) {
router.push('/login');

}
  }
  return (
    <div>
      <div className="justify-center">     
      <form onSubmit={handleRegistrationSubmit} className="space-y-4">
      <input
            name="name"
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
            name="email"
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          
            <input
            name="password"
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white rounded-full py-3 hover:bg-primary transition"
            >
              Continue
            </button>
          </form>
      
            
       
           
  
          
      
          </div>
    </div>
  );
};

export default RegistrationComponent;
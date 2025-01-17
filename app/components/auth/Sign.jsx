"use client"
import { getSessionWithRetry, handleCredentialsLogin, handleGoogleSignIn } from "@/app/actions";
import Link from "next/link";


import { useRouter } from "next/navigation";

const SignInComponent = () => {
 const router= useRouter();

  const handleCredentialsSumit=async(e)=>{
e.preventDefault();
const formData=new FormData(e.currentTarget);
const response= await handleCredentialsLogin(formData);
console.log('Response is :',response);


  if (response) {
    
    router.refresh();
    
    router.push('/bookings');
  }
}
  
  return (
    <div className="justify-center">
 
     <Link href={'/'} >
     Go to Home</Link>
      <div
        className="bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50"
      >
   
        <button
          id="closeModalBtn"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <i className="ph-x text-2xl"></i>
        </button>

   
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Log in to Hotel Booking
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Welcome back! Lets get you signed in.
          </p>
        </div>

      
        <div className="space-y-4 mb-4">
        <form action={handleGoogleSignIn}>
          <button type='submit'
            className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition"
          >
           
            Continue with Google
          </button>
          </form>
        
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

      
          <form onSubmit={handleCredentialsSumit} className="space-y-4">
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

      
        <div className="text-center text-sm text-gray-600">
          <p>
            Dont have an account?
            <a href="#" className="text-primary hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    

    </div>
  );
};

export default SignInComponent;
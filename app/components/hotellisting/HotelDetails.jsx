
import { getUserByEmail } from "@/app/queries";
import { auth } from "@/auth";
import Image from "next/image";


const HotelDetails =async ({hotel}) => {
const session=await auth();
const email= session?.user?.email;
const user= await getUserByEmail(email);
const userId= user?._id;


  return (
    <div>
      Hello
      <div className="col-span-9">
         
         <div className="space-y-4">
           <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
           {hotel?.thumbNailUrl &&              <Image src={hotel.thumbNailUrl} className="max-h-[162px] max-w-[240px]" alt=""  height={100} width={100}/>
 }
             <Image src="/assets/images/image-1.png" className="max-h-[162px] max-w-[240px]" alt=""  height={100} width={100}/>
             <div className="flex-1">
               <h2 className="font-bold text-lg">{hotel?.name && hotel.name}</h2>
               <p>📍 {hotel?.city && hotel.city}</p>
               <div className="flex gap-2 items-center my-4">
                 <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                   5.3
                 </div>
                 <span className="font-medium">Very Good</span>
             
               </div>
             </div>

             <div className="flex flex-col gap-2 items-end justify-center">
               <h2 className="text-2xl font-bold text-right">$124/night</h2>
               <p className=" text-right">Per Night for 4 Rooms</p>
             
              
            
             </div>
           </div>

        
         </div>
       </div>
    </div>
  );
};

export default HotelDetails;
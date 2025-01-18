
import { getUserByEmail } from "@/app/queries";
import { auth } from "@/auth";
import Image from "next/image";
import Reserve from "../booking/Reserve";




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

           <div>
            {/* Booking Card*/}

         <Reserve></Reserve>
        </div>
         </div>
          {/* Review Section*/}
         <div className="max-w-7xl mx-auto px-6 py-12 border-t">

 
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold">Reviews</h2>
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500 mr-2"></i>
            <span className="text-xl font-semibold">4.9</span>
            <span className="mx-2">·</span>
            <span className="text-gray-600">2 reviews</span>
          </div>
        </div>

        <a
          href="./ReviewModal.html"
          className="px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-100"
        >
          Write a Review
        </a>
      </div>

    
      <div className="grid grid-cols-2 gap-8">
     
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <Image
                src="/api/placeholder/48/48"
                alt="User avatar"
                className="w-full h-full object-cover"
                height={20}
                width={20}
              />
            </div>
            <div>
              <h4 className="font-medium">John Smith</h4>
              <p className="text-gray-500 text-sm">December 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Amazing stay! The villa exceeded our expectations. The private pool
            and beach access were highlights of our trip. Sarah was an excellent
            host, always responsive and helpful.
          </p>
        </div>

      
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <Image
                src="/api/placeholder/48/48"
                alt="User avatar"
                className="w-full h-full object-cover"
                height={20}
                width={20}
              />
            </div>
            <div>
              <h4 className="font-medium">Emma Wilson</h4>
              <p className="text-gray-500 text-sm">November 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Perfect location for a family vacation. The villa was spotlessly
            clean and well-maintained. The kitchen was fully equipped, and we
            loved cooking meals while enjoying the ocean view.
          </p>
        </div>
      </div>

    </div>
       </div>
    </div>
  );
};

export default HotelDetails;
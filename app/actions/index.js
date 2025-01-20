"use server"
import { auth, signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { getBookingById, getUserByEmail } from "../queries";

export async function handleGoogleSignIn()  {
  await signIn("google", {callbackUrl:'http://localhost:3000/'});
}

export async function handleCredentialsLogin(formData){
  const email=formData.get('email');
  const password=formData.get('password');
 const response= await signIn("credentials",{
    email:email,
    password:password,
    redirect:false
  })
  const session=await auth();
  console.log('user in session in action',session?.user);
  if (!response.error) {
    console.log('Login Successful');
    return response;

  }else{
    console.log(response.error.message);
    return response;
  }
}
export async function handleSignOut() {
  await signOut({callbackUrl:'http://localhost:3000/login'})
  
}
export async function handleCreateUser(formData){
  const email=formData?.get('email');
  const password=formData?.get('password');
  const name=formData?.get('name');
  const user={
    name,email,password
  };
  console.log('user data before POST in action',user);
  try {
    const response=await fetch('http://localhost:3000/api/auth/register',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
 const createdUser=await response.json();
    return createdUser;
  } catch (error) {
    console.error(error)
  }

}
export async function handleCreateBookingsAndPayment(formObject){
  const checkinTimestamp=formObject?.checkin;
  const checkoutTimestamp=formObject?.checkout;
  const guestsnumber=formObject?.guestsnumber;
  const totalPayment=formObject?.totalPayment;
  const hotelId=formObject?.hotelId;
  const email=formObject?.email;
  const user= await getUserByEmail(email);
  const userId=user?._id;
  const booking={
    checkinTimestamp,checkoutTimestamp,guestsnumber,totalPayment,hotelId,userId
  };
  console.log('booking data before POST in action',booking);
  try {
    const response=await fetch('http://localhost:3000/api/auth/booking',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(booking)
    })
 const createdBooking=await response.json();
    return JSON.stringify(createdBooking);
  } catch (error) {
    console.error(error)
  }

}
export async function refreshPage(){
  revalidatePath('/bookings'); 
}
export async function handleHotelSearch(term){
const foundHotels= await getHotelBySearch(term);
return foundHotels;
}
export async function handleGetBookingById(bookingId){
  const booking= await getBookingById(bookingId); 
return booking;
}
// export async function handlePdfGeneration(booking){
//   // const checkin=booking?.checkin;
//   // const checkout=booking?.checkout;

//   console.log('booking object in handlePdfGeneration',booking)
//   const guestsnumber=booking?.guestsnumber;
//   const hotelId=booking?.checkin;
//   const userId=booking?.userId;
//   const bookingId=booking?._id;
//   const checkinDate = new Date(Number(booking?.checkin)).toLocaleDateString();
// const checkoutDate = new Date(Number(booking?.checkout)).toLocaleDateString();
//   const {renderToStream}=await import('@react-pdf/renderer');
//   const {Page,View,Text,Document,StyleSheet}=await import('@react-pdf/renderer');
  
//   const styles = StyleSheet.create({
//     page: { padding: 20 },
//     section: { margin: 10, padding: 10, border: '1px solid black' },
//   });
  

//   const MyPDFDocument = () => (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Hello, User  !</Text>
//           <Text>Checkin Time: .</Text>
//           <Text>Checkout Time: .</Text>
//           <Text>Hotel Id: .</Text>
//           <Text>Guests: .</Text>
//           <Text>Booking Id: .</Text>
//           <Text>This PDF was generated server-side using Server Actions.</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// const pdfStream= await renderToStream(<MyPDFDocument/>)

// console.log('pdf stream',pdfStream);

//   return new Response(pdfStream,{
//     headers:{
//       'Content-Type':'application/pdf',
//        'Content-Disposition': 'attachment; filename="booking.pdf"'
//     }
//   })
// }





import HotelList from "../components/hotellisting/HotelList";


export default  function Home({searchParams}) {
  // const session=await auth();
  // const user=session?.user;
  const searchTerm=searchParams?.search;
  return (
   <div>
   <HotelList searchTerm={searchTerm}></HotelList>
   </div>
  );
}

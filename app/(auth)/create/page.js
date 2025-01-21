import CreateHotel from "@/app/components/management/CreateHotel";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function CreateHotelPage() {
  const session=await auth();
  const user=session?.user;
  if (!user) {
    redirect('/login');
  }
  else {
    return (
      <div>
        <CreateHotel></CreateHotel>
      </div>
    );
  }
 
}

export default CreateHotelPage;
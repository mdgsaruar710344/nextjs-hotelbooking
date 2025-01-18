import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function SuccessfulPaymentPage() {
 const session=await auth();
  const user=session?.user;
  if (!session) {
    redirect('/login')
  }
  return (
    <div>
      Successful Payment Page
    </div>
  );
}


import SignInComponent from "@/app/components/auth/Sign";
import Modal from "@/app/components/modal/Modal";

function LoginPage() {
  return (
    <div className="justify-center items-center">
     <Modal>
<SignInComponent/>
     </Modal>
     
    </div>
  );
}

export default LoginPage;
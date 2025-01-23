import RegistrationComponent from "@/app/components/auth/Registration";
import Modal from "@/app/components/modal/Modal";


function RegistrationPage() {
  return (
    <div className="justify-center items-center">
      <Modal>
        <RegistrationComponent/>
      </Modal>
    </div>
  );
}

export default RegistrationPage;
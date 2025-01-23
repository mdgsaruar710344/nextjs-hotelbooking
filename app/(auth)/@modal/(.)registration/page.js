import RegistrationComponent from "@/app/components/auth/Registration";
import Modal from "@/app/components/modal/Modal";


function RegistrationPage() {
  return (
    <div>
      <Modal>
        <RegistrationComponent/>
      </Modal>
    </div>
  );
}

export default RegistrationPage;
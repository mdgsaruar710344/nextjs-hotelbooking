import SignInComponent from "@/app/components/auth/Sign";

function LoginPage(props) {
  return (
    <div className="justify-center items-center">
      This is login Page!
      <SignInComponent></SignInComponent>
    </div>
  );
}

export default LoginPage;
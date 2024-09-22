import Heading from "../atoms/Heading";
import LoginForm from "../templates/LoginForm";

const LoginPage = () => {

  return (
    <div className="flex flex-col w-full items-center p-2 m-4">
      <Heading classes="text-3xl font-bold p-2" text="Login Page" />
      <LoginForm />
    </div>
  );
};

export default LoginPage;

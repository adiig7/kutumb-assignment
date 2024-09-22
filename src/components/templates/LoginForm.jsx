import { useAuth } from "../../hooks/useAuth";
import Button from "../atoms/Button";
import FieldInput from "../molecules/FieldInput";

const LoginForm = () => {
  const { username, setUsername, otp, setOTP, submitLoginForm } = useAuth();
  return (
    <div className="flex justify-center p-2 border-2 border-gray-600  mt-4 rounded-md">
      <div className="flex flex-col m-4 p-2">
        <form onSubmit={(e) => submitLoginForm(e)}>
          <div className="flex flex-col p-2">
            <FieldInput
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              id="username"
              type="text"
              placeholder="Enter username here..."
              classes="p-2 bg-gray-100 rounded-md border-none outline-none"
              value={username}
            />
          </div>
          <div className="flex flex-col p-2">
            <FieldInput
              onChange={(e) => {
                if (e.target.value.length <= 4) setOTP(e.target.value);
              }}
              label="OTP"
              id="otp"
              type="number"
              placeholder="Enter 4-digit OTP here..."
              classes="p-2 bg-gray-100 rounded-md border-none outline-none"
              value={otp}
            />
          </div>
          <div className="flex justify-center mt-4">
            <Button
              type="submit"
              classes="flex bg-black rounded-md px-8 py-2 text-white hover:text-black hover:bg-white text-center font-bold"
              label="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
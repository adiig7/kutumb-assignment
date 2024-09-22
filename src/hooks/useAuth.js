import { useState } from "react";
import { loginUser } from "../network/loginService";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [username, setUsername] = useState("");
  const [otp, setOTP] = useState("");
  const [token, setToken] = useState(() => {
    const tokenData = sessionStorage.getItem("tokenData");
    if (tokenData) {
      const { token, expiry } = JSON.parse(tokenData);
      if (new Date().getTime() < expiry) {
        return token;
      } else {
        sessionStorage.removeItem("tokenData");
        return null;
      }
    }
    return null;
  });

  const validateOTP = () => {
    if (otp.length !== 4 || isNaN(otp)) {
      toast.error("OTP must be a 4-digit number!");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setUsername("");
    setOTP("");
  };

  const submitLoginForm = async (event) => {
    event.preventDefault();
    if (validateOTP()) {
      try {
        const response = await loginUser(username, otp);
        if (response.token) {
          const expiry = new Date().getTime() + 60 * 60 * 1000;
          const tokenData = JSON.stringify({ token: response.token, expiry });
          sessionStorage.setItem("tokenData", tokenData);
          setToken(response.token);
          window.location.href = "/";
        }
        resetForm();
      } catch (error) {
        toast.error("Wrong OTP");
      }
    }
  };

  return {
    username,
    setUsername,
    otp,
    setOTP,
    submitLoginForm,
    token,
  };
};

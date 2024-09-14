import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogOutMutation } from "../../../../redux/api/auth";
import scss from "./LogOut.module.scss"

const LogOut: React.FC = () => {
  const [logOut, { isLoading }] = useLogOutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut().unwrap();
      console.log("Successful logout");

      // Clear tokens
      localStorage.removeItem("authTokens"); 

      navigate("/auth/sign-in");
    } catch (err) {
      if (err instanceof Error) {
        console.error("Ошибка при выходе из системы:", err.message);
      } else {
        console.error("Неизвестная ошибка при выходе из системы");
      }
    }
  };

  return (
    <div>
      <button className={scss.logout_button} onClick={handleLogout} disabled={isLoading}>
        {isLoading ? "Logging out..." : "Log Out"}
      </button>
    </div>
  );
};

export default LogOut;

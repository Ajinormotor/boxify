import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/useAuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Failed to logout");
      }

      const result = await res.json();
      if (!result) {
        throw new Error("Data not fetched");
      }

      localStorage.removeItem("user");
      setAuthUser(null);
      toast.success("Logged out successfully");
      console.log("Logged out successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;

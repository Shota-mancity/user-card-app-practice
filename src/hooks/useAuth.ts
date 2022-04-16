import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        if (res.data) {
          const isAdmin=res.data.id===10 ? true: false;
          setLoginUser({...res.data, isAdmin});
          showMessage({ title: "Login succeeded", status: "success" });
          navigate("/home");
        } else {
          showMessage({ title: "User could not find", status: "error" });
          setLoading(false);
        }
      })
      .catch(() => {
        showMessage({ title: "Cannot login", status: "error" });
        setLoading(false);
      });
  }, []);

  return { login, loading, setLoginUser };
};

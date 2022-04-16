import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  // 初期値を設定しないとundefinedとなるため、[]を設定
  // 取得データに型を付与したため、データを入れるStateにも同じ型を付与
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  const fetchUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(() =>
        showMessage({ title: "failed to fetch user info", status: "error" })
      )
      .finally(() => setLoading(false));
  }, []);
  return { fetchUsers, users, loading };
};

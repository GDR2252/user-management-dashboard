import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "../types";

export const useUserService = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [maxUserId, setMaxUserId] = useState<number>(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        setError("Fail to Fetch Data");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const addNewUser = (newUser: Omit<User, "id">) => {
    const userWithId: User = {
      ...newUser,
      id: maxUserId + 1,
    };
    setUsers((prevUsers) => [...prevUsers, userWithId]);
    setMaxUserId((prevMaxId) => prevMaxId + 1);
  };

  return {
    users,
    loading,
    error,
    addNewUser,
  };
};

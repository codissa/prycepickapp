import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = (query) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchUsers( );
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setIsLoading(false);
    console.log(response);
    // setUsers(users.concat(response.data.results));
    // users.map(user=> user.isFavorite=false);

  }

  return { users, isLoading, fetchUsers };
};

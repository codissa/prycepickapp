import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = (query) => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchUsers( );
  }, []);
  const [url,setUrl] = useState("http://ec2-18-157-180-237.eu-central-1.compute.amazonaws.com:8080/Search/GetJson/")

  async function fetchUsers() {
    //debugger;
    let searchQuery;
    setIsLoading(true);
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.headers.get['Access-Control-Allow-Origin']= '*';
    searchQuery= url + query;
    console.log(searchQuery);
    const response = await axios.get(searchQuery, { timeout: 50000 });
    // setIsLoading(false);
    console.log(response);
    setUsers(response.data);

  }

  return { users, isLoading, fetchUsers };
};

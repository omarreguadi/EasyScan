import { useState, useEffect } from "react";
import API from "../helpers/API";

export const useFetch = (postId="", all=false) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = {}
        setIsLoading(true);
        if(all === true) {res = await API.get(`/posts/all`)}
        else { res = await API.get(`/posts/${postId}`) }
        setResponse(res);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [postId, all]);
  return { response, isLoading };
};



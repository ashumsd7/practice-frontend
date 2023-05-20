import { useEffect, useState } from "react";

const useGetTime = () => {
  const [data, setData] = useState();

  const getData = async () => {
    setTimeout(() => {
      setData("THIS IS THE DATA");
    }, 5000);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export default useGetTime;

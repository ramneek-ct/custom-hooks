import React, { useEffect, useState } from "react";
import useFetch from "../useFetch/useFetch";
import "./Loader.css";

export default function Loader() {
  const [loader, setLoader] = useState(null);

  const api = useFetch("https://jsonplaceholder.typicode.com/todos");

  useEffect(() => {
    setLoader(api);
  }, [api]);

  return (
    <>
      {loader == null ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {loader.map((data) => {
            return <li key={data.id}> {data.title} </li>;
          })}
        </ul>
      )}
    </>
  );
}

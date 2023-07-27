import { useState, useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url, "url");

  useEffect(() => {
    apiTest();
  }, []);

  const Access_key = import.meta.env.VITE_APP_TMBD_API_KEY;

  const apiTest = () => {
    fetchDataFromApi(`/movie/popular?api_key=${Access_key}`).then((res) => {
      console.log(res, "popular");
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <>
      <div className="App">
        <p className="text-3xl text-white">{url?.tottal_pages}</p>
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Footer from "./components/Footer";
import Header from "./components/header/Header";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url, "url");

  useEffect(() => {
    featchApiConfig();
    genresCall();
  }, []);

  const Access_key = import.meta.env.VITE_APP_TMBD_API_KEY;

  const featchApiConfig = () => {
    fetchDataFromApi(`/configuration?api_key=${Access_key}`).then((res) => {
      console.log(res, "popular");
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(
        fetchDataFromApi(`/genre/${url}/list?api_key=${Access_key}`)
      );
    });

    const data = await Promise.all(promises);
    console.log(data, "genres");
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    console.log(allGenres, "allGenres");
    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

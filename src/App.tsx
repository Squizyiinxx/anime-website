import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Manga,Movie,DetailsAnime, SearchByGenre } from "./pages";
import { Footer, LoadingScreen, Navbar } from "./component";
import { useState, useEffect } from "react";



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <Router>
      {isLoading && <LoadingScreen />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/details/:id" element={<DetailsAnime />} />
        <Route path="/searchByGenre" element={<SearchByGenre/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

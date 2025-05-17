import { useState } from "react";
import MainNavbar from "../Components/Navbar";
import BoardCarousel from "../Components/Carousel";
import TopMovies from "./TopMovies";
import MovieGenre from "../Components/MovieGenre";
import Footer from "../Components/Footer";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase()); // Update search query in state
  };

  return (
    <>
      <MainNavbar onSearch={handleSearch} />
      <BoardCarousel />
      <TopMovies searchQuery={searchQuery} /> {/* Pass search query to TopMovies */}
      <MovieGenre searchQuery={searchQuery} /> {/* Pass search query to MovieGenre */}
      <Footer />
    </>
  );
}

export default Dashboard;

import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Requests"

function HomeScreen() {
  return (
    <div className="homScreen">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargrRow
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixTrending}
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixTopRated}
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixActionMovies}
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixComedyMovies}
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixHorrorMovies}
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixRomanceMovies}
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixDocumentaries}
      />
    </div>
  );
}

export default HomeScreen;

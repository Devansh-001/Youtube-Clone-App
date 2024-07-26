import React, { useState, useEffect } from "react";
import { SearchBar, VideoDetail, VideoList } from './Components';
import youtube from './api/youtube';
import './App.css'

function App() {

  let [videos, setvideos] = useState([]);
  let [selectedVideo, setselectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 5,
        q: searchTerm,
        key:[ADD YOUR KEY HERE],
      }
    });
    console.log(response);
    setvideos(response.data.items);
    setselectedVideo(response.data.items[0]);

  }
  const onVideoSelect = (video) => {
    setselectedVideo(video);
  }
  useEffect(() => {
    handleSubmit('Live News');
  }, [])



  return (
        
    <div style={{ margin: "2%", padding: "10px", background: "#636363", width: "fit-content" }}>

      <h1 style={{
        background: "red", padding: "10px", border: "4px solid", borderRadius: "20px", fontSize: "35px",
        fontFamily: "monospace"
      }}>Youtube Clone APP</h1>

      <SearchBar onFormSubmit={handleSubmit} />

      <div id="containor">

        <VideoDetail id="vidDetail" video={selectedVideo} />

        <hr id="midLine" color="black" style={{ width: "2px" }} />

        <VideoList videos={videos} onVideoSelect={onVideoSelect} />

      </div>

    </div>
  );
}

export default App;

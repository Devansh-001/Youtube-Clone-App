import React from 'react';
import { Typography } from '@mui/material';
import "../App.css"


const VideoDetail = ({ video }) => {
  let title = '';
  let desc='';
  if (!video) return <>
    <h1 style={{ border: "2px dashed" }}>Loading...</h1></>
  const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  if ((window).screen.width < 798) {
    for (let i = 0; i < 35; i++) {
      title += video.snippet.title[i];
    }
    for (let i = 0; i < 35; i++) {
      desc += video.snippet.description[i];
    }
  }
    else{
      title=video.snippet.title;
      desc=video.snippet.description;
    }
  return (

    <div id="vidDetail" style={{ height: "100vh", width: "100%" }}>

      <iframe style={{ border: "6px solid" }} src={vidSrc} frameBorder="0" width={"100%"} height={"100%"} title='Video Player'></iframe>

      <div style={{ background: "white", width: "100%", border: "6px solid", borderTop: "0px", height: "fit-content" }}>
        <span id="title" style={{ fontSize: "20px" }}>{title}-{video.snippet.channelTitle}</span>
        <Typography variant='subtitle2' fontWeight={"bolder"}>{video.snippet.channelTitle}</Typography>
        <span variant='subtitle2'>{desc}</span>

      </div>

    </div>

  )
}

export default VideoDetail

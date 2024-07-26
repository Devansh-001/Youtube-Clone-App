import React from 'react'
import { Paper } from "@mui/material"

const VideoItem = ({ video, onVideoSelect }) => {
    let title = '';
    if (video.snippet.title.length < 50) {
        title = video.snippet.title;
    }
    else {

        for (let i = 0; i < 50; i++) {
            title += video.snippet.title[i];
        }
    }
    console.log(title);

    return (

        <div style={{ height: "17%", margin: "1%",width:"80%",marginTop:"4%"}}>
            <Paper style={{
                display: 'flex', alignItems: 'center', cursor: 'pointer', border: "3px solid white", background: "black", gap: "2%"
            }} onClick={() => onVideoSelect(video)} >

                <img style={{ margin: '0.5%', width: "40%" }} src={video.snippet.thumbnails.medium.url} alt="Thumbnail" />

                <p style={{ color: "white", background: "black", height: "100%", fontFamily: "sans-serif" }}><b>{title}...</b></p>
            </Paper>
        </div >
    )

}

export default VideoItem

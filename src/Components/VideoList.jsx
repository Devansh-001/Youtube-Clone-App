import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />)

  console.log(listOfVideos);
  return (
    <div id="vidList">
      {listOfVideos}
    </div>
  )
}

export default VideoList

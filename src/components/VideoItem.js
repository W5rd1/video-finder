import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video);
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.high.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;

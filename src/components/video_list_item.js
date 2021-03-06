/**
 * Created by gjm19_000 on 6/2/2017.
 */
import React from 'react';

// es6 syntax for this {video}; equals to props.video when 'props' is the args
const VideoListItem = ({video, onVideoSelect}) => {

    // const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;

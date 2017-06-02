/**
 * Created by gjm19_000 on 6/2/2017.
 */
import React from 'react';

const VideoListItem = (props) => {
    return <li>Video: {props.video.etag}</li>;
};

export default VideoListItem;

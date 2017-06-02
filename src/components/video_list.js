/**
 * Created by gjm19_000 on 6/2/2017.
 */
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videos = props.videos;

    // loop: for loop is not recommended. Instead, use the map function. mapping a function to every item in array
    const videoItems = videos.map((video) => {
        return <VideoListItem key={video.etag} video={video}/>
        // etag could be an unique key for each video. This could also used in array as unique key to an item
        // you can find etag in the Youtube API result set: F12 -> NetWork -> search?part=blahblah... -> items -> etag
    });


    return (
        // add a class to ul. here we use 'className' instead of 'class'
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
        // when switch from function based to class based,  refactor 'props' to 'this.props'
        // when in a class, you can access 'this.props' anywhere inside a class


    );
};

export default VideoList;
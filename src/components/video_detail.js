/**
 * Created by gjm19_000 on 6/2/2017.
 */
import React from 'react';

const VideoDetail = ({video}) => {
    /*
    React usually tried to render itself at the same time of doing other things.
    For example, fetching data.
    Usually fetching data is slower than rendering. So there might be one or two second delay
    This will, usually, cause 'undefined exception'
    To solve this issue, we added a check statement here to validate the input. Make sure when it fetched and passed the
    correct data to our functions.

    For example. The video will not finish fetching before the rendering is finished.
    In the rendering function in index.js, we call this VideoDetail to display the first video in result list.
    Since it is not finishing fetching, the list is empty. So actually it passed a 'Undefined' value to VideoDetail.
    Of course we cannot display this, so will occur an issue same as mentioned above.

    A validation function for input check is necessary.
     */

    if (!video) {
        return <div> Loading... </div>;
    }

    // craft video url
    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    // same as
    // const url = `https://www.youtube.com/embed/${videoId}`;


    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-respsonsive-item" src={url} />
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;

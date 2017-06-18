/**
 * Created by gjm19_000 on 6/17/2017.
 */
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from'./video_list';

// give the path to import files. Don't need to do that for libraries sicne they are namespaces
// files are different, have to specify relative path
import SearchBar from './search_bar';
import VideoDetail from './video_detail';

const API_KEY = "AIzaSyApjaKBJVZnZaOJYe40YmOXhhogb6K3_NY";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo:null
        };

        this.videoSearch('react redux');
        // es6 syntax: when key and value names are the same, can use a simple condensed way to update value
        // so above the setState part could also be:
        // YTSearch({key: API_KEY, term: 'surfboards'}, function(videos) {this.setState({videos})});
    }

    videoSearch(term) {
        YTSearch(
            { key: API_KEY, term: term}, (data) => {
                this.setState({videos: data});
                this.setState({selectedVideo:data[0]});
                console.log(data);
            }
        );
    }

    // Call back functions involved...
    // functions defined here and passed as a param to child class
    render(){
        return(
            <div>
                <SearchBar onSearchTermChange={(term)=>this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

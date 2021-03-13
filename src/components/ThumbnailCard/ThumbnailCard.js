import './ThumbnailCard.css';
import ThumbnailPicture from '../../assets/yt.png';
import React, { Component } from 'react';

class ThumbnailCard extends Component {
    componentDidMount(){
        var container_width = document.getElementById("ThumbnailCard").offsetWidth;
        var pic_height = container_width * 0.618033989;
        document.getElementById("thumbnailPicture").style.height = pic_height + "px";
    }
    render() {
        return (
            <div id="ThumbnailCard">
                <a href="#" className="video-top-section" data-duration="12:24">
                    <img id="thumbnailPicture" src={ThumbnailPicture}></img>
                </a>
                <div className="video-bottom-section">
                    <a href="#">
                        <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                    </a>
                    <div className="video-details">
                        <a href="#" className="video-title">Video Title</a>
                        <a href="#" className="video-channel-name">Channel Name</a>
                        <div className="video-metadata">
                            <span>12K views</span>
                                <span id="dot">•</span>
                            <span>1 week ago</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThumbnailCard;


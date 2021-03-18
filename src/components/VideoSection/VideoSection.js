import './VideoSection.css';
import React, { Component } from 'react';
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard.js';

export default class VideoSection extends Component {
    render() {
        return (
            <div className="VideoSection">
                <div id="container">
                    <div><ThumbnailCard className="ThumbnailCard"></ThumbnailCard></div>
                    <div><ThumbnailCard className="ThumbnailCard"></ThumbnailCard></div>
                    <div><ThumbnailCard className="ThumbnailCard"></ThumbnailCard></div>
                    <div><ThumbnailCard className="ThumbnailCard"></ThumbnailCard></div>
                    <div><ThumbnailCard className="ThumbnailCard"></ThumbnailCard></div>
                    <div><ThumbnailCard className="ThumbnailCard"></ThumbnailCard></div>

                </div>
            </div>
        )
    }
}

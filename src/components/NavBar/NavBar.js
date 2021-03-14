import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import './NavBar.css';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import AdjustIcon from '@material-ui/icons/Adjust';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrwaer.js';


export default class NavBar extends Component {


    render() {
        return (
            <div className="NavBar">
                <div id="left-components">
                    <TemporaryDrawer ></TemporaryDrawer>
                </div>
                    <div id="center-components">
                        <SearchBar></SearchBar>
                    </div>
                <div id="right-components">
                    <IconButton className="icon-btn">
                        <AdjustIcon className="icons" id="upload-icon"></AdjustIcon>
                    </IconButton>
                    <IconButton className="icon-btn">
                        <NotificationsNoneIcon className="icons" id="bell-icon"></NotificationsNoneIcon>
                    </IconButton>
                    <img id="profile-icon" src="http://unsplash.it/36/36?gravity=center" />
                </div>
            </div>
        )
    }
}

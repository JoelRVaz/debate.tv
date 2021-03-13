import React, { Component } from 'react'
import './SearchBar.css';


export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <form>
                    <input id="search-bar" type="text" placeholder="Search.." name="search"></input>
                    <button type="submit"><i className="fa fa-search"></i></button>
                
                </form>
            </div>
        )
    }
}

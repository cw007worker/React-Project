import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import SearchBar from 'material-ui-search-bar';
import { view, params } from 'react-easy-stack';

const toolbarStyle = {
    maxWidth: 800,
    margin: '0 auto'
};
class NavBar extends Component {
    onSearch = (filter) => {
        params.search = filter;
    }
    render() {
        return (
            <AppBar>
                <Toolbar style={toolbarStyle}><SearchBar
                    onRequestSearch={this.onSearch}


                /></Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;

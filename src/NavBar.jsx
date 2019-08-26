import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import SearchBar from 'material-ui-search-bar';
class NavBar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar><SearchBar onChange={() => console.log('onChange')}
                    onRequestSearch={() => console.log('onRequestSearch')}

                /></Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;

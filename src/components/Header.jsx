import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const headerStyles = Object.freeze({
    linkStyles: Object.freeze({
        textDecoration: 'none',
        color: '#fff',
    }),
});

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <a  variant="h6"
                        href="https://www.linkedin.com/in/aditya-lather/"
                        style={headerStyles.linkStyles}
                    >
                        <p> Aditya Lather, 2K20/IT/09</p>
                    </a>
                </IconButton>
                <p color="inherit">
                <font size="+3">Sentiment Analyzer</font>
                </p>
            </Toolbar>
        </AppBar>
    );
}
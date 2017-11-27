import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <div className="navbar-brand">
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><a href="#">Premium</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Download</a></li>
                        <li>|</li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
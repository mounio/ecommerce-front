import React from 'react';
import Menu from './Menu';
import "../style.css";

const Layout = ({title = "Title", description = "Description", className, childeren }) => {
    return (
        <div >
            <Menu />
            <div className="jumbotron">
                <h2>{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{childeren}</div>
        </div>
    )
};

export default Layout;
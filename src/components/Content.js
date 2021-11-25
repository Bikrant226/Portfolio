import React from 'react';
import '../styles/content.css';
import {Link} from 'react-router-dom';
function Content() {
    return (
        <div className="content-wrapper">
           <h1>Hi I am Bikrant,</h1>
           <p>a learner and a full stack developer.</p>
           <Link className="links" to="/work">View work➤</Link>
           <Link className="links" to="/photos">View hobby➤</Link>
        </div>
    )
}

export default Content



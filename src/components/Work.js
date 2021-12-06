import React from 'react';
import '../styles/work.css';
import data from './Projects.json';
function Work() {
    return (
        <div className="work-wrapper">
            {data.map((e)=>(
                <div className="works"  key={e.id}>
                    <img src="/assets/vc.jpg" alt="img" />
                    <h1>{e.title}</h1>     
                    <p>{e.description}</p> 
                    <a href={e.urlToProject}>Visit github</a>
                </div>
            ))}      
        </div>
    )
}

export default Work

import React from 'react';
import '../styles/photos.css';
import {Link} from 'react-router-dom';

function Photos() {
    return (
        <div className="photos-wrapper">
            <p>
                I hope you've been <br/><br/>through my works and if not,you may visit <Link className="link" to="/work">here.</Link><br/><br/>
                    Well,wanna here a secret?? I'm a photographer of my own.😉
                
                Yes you read it right.In my spare time I prefer to capture.<br/>
                <br/>
                <br/>
                
                <b>
            
                <h1><u>Here are some of captured moments:</u></h1>
            </b>
            </p>
            
                <img src="/assets/buddha.png" alt="buddha" />
                <img src="/assets/ducks.png" alt="ducks" />
                <img src="/assets/hill.png" alt="hill" />
                <img src="/assets/plants.png" alt="plants" />
                
           
        </div>
    )
}

export default Photos

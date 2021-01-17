import React from 'react';
import './Intro.css';
import IntroIcons from './IntroIcons'


const Intro = (props) => {

    

    return (
        <div className="Intro">
            <div className="divider">
                <div className="divider-image"></div>
            </div>
            <div className="dividerText">
                <h1>Joshua Smith</h1>
                <h2>The Web Developer your company needs!</h2>
                <IntroIcons />
            </div>
        </div>
    )
}

export default Intro;

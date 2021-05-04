import React from 'react'
import Icons from './Icons';
import PhoneIcon from '../../Images/smartphone.png';
import ReactIcon from '../../Images/react.png';
import LightIcon from '../../Images/lamp.png';

const IntroIcons = () => {
    return (
        <div className="IntroIcons">
            <Icons Image={PhoneIcon} ImageText="Responsive Designer"/>
            <Icons Image={LightIcon} ImageText="Intuitive Thinker"/>
            <Icons Image={ReactIcon} ImageText="React Developer"/>
        </div>
    )
}

export default IntroIcons;

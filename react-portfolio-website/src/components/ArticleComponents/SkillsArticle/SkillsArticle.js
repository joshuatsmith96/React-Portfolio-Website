import React from 'react';
import './SkillsArticle.css';
import SkillCard from './SkillCard';
import PictureThing from '../../Images/checkmark.png';
//Importing Images
import HTMLIcon from '../../Images/Icons/html.png';
import CSSIcon from '../../Images/Icons/css.png';
import JSIcon from '../../Images/Icons/javascript.png';
import ReactIcon from '../../Images/react.png';

const SkillsArticle = () => {
    return (
        <div className="SkillsArticleContainer">
            <div className="SkillsArticle">
                <h1>Skills</h1>
                <div className="row">
                    <SkillCard Percent={95} Header={"HTML5"} Image={HTMLIcon}/>
                    <SkillCard Percent={86} Header={"CSS3"} Image={CSSIcon}/>
                    <SkillCard Percent={73} Header={"JavaScript"} Image={JSIcon}/>
                </div>

                <div className="row">
                    <SkillCard Percent={57} Header={"React"} Image={ReactIcon}/>
                    <SkillCard Percent={40} Header={"Boot Strap"} Image={PictureThing}/>
                    <SkillCard Percent={24} Header={"Other"} Image={PictureThing}/>
                </div>
            </div>
        </div>
    )
}

export default SkillsArticle;

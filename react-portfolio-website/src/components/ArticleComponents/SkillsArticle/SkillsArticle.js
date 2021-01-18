import React from 'react';
import './SkillsArticle.css';
import SkillCard from './SkillCard';
import PictureThing from '../../Images/checkmark.png';
//Importing Images
import HTMLIcon from '../../Images/Icons/html.png';
import CSSIcon from '../../Images/Icons/css.png';
import JSIcon from '../../Images/Icons/javascript.png';
import ReactIcon from '../../Images/react.png';
import BootIcon from '../../Images/Icons/bsimage.png';
import WindowIcon from '../../Images/Icons/word.png';
import ExcelIcon from '../../Images/Icons/excel.png';
import AccessIcon from '../../Images/Icons/access.png';
import PPIcon from '../../Images/Icons/powerpoint.png';
import GitIcon from '../../Images/Icons/github.png';
import AspIcon from '../../Images/Icons/asp.png';

const SkillsArticle = () => {
    return (
        <div className="SkillsArticleContainer">
            <div className="SkillsArticle">
                <h1>Skills</h1>
                <h2 className="SkillTitle">Web Development</h2>
                <div className="row">
                    <SkillCard Percent={95} Header={"HTML5"} Image={HTMLIcon}/>
                    <SkillCard Percent={86} Header={"CSS3"} Image={CSSIcon}/>
                    <SkillCard Percent={73} Header={"JavaScript"} Image={JSIcon}/>
                </div>

                <div className="row">
                    <SkillCard Percent={57} Header={"React"} Image={ReactIcon}/>
                    <SkillCard Percent={40} Header={"Boot Strap"} Image={BootIcon.png}/>
                    <SkillCard Percent={24} Header={"ASP.NET"} Image={AspIcon}/>
                </div>
                <h2 className="SkillTitle">Microsoft / Other</h2>
                <div className="row">
                    <SkillCard Percent={95} Header={"Word"} Image={WindowIcon}/>
                    <SkillCard Percent={89} Header={"PowerPoint"} Image={PPIcon}/>
                    <SkillCard Percent={80} Header={"Excel"} Image={ExcelIcon}/>
                </div>
                <div className="row">
                    <SkillCard Percent={70} Header={"Access"} Image={AccessIcon}/>
                    <SkillCard Percent={70} Header={"GitHub"} Image={GitIcon}/>
                </div>
            </div>
        </div>
    )
}

export default SkillsArticle;

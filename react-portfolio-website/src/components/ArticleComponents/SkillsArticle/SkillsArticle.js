import React from 'react'
import './SkillsArticle.css';
import SkillsIcon from '../SkillsArticle/SkillsIcon';
import htmlImage from '../../Images/Icons/html.png';
import cssImage from '../../Images/Icons/css.png';
import javascriptImage from '../../Images/Icons/javascript.png';
import wordImage from '../../Images/Icons/word.png';
import ppImage from '../../Images/Icons/powerpoint.png';
import excelImage from '../../Images/Icons/excel.png';
import accessImage from '../../Images/Icons/access.png';
import aspImage from '../../Images/Icons/asp.png';
import gitImage from '../../Images/Icons/github.png';
import reactImage from '../../Images/react.png';

const SkillsArticle = (props) => {

    return (
        <div className="SkillsArticle">
            <h1>{props.Header}</h1>
            <div className="Skills">
                <SkillsIcon
                Header="HTML"
                Image={htmlImage}
                ImageAlt="html image"/>
                <SkillsIcon
                Header="CSS"
                Image={cssImage}
                ImageAlt="css image"/>
                <SkillsIcon
                Header="Javascript"
                Image={javascriptImage}
                ImageAlt="javascript image"/>
                <SkillsIcon
                Header="MS Word"
                Image={wordImage}
                ImageAlt="word image"/>
                <SkillsIcon
                Header="MS Power Point"
                Image={ppImage}
                ImageAlt="Power Point image"/>
                <SkillsIcon
                Header="MS Excel"
                Image={excelImage}
                ImageAlt="Excel image"/>
                <SkillsIcon
                Header="MS Access"
                Image={accessImage}
                ImageAlt="Access image"/>
                <SkillsIcon
                Header="ASP.NET"
                Image={aspImage}
                ImageAlt=".net framework image"/>
                <SkillsIcon
                Header="GitHub"
                Image={gitImage}
                ImageAlt="git hub image"/>
                <SkillsIcon
                Header="React"
                Image={reactImage}
                ImageAlt="react image"/>

            </div>
        </div>
    )
}

export default SkillsArticle;

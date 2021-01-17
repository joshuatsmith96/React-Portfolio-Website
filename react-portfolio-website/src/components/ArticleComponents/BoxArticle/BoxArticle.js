import React from 'react'
import './BoxArticle.css';
import Bubble from './Box';

const BubbleArticle = () => {
    return (
        <div className="BoxArticle">
            <Bubble Header="New Header1" Text="New text 1"/>
            <Bubble Header="New Header2" Text="New text 2"/>
            <Bubble Header="New Header3" Text="New text 3"/>
        </div>
    )
}

export default BubbleArticle;
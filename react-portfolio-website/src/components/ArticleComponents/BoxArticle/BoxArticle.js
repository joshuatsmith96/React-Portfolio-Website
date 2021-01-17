import React from 'react'
import './BoxArticle.css';
import Bubble from './Box';

const BubbleArticle = () => {
    return (
        <div className="BoxArticle">
            <Bubble />
            <Bubble />
            <Bubble />
        </div>
    )
}

export default BubbleArticle;
import React, { Component } from 'react'
import './Nav.css';

class MobileNavIcon extends Component {

    i = 0;


    handleClick = () =>{

        if (this.i == 0){
            let mobnav = document.getElementsByClassName("MobileNavList")
            let nav = document.getElementsByClassName("Nav")
            mobnav[0].style.height="65%"
            mobnav[0].style.boxShadow="1px 1px 5px 1px"
            nav[0].style.boxShadow="none"
            this.i++
        } else if (this.i == 1){
            let mobnav = document.getElementsByClassName("MobileNavList")
            let nav = document.getElementsByClassName("Nav")
            mobnav[0].style.height="0px"
            mobnav[0].style.boxShadow="none"
            nav[0].style.boxShadow="1px 1px 5px 1px"
            this.i--
        }
    };


    render() {

        return (
                <div className="MobileNavIcon" onClick={this.handleClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
        )
    }
}

export default MobileNavIcon;



/*
<div className="MobileNavIcon" onClick={this.handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        */

import React, { useState } from 'react';
import './style.scss';
import Heart from "react-animated-heart";

export default class HomeCard extends React.Component{
    
    render(){
        return <div>
        <div className='box'>

            <img className='box-image' src={this.props.imgSrc}></img>

        </div>
        <div>{this.props.name}</div>
        <div className='bold'>{this.props.price}</div>
        <div>
        </div>

        </div>
    }
}



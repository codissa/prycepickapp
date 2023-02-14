import React, { useState } from 'react';
import './style.scss';
import HeartIcon from 'components/HeartIcon/HeartIcon';

export default class HomeCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
        };
    }
    render(){
        return <div>
        <div className='box'>

            <img className='box-image' src={this.props.imgSrc}></img>

        </div>
        <div>{this.props.name}</div>
        <div className='bold'>{this.props.price}
        <HeartIcon></HeartIcon></div>
        
        <div>

        </div>
        </div>


    }
}



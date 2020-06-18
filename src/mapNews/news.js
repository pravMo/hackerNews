import React from 'react';
import './news.css'

const news = (props) => {
    return (
    <p className='p'>
        <img className='img' src="/ws.png" alt='Warning Sign' /> 
        <li> TITLE: {props.title} </li>
        <li> DATE: {props.date.split('T')[0]} </li>
        <li> AUTHOR: {props.author} </li>
        <li> POINTS: {props.points} </li>
        <li> STORY: {props.sText === null ? "No Story" : props.sText} </li>
        <li> COMMENT: {props.cText === null ? "No Comment" : props.cText} </li>
        <li> VIEW LINK: <a href={props.url} target="_blank" rel="noopener noreferrer"> {props.url} </a> </li>
    </p>
    )
}

export default news
import React from 'react';
import './news.css'

const news = (props) => {
    const story = props.sText === null ? "No Story" : props.sText
    const comment = props.cText === null ? "No Comment" : props.cText
    const date = props.date.split('T')[0]
    return (
    <p className='p'>
        <img className='img' src="/ws.png" alt='Warning Sign' /> 
        <li> TITLE: {props.title} </li>
        <li> DATE: {date} </li>
        <li> AUTHOR: {props.author} </li>
        <li> POINTS: {props.points} </li>
        <li> STORY: {story} </li>
        <li> COMMENT: {comment} </li>
        <li> VIEW LINK: <a href={props.url} target="_blank" rel="noopener noreferrer"> {props.url} </a> </li>
    </p>
    )
}

export default news

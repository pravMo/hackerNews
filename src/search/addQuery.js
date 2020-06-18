import React from 'react';
import { connect } from 'react-redux';
import {addQuery} from '../actions/actions';
import './search.css';

const AddQuery = (props) => {

  const buttonClicked = () => {
    props.addQuery(props.query)
  }

  const handleFocus = (event) => {
    event.preventDefault()
      const listenEvent = event.currentTarget
    listenEvent.focus()
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      props.onSearch();
      buttonClicked()
    }
  }

  return (
    <div>
      <input 
        type='text'
        value={props.query} 
        onBlur={handleFocus}
        onChange={props.onInput}
        placeholder="Author's Full Name"
        className='input'
        onKeyPress={handleEnter} 
        />
      <button className='search' onClick={() => {props.onSearch(); buttonClicked()}}>
        SEARCH
      </button>
    </div>
  )
}

export default connect(null, {addQuery})(AddQuery)

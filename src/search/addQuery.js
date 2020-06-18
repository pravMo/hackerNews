import React from 'react';
import { connect} from 'react-redux';
import {addQuery} from '../actions/actions';
import './search.css';

const mapDispatchToProps = (dispatch, props) => ({
  buttonClicked: () => dispatch(addQuery(props.query))
})

const AddQuery = (props) => {

  const handleFocus = (event) => {
    event.preventDefault()
      const listenEvent = event.currentTarget
    listenEvent.focus()
  }

  const handleButton = () => {
    props.buttonClicked()
  }

  /* const buttonClicked = () => {
    props.addQuery(props.query)
  } SHORTCUT TO MAPDISPATCH */

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      props.onSearch();
      handleButton()
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
      <button className='search' onClick={() => {props.onSearch(); handleButton()}}>
        SEARCH
      </button>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(AddQuery)

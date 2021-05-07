import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Search.css'

export default function Search(props){

    return <>
        <input
            name='search'
            type='text'
            placeholder='search...'
            className='search'
            value={props.value}
            onChange={event => {
                props.onChange(event.currentTarget.value)
            }}
        />
    </>
}

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}
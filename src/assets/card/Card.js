import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export default function Card(props){

    return <>
        <div className='card'>
            <img className='card-avatar' src={props.avatar}/>
            <div className='card-title'>
                {props.title}
            </div>
            <div className='card-subtitle'>
                {props.subtitle}
            </div>
        </div>
    </>
}

Card.propTypes = {
    avatar: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
}
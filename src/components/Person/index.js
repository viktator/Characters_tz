import React, {Component} from 'react'
import PersonInfo from '../PersonInfo'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css'

function Person({ name, handleOpen, hair_color, mass, eye_color, height, isOpened }){

   const handleClick = () => {
        handleOpen(name)
    }

      return (
          <div className={'name'} onClick={handleClick}>
            {name}
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {isOpened && (
                    <PersonInfo
                        hair_color ={hair_color}
                        mass ={mass}
                        eye_color ={eye_color}
                        height ={height}
                    />
                )}
            </ReactCSSTransitionGroup>
        </div>
    )

}

export default Person
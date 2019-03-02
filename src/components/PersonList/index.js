import React from 'react';
import './style.css'
import PropTypes from 'prop-types';

export default function PersonList({ handleOpen, characters }) {

    return (
        <ul className={'list'}>
            {characters.map((person) => <li onClick={() => handleOpen(person.name)} key={person.name}>{person.name}</li>)}
        </ul>
    )
}

PersonList.propTypes = {
    handleOpen: PropTypes.func,
    characters: PropTypes.array
};
import React from 'react'
import './style.css'

function PersonInfo({height, hair_color, mass, eye_color}) {
    return (
        <div className={'inform'}>

            <table className={'characteristic'}>
                <tbody>
                    <tr>
                        <td>Height</td>
                        <td>{height}</td>
                    </tr>
                    <tr>
                        <td>Hair</td>
                        <td>{hair_color}</td>
                    </tr>
                    <tr>
                        <td>Mass</td>
                        <td>{mass}</td>
                    </tr>
                    <tr>
                        <td>Eye_color</td>
                        <td>{eye_color}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default PersonInfo
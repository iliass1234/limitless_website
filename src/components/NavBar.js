import React from 'react'

export default function NavBar() {
    return (
        <div style={{
            height: 70,
            width: '100%',
            backgroundColor: 'white',
            // borderBottom: '5px solid orange',
            display: 'flex',
            alignItems: 'center',

        }}>
            <a href='#' >
                <img style={{ margin: 10, width: 40, height: 50 }} src={require('../assets/logo.png')} alt={'limitless logo'} />
            </a>
        </div>
    )
}
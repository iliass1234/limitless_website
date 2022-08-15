import React from 'react'

export default function NavBar() {
    return (
        <div style={{
            height: 100,
            width: '100%',
            backgroundColor: 'white',
            borderBottom: '5px solid orange',
        }}>
            <img style={{ width: 100 }} src={require('../assets/logo.png')} alt={'limitless logo'} />
        </div>
    )
}
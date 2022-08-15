import React from 'react'

export default function NavBar() {
    return (
        <div style={{
            height: 70,
            width: '100%',
            backgroundColor: 'transparent',
            // borderBottom: '5px solid orange',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'

        }}>
            <a href='##' >
                <img style={{ margin: 10, width: 40, height: 50 }} src={require('../assets/logo.png')} alt={'limitless logo'} />
            </a>
            <div style={{ display: 'flex', gap: 45, justifySelf: 'end', backgroundColor: 'white', marginRight: 20 }}>
                <a href='##'><h3>اطلب تصميم</h3></a>
                <a href='##'><h3>خدماتنا</h3></a>
                <a href='##'><h3>من نحن</h3></a>
            </div>
        </div>
    )
}
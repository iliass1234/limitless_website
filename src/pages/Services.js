import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Services() {
    return (
        <>
            <NavBar />
            <main style={{ fontFamily: 'Almarai, sans-serif', textAlign: 'right', paddingRight: 15, }}>
                <h1>خدماتنا</h1>
            </main>
            <Footer />
        </>
    )
}
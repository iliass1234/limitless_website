import React from 'react'

export default function WideCard(props) {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            height: 'auto',
            width: '100%',
            backgroundColor: 'rgb(250,250,250)',
        }}>
            <div style={{
                backgroundColor: 'transparent',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                height: 'auto',
                width: '80%',
            }}>
                {props.children}
            </div>

        </div>
    )
}

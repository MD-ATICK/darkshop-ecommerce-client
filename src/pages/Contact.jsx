import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'

function Contact() {

    const location = useLocation()

    console.log({ location })

    return (
        <>
            <Header />
            <div>
                contact
            </div>
        </>
    )
}

export default Contact
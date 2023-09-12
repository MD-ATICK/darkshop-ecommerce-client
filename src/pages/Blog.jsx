import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

function Blog() {

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div>
                blog
                <button onClick={() => navigate('/contact', { state: { x: 'information' } })}>Nevigate to contact</button>
            </div>
        </>
    )
}

export default Blog
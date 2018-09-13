import React from 'react'
import { NavLink } from "react-router-dom"

const Page404 = () => (
    <p className={`lead text-center m-4`}>
        The question you are looking for does not exist. Please select another question
        {' '}
        <NavLink to='/'>here</NavLink>.
    </p>
)

export default Page404

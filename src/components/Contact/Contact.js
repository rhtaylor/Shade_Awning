import { any } from 'prop-types'
import React from 'react'
import NavBar from '../Nav/NavBar'

const Contact =({contact, title})=>{
    return(<div>
            <header className='contact arizona_sun'>
                <h1>{title}</h1>
            <NavBar />
            </header>
            <h3 className='justify-content-center shadow mx-3'>If you are interested in purcahse please email the specifics of how big, when, and any obsticles. Then call me on the phone.</h3>
            <h1 className='justify-content-center shadow mx-4'>email: {contact.email}</h1>
            <h1 className='justify-content-center shadow mx-4'>phone: {contact.phone}</h1>
           </div>)
}
export default Contact
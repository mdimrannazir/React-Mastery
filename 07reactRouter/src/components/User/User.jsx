import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userID } = useParams()
    return (
        <>
            <div className='text-center text-3xl bg-gray-600 text-white p-4 font-bold'>
                User: {userID}</div>
            <br />
            <div className='text-center text-3xl bg-gray-600 text-white p-4'>
                Change the url: website.com/user/<span className='text-orange-500'>giveAnyParamsHere</span>
                <br />
                Example url 1: website.com/user/<span className='text-orange-500'>Imran</span>
                <br />
                Example url 2: website.com/user/<span className='text-orange-500'>100</span>
            </div>
        </>


    )
}

export default User

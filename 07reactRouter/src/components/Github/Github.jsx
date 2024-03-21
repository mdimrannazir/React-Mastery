import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    // We can directly do with api calling, but we want the api call when a components changes, so for that we know, useEffect

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/mdimrannazir')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })


    }, [])

    return (
        <div>
            <h1 className='text-center text-3xl bg-slate-400 text-white p-3'>Using "useEffect", when components changes it will start fetching</h1>
            <br />
            <div className='text-center text-3xl bg-gray-600 text-white p-4 font-bold'>
                Github Followers: {data.followers}
                <img src={data.avatar_url} />
            </div>
        </div>
    )
}

export default Github

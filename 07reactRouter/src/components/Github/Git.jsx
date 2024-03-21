import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Git() {
    const data = useLoaderData()
    return (
        <div>
            <h1 className='text-center text-3xl bg-slate-400 text-white p-3'>Using React-Router-Dom "Loader" <br />
                when anyone hovers the link of Git, it will start fetching, it's optimization technique rather than useEffect
            </h1>
            <br />
            <div className='text-center text-3xl bg-gray-600 text-white p-4 font-bold'>
                Github Followers: {data.followers}
                <img src={data.avatar_url} />
            </div>
        </div>
    )
}

export default Git
export const githubInfos = async () => {
    const response = await fetch('https://api.github.com/users/mdimrannazir')
    return response.json()
}

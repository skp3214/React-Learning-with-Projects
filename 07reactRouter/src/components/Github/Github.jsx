import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/skp3214')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.followers);
    //             setdata(data);
    //         })
    // }, [])
    const data=useLoaderData();
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
                <img src={data.avatar_url} alt='git Picture' width={300} />
            </div>

        </>
    )
}

export default Github

export const gitHubLoader = async () => {
    const response = await fetch('https://api.github.com/users/skp3214');
    return response.json();
}
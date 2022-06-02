import React, { useState, useEffect } from 'react'

const LAUNCH_QUERY = `
{
    launchesPast(limit: 10) {
        id
        mission_name
      }
}
`
const App = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch("https://api.spacex.land/graphql/", {
            method: "post",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ query: LAUNCH_QUERY})
        })
            .then(response => response.json())
            .then(data => setLaunches(data.data.launchesPast))
    }, []);

    return (
        <>
        <h1>Space Launches</h1>
        <ul>
           {launches.map(launch => (
               <li key={launch.id}>
                   {launch.mission_name}
               </li>
           ))}
        </ul>
        </>
        
    )
}

export default App
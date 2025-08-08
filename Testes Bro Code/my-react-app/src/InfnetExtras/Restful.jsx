import { useState } from "react";

export default function Restful() {
    const [repos, setRepos] = useState([]);
    const [status, setStatus] = useState();
    
    const getRepos = function() {
        fetch("https://api.github.com/users/facebook/repos").then(
            response => response.json()
        ).then(
            data => {
                setRepos(data);
                setStatus("fetched");
            }
        ).catch(error => console.log(error));
    }
    const logRepos = function() {
        console.log(repos);
    }

    return (
        <>
            <button onClick={getRepos} >{status? "Fetched" : "Fetch Repos"} Get Repos</button>
            <button onClick={logRepos} >Log Repos</button>
        </>
    );
}
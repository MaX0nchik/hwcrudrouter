import { useEffect } from "react";
import { useState } from "react"


export default function useApiFetch(url, defaultdata){
    const [data, setData] = useState(defaultdata);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((r)=> r.json())
        .then((data)=>{
            setData(data);
        })
        .catch(()=>{setError(true);})
        .finally(()=>{setLoading(false);});
    }, []);


    return[data, setData, isLoading, error];
}
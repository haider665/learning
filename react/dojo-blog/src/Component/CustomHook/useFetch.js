import React from 'react'
import { useState, useEffect } from 'react'

const useFetch = (link) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('use effect');
        setTimeout(() => {
            fetch(link)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch data from');
                    }

                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 2000);

        // return (() => console.log('clean up'))
    }, [link])

    return {data, isPending, error};
}

export default useFetch
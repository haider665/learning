import React from 'react'
import BlogList from './BlogList'
import ReactLoading from 'react-loading';
import useFetch from './CustomHook/useFetch';

const Home = () => {

    const {data, isPending, error} = useFetch('http://localhost:8000/blogs/');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <ReactLoading type="spin" color="black" height="100px" width="100px" />}
            {data && <BlogList blogs={data} title="All Blogs"/>}
        </div>
    )
}

export default Home
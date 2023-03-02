import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './CustomHook/useFetch';
import ReactLoading from 'react-loading';
import BlogList from './BlogList';

const BlogDetails = () => {

    const {id} = useParams();
    const {data, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <ReactLoading type="spin" color="black" height="100px" width="100px" />}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written By <i>{data.author}</i></p>
                    <div>{data.body}</div>
                </article>
            )}  
        </div>
    )
}

export default BlogDetails
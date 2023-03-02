import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({ blogs, title, deleteBlog }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <Link to={`/blogs/${blog.id}`}>
                        <button style={{ marginTop: '10px' }}>View</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList
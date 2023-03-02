import React from 'react'
import { useState } from 'react';

const Create = () => {

    const[title, setTitle] = useState();
    const[body, setBody] = useState();
    const[author, setAuthor] = useState();

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>

                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Haider">Haider</option>
                    <option value="Mojib">Mojib</option>
                </select>
                
                <label>Blog Body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required/>
            </form>
        </div>
    )
}

export default Create
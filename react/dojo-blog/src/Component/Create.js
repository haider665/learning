import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Create = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('Mojib');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author};

        console.log(blog);
        setIsPending(true);

        axios.post('http://localhost:8000/blogs/', blog)
        .then((response) =>{
            console.log('----------------------');
            console.log(response);
            setIsPending(false);  
            history.push('/');
        }).catch((error) => {
            console.log(error.response.data.messages.errors);
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>

                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Haider">Haider</option>
                    <option value="Mojib">Mojib</option>
                </select>
                
                <label>Blog Body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create
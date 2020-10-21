import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchOne = () => {
    const [loading, setLoading] = useState(false);
    const [error, seetError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/5`)
            .then(response => {
                setLoading(false);
                setPost(response.data);
                seetError('');
            })
            .catch((error) => {
                setLoading(false);
                setPost({});
                seetError('Something went wrong!')
            })
    }, [])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    );
}

export default DataFetchOne;
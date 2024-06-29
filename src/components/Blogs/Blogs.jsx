
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({bookmarked}) => {

    const[blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    return (
        <div className='shadow-md md:w-2/3'>
           <h1 className='pl-4 mb-5 text-3xl font-bold' >Blogs</h1>
           {blogs.map(blog => <Blog bookmarked={bookmarked} key={blog.id} blog={blog}></Blog>)}
        </div>
    );
};

Blogs.propTypes = {

    bookmarked: PropTypes.func.isRequired
}

export default Blogs;
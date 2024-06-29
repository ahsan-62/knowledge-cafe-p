import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,bookmarked}) => {
    console.log(blog);
    const{cover,title,author,author_img,posted_date,reading_time,hashtags}=blog;
    return (
        <div className='p-4 mb-5 '>
            <div className='mb-5'>
                <img className='w-full ' src={cover} alt={`Cover photo of ${title}`} />
            </div>
            <div className='flex justify-between mb-5'>
                <div className='flex items-center gap-5 mb-5'>
                    <img className='rounded-full w-14 h-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <span className='text-sm font-semibold'>{posted_date}</span>
                    </div>
                </div>
                <div className='flex items-start gap-5'>
                    <h1 >{reading_time} min read</h1> 
                    <button onClick={()=>bookmarked(blog)} className='text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>

            <div>
                <h1 className='text-4xl font-bold text-[#080707] max-w-[730px]'>{title}</h1>
            </div>

            <div className='mt-4 '>
                {
                    hashtags.map((hash,index)=><span className='mr-2 text-xl font-medium text-[#716f6f]' key={index}>{hash}</span>)
                }
            </div>
            
        </div>
    );
};

Blog.propTypes={

    blog: PropTypes.object.isRequired,

    bookmarked: PropTypes.func.isRequired
}
export default Blog;
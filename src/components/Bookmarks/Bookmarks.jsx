import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {

    
    return (
        <div className='md:w-1/3'>
            <div className='bg-[#1111110D] mb-4 rounded-lg '>
            <h1 className='text-2xl font-bold text-[#6047EC] text-center p-3'>Spend time on read: { bookmarks.reduce((a, b) => a + b.reading_time, 0) } mins</h1>
            </div>
            <div className='bg-[#1111110D] rounded-lg'>
            <h1 className='text-2xl font-bold text-[##111]  p-3' >Bookmarked Blogs:{bookmarks.length}</h1>
            {
                
                bookmarks.map(bookmark => <div className='text-xl font-semibold text-[#080707] m-4 p-4 rounded-lg bg-white ' key={bookmark.id}>{bookmark.title}</div>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired       
}

export default Bookmarks;
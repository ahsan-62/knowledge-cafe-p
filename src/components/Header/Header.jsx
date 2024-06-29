

import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-4 mx-auto my-5 border-b-2 max-w-7xl'>
             <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
             <img src={Profile} alt="" />
        </header>
    );
};

export default Header;
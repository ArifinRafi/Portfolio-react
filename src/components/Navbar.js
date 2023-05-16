import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
    <div className="navbar bg-base-100 lg:mx-10">
  <div className="columns-3">
   <Link to='/' className='btn btn-ghost normal-case text-xl'>Home</Link>
   <Link to='/About' className='btn btn-ghost normal-case text-xl'>About</Link>
   <Link to='/Skills' className='btn btn-ghost normal-case text-xl'>Skills</Link>
   <Link to='/Career' className='btn btn-ghost normal-case text-xl'>Career</Link>
  </div>
  
 
</div>


    
        </div>
    );
};

export default Navbar;
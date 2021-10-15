import React from 'react';
import UtilNav from './UtilNav';
import MainNav from './MainNav';

const Header = () => {
  return (
    <>
      <div>
        <UtilNav />
        <h1 className='lg-pink1 lg-pink1:hover'>Header</h1>
        <MainNav />
      </div>
    </>
  );
};

export default Header;

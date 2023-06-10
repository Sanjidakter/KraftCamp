import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';



const Main = () => {
    const location = useLocation();
    const {loading} = useContext(AuthContext);
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    // if(loading){
    //     return;
    // }
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            
            <Outlet></Outlet>

           {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;
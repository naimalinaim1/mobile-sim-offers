import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
    const links = (
        <>
            <li><ActiveLink to="/">Home</ActiveLink></li>
            <li><ActiveLink to="/about">About</ActiveLink></li>
        </>
    )


    return (
        <header>
            <div className="navbar justify-between bg-base-100 py-4 mb-4">
                <div className="navbar-start w-auto">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* nav link */}
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-end lg:flex-1  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* nav link */}
                        {links}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
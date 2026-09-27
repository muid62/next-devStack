"use client"

import React from "react";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from '../../../public/icon.png'

const Navbar = () => {
    const pathname = usePathname();
    const links = 
    <>
        <li><Link className={`links ${pathname === '/' ? 'text-pink-600 font-semibold' : "text-slate-600 hover:text-pink-600 font-semibold"}`} href={'/'}>Home</Link></li>
        <li><Link className={`links ${pathname === '/technologies' ? 'text-pink-600 font-semibold' : "text-slate-600 hover:text-pink-600 font-semibold"}`} href={'/technologies'}>Technologies</Link></li>
        <li><Link className={`links ${pathname === '/projects' ? 'text-pink-600 font-semibold' : "text-slate-600 hover:text-pink-600 font-semibold"}`} href={'/projects'}>Projects</Link></li>
        <li><Link className={`links ${pathname === '/blogs' ? 'text-pink-600 font-semibold' : "text-slate-600 hover:text-pink-600 font-semibold"}`} href={'/blogs'}>Blogs</Link></li>
        <li><Link className={`links ${pathname === '/about' ? 'text-pink-600 font-semibold' : "text-slate-600 hover:text-pink-600 font-semibold"}`} href={'/about'}>About us</Link></li>
    </>
    return (
    <div className="navbar container mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"> <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
                </svg>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
            </ul>
            </div>
            <div className="flex items-center gap-1">
                <Image src={logo} alt="Logo" className="h-10 w-10 object-contain rounded-md" />
                <span className="text-gradient-custom text-lg md:text-xl font-bold">
                Dev Stack
                </span>
                </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {links}
            </ul>
        </div>
        <div className="navbar-end gap-2">
            <a className="btn text-xs md:text-sm font-medium text-gray-70 rounded-full px-4 py-2 border-none transition hover:text-pink-600 hover:bg-white cursor-pointer">Sign In</a>
            <a className="btn rounded-full bg-pink-600 p-2 px-4 md:px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 cursor-pointer">Sign Up</a>
        </div>
        </div>
    );
};

export default Navbar;

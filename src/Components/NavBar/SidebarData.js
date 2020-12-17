import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title:'OUR BUSINESS',
        path:'/',
        icons:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'CORPRATE PROFILE',
        path:'/corprateprofile',
        icons:<FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title:'SERVICES',
        path:'/services',
        icons:<FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title:'PRODUCTS',
        path:'/products',
        icons:<FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title:'AboutUs',
        path:'/aboutus',
        icons:<FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title:'ContactUs',
        path:'/contactus',
        icons:<AiIcons.AiOutlineContacts/>,
        cName: 'nav-text'
    },
    
]

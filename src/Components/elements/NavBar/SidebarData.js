import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icons:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Formulation',
        path:'/formulation',
        icons:<FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title:'Api',
        path:'/api',
        icons:<FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title:'Corporate Profile',
        path:'/corporateprofile',
        icons:<FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title:'About Us',
        path:'/aboutus',
        icons:<FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title:'Contact Us',
        path:'/contactus',
        icons:<AiIcons.AiOutlineContacts/>,
        cName: 'nav-text'
    },
    
]

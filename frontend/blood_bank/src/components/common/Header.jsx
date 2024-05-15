import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import header_logo from '../../assets/images/header/LiveHeartZ.png';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Header = (props) => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const [blood, setBlood] = useState('');

    const handleStickyHeader = () => {

        window.addEventListener('scroll', () => {

            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }

        })

    };

    useEffect(() => {
        //handleStickyHeader();
        setBlood(props.blood);
        return () => window.removeEventListener('scroll', handleStickyHeader);
    });


    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    return (
        <header className='header '>
            <div className="container flex justify-around gap-5 ">

                <div className='w-[100px] flex items-center  '>
                    <Link to="/" component={Link}>
                        <img className="w-44 h-34" src={header_logo} alt="Header Logo" />
                    </Link>
                    {/*<div><span className="font-bold text-[20px]">LiveHeartZ</span></div>*/}
                </div>
                <div>{blood}</div>
                <div className='navigation ' ref={menuRef} onClick={toggleMenu} >

                    <ul className="menu flex gap-[2.7rem] ">

                        {
                            props.navLinks.map((link, index) =>
                                <li key={index} >
                                    {!props.donorloged &&
                                        <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-red-600 text-[16px] leading-7 font-[600]' : 'text-white text-[16px] leading-7 font-[500] hover:text-pink-600'} >{link.display}</NavLink>
                                    }

                                </li>
                            )
                        }
                    </ul>
                </div>
                {
                    props.donorloged ? (<div className='flex items-center gap-5'>
                        <Stack >
                            <Button variant="outlined" style={{ color: '#BC005A', border: '2px solid #BC005A' }} component={Link} to="/login">Log Out</Button>
                        </Stack>

                    </div>) : (<div className='flex items-center gap-5'>
                        <Stack >
                            <Button variant="outlined" style={{ backgroundColor: '#BC005A', border: '2px solid white', color: 'white' }} component={Link} to="/register" >REGISTER</Button>
                        </Stack>
                        <Stack >
                            <Button variant="outlined" style={{ color: '#BC005A', border: '2px solid #BC005A' }} component={Link} to="/login">LOGIN</Button>
                        </Stack>
                        {/* <Stack >
                            <Button variant="outlined" style={{ color: '#BC005A', border: '2px solid #BC005A' }} component={Link} to="/admin/login">ADMIN</Button>
                        </Stack> */}
                    </div>
                    )
                }


                <div className='flex items-center gap-4 mr-3'>

                    <span className='md:hidden' onClick={toggleMenu}>
                        {<BiMenu className='w-6 h-6 cursor-pointer' />}

                    </span>


                </div>


            </div>



        </header >
    );

}

export default Header

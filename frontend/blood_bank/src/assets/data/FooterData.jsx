import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
    {
        path: "https://www.youtube.com",
        icon: <AiFillYoutube className='group-hover:text-white w-5 h-5' />
    },
    {
        path: "https://www.github.com",
        icon: <AiFillGithub className='group-hover:text-white w-5 h-5' />
    },
    {
        path: "https://www.instagram.com",
        icon: <AiOutlineInstagram className='group-hover:text-white w-5 h-5' />
    },
    {
        path: "https://www.linkedin.com",
        icon: <RiLinkedinFill className='group-hover:text-white w-5 h-5' />
    },
];

import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const navHoverClass = 'hover:underline underline-offset-8 decoration-pink-600'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const menuItems = ['home', 'about', 'skills', 'work', 'contact']
  const navbar = []
  const social = []

  menuItems.forEach(item => {
    navbar.push(
      <li className={!nav ? '' : 'py-4'} key={menuItems.indexOf(item)}>
        <Link
          className={`${navHoverClass} text-2xl`}
          to={`${item}`}
          spy={true}
          activeClass='active'
          smooth={true}
          duration={500}
        >
          {item.toUpperCase()}
        </Link>
      </li>
    )
  })

  const socialIcons = [
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/omar-magdy-64145b176',
      color: 'bg-blue-600',
      logo: FaLinkedin,
    },
    {
      name: 'Github',
      link: 'https://github.com/Megzo908',
      color: 'bg-[#333333]',
      logo: FaGithub,
    },
    {
      name: 'Email',
      link: 'mailto:omarmagdy151299@gmail.com',
      color: 'bg-[#6fc2b0]',
      logo: HiOutlineMail,
    },
    {
      name: 'Resume',
      link: 'https://drive.google.com/file/d/1yHaH_O55Fn6A-FzOhvhRF6DeJdP3iv2G/view?usp=sharing',
      color: 'bg-[#565f69]',
      logo: BsFillPersonLinesFill,
    },
  ]
  socialIcons.forEach(icon => {
    const index = socialIcons[socialIcons.indexOf(icon)]
    social.push(
      <li
        className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${index.color}`}
      >
        <a
          className='flex justify-between items-center w-full text-gray-300'
          href={index.link}
        >
          {`${socialIcons[socialIcons.indexOf(icon)].name}`}
          <index.logo size={30} />
        </a>
      </li>
    )
  })

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <Link
        className={`${navHoverClass}`}
        to='home'
        smooth={true}
        duration={500}
      >
        <h1 className='font-bold text-4xl cursor-pointer'>Omar Magdy</h1>
      </Link>

      {/* menu */}
      <ul className='hidden md:flex'>{navbar}</ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        {navbar}
      </ul>

      {/* Social icons */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>{social}</ul>
      </div>
    </div>
  )
}

export default Navbar

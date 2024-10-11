import logo from '../assets/KevinrushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter  } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Navbar(){

  return(
    <nav className="bg-red-900 mb-20 flex items-center justify-between py-6">
      <div className="flex flexshrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  )
  }

  export default Navbar


import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'
import Customize from './Customize';

function Header() {

    const [show, setShow] = useState(false)

    const handleCustomizeClick = () => {
        setShow(!show)
    }

    return (
        <header className='h-24 shadow-md rounded-b-2xl fixed top-0 left-0 right-0 bg-white z-50'>
            <div className='w-5/6 h-full mx-auto flex items-center justify-between rounded-lg'>
                <div>
                    <img src="src/assets/images/logo/logo.png" alt="logo" />
                </div>
                <div>
                    <ul className='flex items-center gap-8'>
                        <li><a href="#our-work" className='font-medium text-lg'>Our Work</a></li>
                        <li><a href="#feature" className='font-medium text-lg'>Features</a></li>
                        <li><a href="" className='font-medium text-lg'>About Us</a></li>
                        <li><a href="" className='font-medium text-lg'>Contact</a></li>
                        <li className='flex items-center gap-2 font-medium text-lg hover:cursor-pointer relative' onClick={handleCustomizeClick}>
                            Customize <BsChevronDown />
                            {show && <Customize />}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
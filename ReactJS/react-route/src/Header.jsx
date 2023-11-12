import { Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const [active, setActive] = useState(false)
    // relative before:content-[''] before:block before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white before:rotate-45
    const handleClick = (key) => {
        console.log(key);
        setActive(true)
    }

    const className = active ? "py-5 relative before:content-[''] before:block before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white before:rotate-45" : ""
    
    return(
        <header className="flex justify-around items-center h-16 bg-blue-500 text-white">
            <div>
                <Link to="/" className="text-2xl">LOGO</Link>
            </div>
            <nav>
                <ul className="flex gap-6 items-center h-full">
                    <li className={className} onClick={(e)=>handleClick(e.target.key)} key='1'>
                        <Link className="text-base" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="text-base" to="/customers">Customers</Link>
                    </li>
                    <li>
                        <Link className="text-base" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="text-base" to="/about-us">About Us</Link>
                    </li>
                </ul>
            </nav>

            
        </header>
    )
}

export default Header
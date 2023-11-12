import {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [homeActive, setHomeActive] = useState(true)
    const [contactActive, setContactActive] = useState(false)
    const [aboutActive, setAboutActive] = useState(false)
    const homeRef = useRef(null)
    const contactRef = useRef(null)
    const aboutRef = useRef(null)

    useEffect(()=>{
        if(homeActive) {
            homeRef.current.classList.add('bg-white')
            contactRef.current.classList.remove('bg-white')
            aboutRef.current.classList.remove('bg-white')
        }
        if(contactActive) {
            homeRef.current.classList.remove('bg-white')
            contactRef.current.classList.add('bg-white')
            aboutRef.current.classList.remove('bg-white')
        }
        if(aboutActive) {
            homeRef.current.classList.remove('bg-white')
            contactRef.current.classList.remove('bg-white')
            aboutRef.current.classList.add('bg-white')
        }
    }, [homeActive, contactActive, aboutActive])

    const handleClickHome = () => {
        setHomeActive(true)
        setContactActive(false)
        setAboutActive(false)
    }

    const handleClickContact = ()=>{
        setHomeActive(false)
        setContactActive(true)
        setAboutActive(false)
    }

    const handleClickAbout = ()=>{
        setHomeActive(false)
        setContactActive(false)
        setAboutActive(true)
    }

    return(
        <header className=" bg-red-600 flex items-center justify-center">
            <nav>
                <ul className="flex gap-10">
                    <li className="h-10 bg-white" ref={homeRef} onClick={handleClickHome}>
                        <Link to="/" className="h-full w-16 grid place-items-center">Home</Link>
                    </li>
                    <li className="h-10" ref={contactRef} onClick={handleClickContact}>
                        <Link to="/contact" className="h-full w-16 grid place-items-center">Contact</Link>
                    </li>
                    <li className="h-10" ref={aboutRef} onClick={handleClickAbout}>
                        <Link to="/about" className="h-full w-16 grid place-items-center">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
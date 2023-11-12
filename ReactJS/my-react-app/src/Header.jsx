import { BsChevronDown } from "react-icons/bs";

function Header() {
    return (
        <header className="h-16 fix top-0">
            <div className="w-3/4 mx-auto flex items-center h-full">
                <div className="font-bold"><a href="" style={{color: 'white'}} className="flex items-center gap-2"><img src="../src/assets/Logo.png" alt='logo' /> SOLANA</a></div>
                <nav className="flex ml-auto">
                    <a href="" className="flex items-center ml-5" style={{color: 'gray'}}>
                        Learn<BsChevronDown />
                    </a>
                    <a href="" className="flex items-center ml-5" style={{color: 'white'}}>
                        Build<BsChevronDown />
                    </a>
                    <a href="" className="flex items-center ml-5" style={{color: 'gray'}}>
                        Network<BsChevronDown />
                    </a>
                    <a href="" className="flex items-center ml-5" style={{color: 'gray'}}>
                        Community<BsChevronDown />
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
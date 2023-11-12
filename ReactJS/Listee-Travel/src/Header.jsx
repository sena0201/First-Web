
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <header className="relative text-white h-auto">
            <img
                src="../src/assets/header-img.png"
                alt="background"
                className="w-full"
            />
            <img src="../src/assets/blur.png" alt="" className="absolute top-0 left-0 w-full z-10" />

            <div className="absolute top-0 left-0 z-50 w-full">
                <div className="w-17/20 mx-auto">
                    <div className="flex items-center justify-between h-20">
                        <div className="font-logo text-logo text-4xl">Listee Travel</div>
                        <nav>
                            <ul className="flex gap-20">
                                <li><a href="#" className="text-sm font-extralight hover:cursor-pointer">Home</a></li>
                                <li><a href="#" className="text-sm font-extralight hover:cursor-pointer">About us</a></li>
                                <li><a href="#" className="text-sm font-extralight hover:cursor-pointer">Destinations</a></li>
                                <li><a href="#" className="text-sm font-extralight hover:cursor-pointer">Tours</a></li>
                                <li><a href="#" className="text-sm font-extralight hover:cursor-pointer">Shop</a></li>
                                <li><a href="#" className="text-sm font-extralight hover:cursor-pointer">Blogs</a></li>
                            </ul>
                        </nav>
                        <div className="flex gap-5 items-center">
                            <a href="" className="text-sm font-normal decoration-white decoration-solid">Sign In</a>
                            <a href="" className="text-sm font-normal py-2 px-4 bg-gradient-to-r from-red to-orange rounded-2xl">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute z-50 w-full h-full top-0 grid items-center">
                <div className="w-17/20 mx-auto">
                    <h1 className="text-4xl font-title mb-8">Explorer and Travel</h1>
                    <h1 className="text-5xl font-bold mb-6">Let's Go Now</h1>
                    <p className="w-2/5 text-sm mb-7">Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className="w-2/5 bg-white text-black rounded-3xl">
                        <div className="flex justify-around">
                            <div className="flex items-center gap-2 text-black">
                                <GoLocation />
                                <div>
                                    <p className="text-xs">Location</p>
                                    <h5 className="text-sm font-bold">Thailand</h5>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiOutlineCalendar />
                                <div>
                                    <p className="text-xs">Date</p>
                                    <h5 className="text-sm font-bold">13 May, 2023</h5>
                                </div>
                            </div>
                            <button className="w-12 h-12 bg-gradient-to-r from-red to-orange rounded-2xl grid place-items-center my-2 text-white">
                                <CiSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
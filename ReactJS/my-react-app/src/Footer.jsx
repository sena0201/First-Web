import { AiFillTwitterSquare, AiFillGithub } from "react-icons/ai";
import { FaYoutubeSquare,FaDiscord } from "react-icons/fa";
import { BsReddit } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

function Footer() {
    return(
        <div className="w-3/4 mx-auto text-white py-12 flex justify-between">
            <div>
                <img src="../src/assets/Logo.png" alt="" className="mb-6" />
                <p className="mb-6">Managed by Solana Foundation</p>
                <div className="flex mb-6 gap-2 text-gray-500">
                    <FaYoutubeSquare />
                    <AiFillTwitterSquare />
                    <FaDiscord />
                    <BsReddit />
                    <AiFillGithub />
                </div>
                <p className="text-gray-500">2023 Solana Foundation. All rights reserved.</p>
            </div>
            <div className="flex justify-between w-2/5">
                <div className="flex flex-col">
                    <p className="mb-6">SOLANA</p>
                    <a href="" className="mb-6 text-gray-500">Grants</a>
                    <a href="" className="mb-6 text-gray-500">Break Solana</a>
                    <a href="" className="mb-6 text-gray-500">Media Kit</a>
                    <a href="" className="mb-6 text-gray-500">Careers</a>
                    <a href="" className="mb-6 text-gray-500">Disclaimer</a>
                </div>
                <div className="flex flex-col">
                    <p className="mb-6">GET CONNECTED</p>
                    <a href="" className="mb-6 text-gray-500">Ecosystem</a>
                    <a href="" className="mb-6 text-gray-500">Blog</a>
                    <a href="" className="mb-6 text-gray-500">Newsletter</a>
                </div>
                <div className="flex items-center h-6">
                    <GiEarthAmerica />
                    <p>EN</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
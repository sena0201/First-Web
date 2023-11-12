import { FiArrowUpRight } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai"
import { BiPodcast } from "react-icons/bi"
function Source() {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-black">
            <div className="w-3/4 mx-auto text-white pt-16">
                <h2 className="text-2xl">Go to Source.</h2>
                <p className="text-xs">Read the documentation for Solana and popular tools.</p>

                <div className="flex justify-between mt-9">
                    <div className="w-w-12/25">
                        <div className="flex items-center justify-between">
                            <h1 className="text-4xl">Solana Docs</h1>
                            <button className="flex border-[1px] border-white rounded-3xl py-1 px-3 text-base">VIEW ALL <FiArrowUpRight className="text-xl" /></button>
                        </div>
                        <p className="border-[1px] border-gray-400 w-full my-6"></p>
                        <p className="w-4/5">Learn how Solana works and get a high-level understanding of Solana's artchitecture.</p>
                    </div>
                    <div className="w-w-12/25">
                        <div className="flex items-center justify-between">
                            <h1 className="text-4xl">Solana Docs</h1>
                            <button className="flex border-[1px] border-white rounded-3xl py-1 px-3 text-base">VIEW ALL <FiArrowUpRight className="text-xl" /></button>
                        </div>
                        <p className="border-[1px] border-gray-400 w-full my-6"></p>
                        <p className="w-4/5">Learn how Solana works and get a high-level understanding of Solana's artchitecture.</p>
                    </div>
                </div>

                <div className="py-28 flex">
                    <div className="w-w-12/25">
                        <h1 className="text-4xl mb-6">Solana Changelog</h1>
                        <p className="mb-9">Some more Solana change from Jacob & Joe.
                            Some subcribe to the newsletter: https://solana.us17.list-manage.com/s... Proposal - Price Compute Units: ...
                        </p>
                        <a href="" className="text-xs border-2 border-white rounded-3xl px-6">LASTEST EPISODE</a>
                    </div>
                    <img src="../src/assets/course-img.png" alt="" />
                </div>

                <div className="flex justify-between pb-14">
                    <div className="w-w-12/25 grid place-items-center rounded-xl" style={{ backgroundColor: '#19161C' }}>
                        <div className="w-4/5 py-8">
                            <h1 className="text-3xl mb-6">Solana Developer Update</h1>
                            <p className="text-sm mb-12 w-4/5">Sign up to the newsletter and learn about new resources, new commits, new proposals, and more.</p>
                            <div className="w-4/5 flex relative">
                                <input type="email" placeholder="Email" className="outline-0 border-0 bg-black text-white rounded-3xl w-full h-10 px-4"/>
                                <button className="absolute top-[6px] right-[6px] h-7 rounded-3xl px-2 text-black text-xs font-normal" style={{backgroundColor: '#14F195'}}>SIGN UP</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-w-12/25 grid place-items-center rounded-xl" style={{ backgroundColor: '#19161C' }}>
                        <div className="w-4/5 py-8">
                            <h1 className="text-3xl mb-6">Even more resources</h1>
                            <p className="text-sm mb-12 w-4/5">More videos, more espisodes. Discussions between industry leaders in both blockchain and technology, our team, and community developers.</p>
                            <div className="flex justify-around">
                                <button className="flex items-center justify-evenly py-2 text-xs w-2/5 border-2 border-white rounded-3xl">YOUTUBE <AiFillYoutube className="text-xl text-red-600"/></button>
                                <button className="flex items-center justify-evenly py-2 text-xs w-2/5 border-2 border-white rounded-3xl">PODCAST <BiPodcast className="text-xl bg-purple-500 rounded"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Source
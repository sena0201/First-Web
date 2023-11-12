import { AiOutlineArrowRight } from "react-icons/ai"
import Background1 from "../src/assets/started-img/start1.png"
import Background2 from "../src/assets/started-img/start2.png"
import Background3 from "../src/assets/started-img/start3.png"
import Background4 from "../src/assets/started-img/start4.png"
import Background5 from "../src/assets/started-img/start5.png"
import Background6 from "../src/assets/started-img/start6.png"
import Background7 from "../src/assets/started-img/start6.png"

function Started() {
    return (
        <div className="w-3/4 mx-auto text-white pb-28 pt-6">
            <h2 className="text-2xl">Get started.</h2>
            <p className="text-xs">Use these Solana Foundation and community courses to begin your journey into Solana development.</p>
            <div className="mx-auto w-w-96/100 mt-6">
                <div className="rounded-2xl h-[368px] grid items-center" style={{ backgroundImage: `url(${Background1})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className="ml-[80px]">
                        <p className="text-[10px] w-fit px-2 rounded-2xl mb-3" style={{ background: '#9945FF' }}>17 Chapters</p>
                        <h1 className="text-4xl">Solana Development Course</h1>
                        <p className="w-1/3 text-sm my-4">Quickstart your Solana development starting from nothing to complex programs.</p>
                        <div className="border-2 rounded-full mr-6 h-6 w-6 grid place-items-center text-gray-400 border-gray-400">
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-3">
                    <div className="rounded-2xl grid items-end pb-8 h-[352px]" style={{ backgroundImage: `url(${Background2})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div className="">
                            <p className="text-[10px] ml-4 w-fit px-2 rounded-2xl mb-3" style={{ background: '#9945FF' }}>14 Chapters</p>
                            <div className="flex items-center justify-evenly">
                                <h3 className="ml-4">Buildspace</h3>
                                <div className="ml-auto border-2 rounded-full mr-6 h-6 w-6 grid place-items-center text-gray-400 border-gray-400">
                                    <AiOutlineArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl grid items-end pb-8" style={{ backgroundImage: `url(${Background3})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div className="">
                            <p className="text-[10px] ml-4 w-fit px-2 rounded-2xl mb-3" style={{ background: '#9945FF' }}>13 Chapters</p>
                            <div className="flex items-center justify-evenly">
                                <h3 className="ml-4">Solana Bytes</h3>
                                <div className="ml-auto border-2 rounded-full mr-6 h-6 w-6 grid place-items-center text-gray-400 border-gray-400">
                                    <AiOutlineArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl grid items-end pb-8" style={{ backgroundImage: `url(${Background4})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div className="">
                            <p className="text-[10px] ml-4 w-fit px-2 rounded-2xl mb-3" style={{ background: '#9945FF' }}>1 Chapter</p>
                            <div className="flex items-center justify-evenly">
                                <h3 className="ml-4">Scaffold Series</h3>
                                <div className="ml-auto border-2 rounded-full mr-6 h-6 w-6 grid place-items-center text-gray-400 border-gray-400">
                                    <AiOutlineArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl grid items-end pb-8" style={{ backgroundImage: `url(${Background5})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div className="">
                            <p className="text-[10px] ml-4 w-fit px-2 rounded-2xl mb-3" style={{ background: '#9945FF' }}>3 Chapters</p>
                            <div className="flex items-center justify-evenly">
                                <h3 className="ml-4 text-base">Freecodecamp Solana Course</h3>
                                <div className="ml-auto border-2 rounded-full mr-6 h-6 w-6 grid place-items-center text-gray-400 border-gray-400">
                                    <AiOutlineArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl grid items-end pb-8" style={{ backgroundImage: `url(${Background6})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div className="">
                            <p className="text-[10px] ml-4 w-fit px-2 rounded-2xl mb-3" style={{ background: '#9945FF' }}>167 Chapters</p>
                            <div className="flex items-center justify-evenly">
                                <h3 className="ml-4">Solana Development by Knox</h3>
                                <div className="ml-auto border-2 rounded-full mr-6 h-6 w-6 grid place-items-center text-gray-400 border-gray-400">
                                    <AiOutlineArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl grid items-end pb-8" style={{ backgroundImage: `url(${Background7})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div className="">
                            <p className="text-[10px] ml-4 w-fit px-2 rounded-2xl mb-3" style={{ background: '#9945FF' }}>8 Chapters</p>
                            <div className="flex items-center justify-evenly">
                                <h3 className="ml-4">Solana Bootcamp</h3>
                                <div className="ml-auto border-2 rounded-full mr-6 h-6 w-6 grid place-items-center text-gray-400 border-gray-400">
                                    <AiOutlineArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Started
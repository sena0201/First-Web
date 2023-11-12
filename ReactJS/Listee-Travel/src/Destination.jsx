
import img1 from '../src/assets/Destination/Malaysia.png'
import img2 from '../src/assets/Destination/Dubai.png'
import img3 from '../src/assets/Destination/Greecc.png'
import img4 from '../src/assets/Destination/Singapore.png'


const Destination = () => {
    return (
        <div className="w-full pt-24">
            <div className="grid place-items-center">
                <h1 className='text-red text-4xl font-title'>Choose your</h1>
                <h1 className='text-5xl font-extralight mt-4'>DESTINATION</h1>
            </div>
            <div className="w-17/20 mx-auto mt-6">
                <div className="grid grid-cols-4 grid-rows-2 gap-3">
                    <div className='col-star-0 col-span-2 row-start-0 row-span-2 relative z-10'>
                        <img src={img1} alt="" className='w-full h-full' />
                        <div className='absolute top-0 w-full h-full grid place-items-center z-50'>
                            <div>
                                <h2 className='font-title text-white text-4xl'>Malaysia</h2>
                                <div className='grid place-items-center text-white w-full text-xs mt-2'>
                                    <button className='bg-gradient-to-r from-red to-orange rounded-2xl py-2 px-2'>16 TOURS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-star-3 col-span-1 relative'>
                        <img src={img2} alt="" className='w-full' />
                        <div className='absolute top-0 w-full h-full grid place-items-center z-50'>
                            <div>
                                <h2 className='font-title text-white text-4xl'>Dubai</h2>
                                <div className='grid place-items-center text-white w-full text-xs mt-2'>
                                    <button className='bg-gradient-to-r from-red to-orange rounded-2xl py-2 px-2'>16 TOURS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-star-3 col-span-1 relative'>
                        <img src={img3} alt="" className='w-full' />
                        <div className='absolute top-0 w-full h-full grid place-items-center z-50'>
                            <div>
                                <h2 className='font-title text-white text-4xl'>Greecc</h2>
                                <div className='grid place-items-center text-white w-full text-xs mt-2'>
                                    <button className='bg-gradient-to-r from-red to-orange rounded-2xl py-2 px-2'>16 TOURS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-star-3 col-span-2 relative'>
                        <img src={img4} alt="" className='w-full h-full' />
                        <div className='absolute top-0 w-full h-full grid place-items-center z-50'>
                            <div>
                                <h2 className='font-title text-white text-4xl'>Singapore</h2>
                                <div className='grid place-items-center text-white w-full text-xs mt-2'>
                                    <button className='bg-gradient-to-r from-red to-orange rounded-2xl py-2 px-2'>16 TOURS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto w-fit'>
                <button className='bg-gradient-to-r from-red to-orange rounded-2xl py-3 text-xs px-2 text-white mt-4'>VIEW MORE</button>
            </div>
        </div>
    )
}

export default Destination
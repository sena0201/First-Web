
import pic1 from '../src/assets/Tour/Rome.png';
import pic2 from '../src/assets/Tour/Lahore.png';
import pic3 from '../src/assets/Tour/Singapore.png';

const Tour = () => {
    return(
        <div className="w-full pt-24">
            <div className="grid place-items-center">
                <h1 className='text-red text-4xl font-title'>Popular</h1>
                <h1 className='text-5xl font-extralight mt-4'>TOUR PACKAGES</h1>
                <p className='w-3/5 text-center mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'</p>
            </div>
            <div className="w-17/20 mx-auto flex flex-wrap justify-between gap-1 mt-8">
                <div className="max-w-3/10 min-w-[250px]">
                    <img src={pic1} alt="" />
                    <div className="bg-yellow flex justify-between items-center">
                        <div className='ml-5 py-5'>
                            <h1 className='text-xl font-medium'>ROME, ITALY</h1>
                            <p className='text-xs'>10 days trip</p>
                        </div>
                        <p className='mr-5 font-bold'>$5.24K</p>
                    </div>
                </div>
                <div className="max-w-3/10 min-w-[250px]">
                    <img src={pic1} alt="" />
                    <div className="bg-yellow flex justify-between items-center">
                        <div className='ml-5 py-5'>
                            <h1 className='text-xl font-medium'>ROME, ITALY</h1>
                            <p className='text-xs'>10 days trip</p>
                        </div>
                        <p className='mr-5 font-bold'>$5.24K</p>
                    </div>
                </div>
                <div className="max-w-3/10 min-w-[250px]">
                    <img src={pic1} alt="" />
                    <div className="bg-yellow flex justify-between items-center">
                        <div className='ml-5 py-5'>
                            <h1 className='text-xl font-medium'>ROME, ITALY</h1>
                            <p className='text-xs'>10 days trip</p>
                        </div>
                        <p className='mr-5 font-bold'>$5.24K</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tour
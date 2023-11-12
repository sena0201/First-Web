
import pic1 from '../src/assets/Activity/Layer_1.png';
import pic2 from '../src/assets/Activity/Layer_2.png';
import pic3 from '../src/assets/Activity/Layer_3.png';
import pic4 from '../src/assets/Activity/Layer_4.png';
import pic5 from '../src/assets/Activity/Layer_5.png';
import pic6 from '../src/assets/Activity/Layer_6.png';

const Activity = () => {
    return (
        <div className="w-full pt-12">
            <div className="grid place-items-center">
                <h1 className='text-red text-4xl font-title'>Travel by</h1>
                <h1 className='text-5xl font-extralight mt-4'>ACTIVITY</h1>
                <p className='w-3/5 text-center mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'</p>
            </div>
            <div className='w-17/20 mx-auto mt-12 flex flex-wrap justify-between'>
                <div className="bg-gradient-to-r from-red to-orange max-w-8/25 min-w-[300px] text-white rounded-xl mb-5">
                    <div className="w-11/12 mx-auto grid place-items-center pt-24 pb-16">
                        <img src={pic1} alt="" className='w-32' />
                        <h3 className='text-3xl mt-12 font-bold'>Adventure</h3>
                        <p className='text-base text-center mt-6 font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <div className="bg-yellow max-w-8/25 min-w-[300px] text-gray rounded-xl mb-5">
                    <div className="w-11/12 mx-auto grid place-items-center pt-24 pb-16">
                        <img src={pic2} alt="" className='w-32' />
                        <h3 className='text-3xl mt-12 font-bold'>Adventure</h3>
                        <p className='text-base text-center mt-6 font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div><div className="bg-yellow max-w-8/25 min-w-[300px] text-gray rounded-xl mb-5">
                    <div className="w-11/12 mx-auto grid place-items-center pt-24 pb-16">
                        <img src={pic3} alt="" className='w-32' />
                        <h3 className='text-3xl mt-12 font-bold'>Adventure</h3>
                        <p className='text-base text-center mt-6 font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div><div className="bg-yellow max-w-8/25 min-w-[300px] text-gray rounded-xl mb-5">
                    <div className="w-11/12 mx-auto grid place-items-center pt-24 pb-16">
                        <img src={pic4} alt="" className='w-32' />
                        <h3 className='text-3xl mt-12 font-bold'>Adventure</h3>
                        <p className='text-base text-center mt-6 font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div><div className="bg-yellow max-w-8/25 min-w-[300px] text-gray rounded-xl mb-5">
                    <div className="w-11/12 mx-auto grid place-items-center pt-24 pb-16">
                        <img src={pic5} alt="" className='w-32' />
                        <h3 className='text-3xl mt-12 font-bold'>Adventure</h3>
                        <p className='text-base text-center mt-6 font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div><div className="bg-yellow max-w-8/25 min-w-[300px] text-gray rounded-xl mb-5">
                    <div className="w-11/12 mx-auto grid place-items-center pt-24 pb-16">
                        <img src={pic6} alt="" className='w-32' />
                        <h3 className='text-3xl mt-12 font-bold'>Adventure</h3>
                        <p className='text-base text-center mt-6 font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Activity
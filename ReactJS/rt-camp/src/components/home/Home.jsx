function Home() {
    return (
        <div className="flex flex-col items-center pt-20 w-5/6 mx-auto mt-24">
            <h1 className="text-6xl font-medium mb-14 text-center">Good Work. Good People.</h1>
            <p className="text-2xl w-3/5 text-center mb-16">We will help you to grow better by fetching most of the leads through Mails, Blogs, Social Media and various other platforms</p>
            <div className='flex gap-6 mb-16'>
                <button className="dark-btn text-2xl px-6 py-4 rounded-2xl">Get Started</button>
                <button className="light-btn text-2xl px-6 py-3 rounded-2xl border-4 border-black">Contact Us</button>
            </div>
            <p className="text-xl mb-11 text-center">We are 1st  WordPress Vip Partner from Asia serving top companies in the world</p>
            <div className="flex justify-between gap-6 flex-wrap">
                <div className="shadow-round px-6 h-28 grid place-items-center rounded-2xl grow shink-0 max-w-md">
                    <img src="src/assets/images/google.png" alt="" />
                </div>
                <div className="shadow-round px-6 h-28 grid place-items-center rounded-2xl grow shink-0 max-w-md">
                    <img src="src/assets/images/netflix.png" alt="" />
                </div>
                <div className="shadow-round px-6 h-28 grid place-items-center rounded-2xl grow shink-0 max-w-md">
                    <img src="src/assets/images/tesla.png" alt="" />
                </div>
                <div className="shadow-round px-6 h-28 grid place-items-center rounded-2xl grow shink-0 max-w-md">
                    <img src="src/assets/images/amazon.png" alt="" />
                </div>
                <div className="shadow-round px-6 h-28 grid place-items-center rounded-2xl grow shink-0 max-w-md">
                    <img src="src/assets/images/disney.png" alt="" />
                </div>
                <div className="shadow-round px-6 h-28 grid place-items-center rounded-2xl grow shink-0 max-w-md">
                    <img src="src/assets/images/paypal.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
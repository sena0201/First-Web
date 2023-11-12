


function Work() {
    return (
        <div className="flex flex-col items-center w-5/6 mx-auto pt-24">
            <h1 className="text-5xl font-medium">How We Work ?</h1>
            <div className="flex flex-wrap justify-between gap-10 w-full mt-20">
                <div className="flex flex-col items-center grow shink-0 w-80 rounded-xl shadow-round relative pt-14 mt-5">
                    <img src="src/assets/images/attract.png" alt="" />
                    <h3 className="text-3xl font-medium mt-5">Attract</h3>
                    <p className="w-4/5 my-6">The attract phase is where the customer first becomes aware of your brand.</p>
                    <div className="absolute w-24 h-24 rounded-full shadow-round -top-12 bg-white grid place-items-center text-4xl font-medium">
                        1
                    </div>
                </div>
                <div className="flex flex-col items-center grow shink-0 w-80 rounded-xl shadow-round relative pt-14 mt-5">
                    <img src="src/assets/images/engage.png" alt="" />
                    <h3 className="text-3xl font-medium mt-5">Engage</h3>
                    <p className="w-4/5 my-6">Your customer will be engaging with your content, reviewing blogs etc.</p>
                    <div className="absolute w-24 h-24 rounded-full shadow-round -top-12 bg-white grid place-items-center text-4xl font-medium">
                        2
                    </div>
                </div>
                <div className="flex flex-col items-center grow shink-0 w-80 rounded-xl shadow-round relative pt-14 mt-5">
                    <img src="src/assets/images/convert.png" alt="" />
                    <h3 className="text-3xl font-medium mt-5">Convert</h3>
                    <p className="w-4/5 my-6">Now, they see a sponsored ad and from there, it’s over to your lead nurturing sequences.</p>
                    <div className="absolute w-24 h-24 rounded-full shadow-round -top-12 bg-white grid place-items-center text-4xl font-medium">
                        3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;

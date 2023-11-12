function OurWork() {
    return (
        <div id="our-work" className="w-5/6 mx-auto pt-24 flex flex-col items-center gap-10 pb-6">
            <h1 className="text-5xl font-medium">Our Works</h1>
            <div className="flex items-center flex-wrap gap-12 justify-between">
                <div className="shadow-round rounded-xl w-600 grow shrink-0">
                    <img src="src/assets/images/work_1.png" alt="" className="w-full" />
                    <div className="w-11/12 mx-auto flex flex-col pb-4">
                        <h2 className="text-xl font-medium mt-4">Building Embedded Web Stories for WordPress</h2>
                        <p className="text-lg text-justify mt-4">rtCamp collaborated with Google to make the snackable Web Stories format even easier to consume with flexible WordPress blocks.</p>
                        <a href="" className="self-end text-lg">Read More</a>
                    </div>
                </div>
                <div className="shadow-round rounded-xl w-600 grow shrink-0">
                    <img src="src/assets/images/work_2.png" alt="" className="w-full" />
                    <div className="w-11/12 mx-auto flex flex-col pb-4">
                        <h2 className="text-xl font-medium mt-4">Migrating DealerTrack from AEM to WordPress</h2>
                        <p className="text-lg text-justify mt-4">rtCamp replat formed DealerTrack USA from Adobe Experience Manager to WordPress while reducing go-live timeframes by over 50%.</p>
                        <a href="" className="self-end text-lg">Read More</a>
                    </div>
                </div>
            </div>
            <button className="dark-btn text-2xl px-5 py-4 rounded-2xl">View More</button>
        </div>
    );
}

export default OurWork;
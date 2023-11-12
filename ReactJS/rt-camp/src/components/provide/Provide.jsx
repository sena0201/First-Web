function Provide() {
    return (
        <div id="feature" className="w-5/6 mx-auto flex flex-col items-center pt-24">
            <h1 className="text-5xl font-medium">Feature We Provide</h1>
            <div className="flex flex-wrap gap-6 mt-14">
                <div className="flex justify-between px-10 py-11 shadow-round rounded-xl w-600 h-248 grow shrink-0">
                    <div className="flex flex-col justify-between gap-2 w-3/5">
                        <h2 className="text-3xl font-medium">Emails</h2>
                        <p className="text-xl text-justify">Email is a great place to reach the people who already know your brand and product or service.</p>
                    </div>
                    <div className="w-160 h-160 rounded-full bg-blue grid place-items-center">
                        <img src="src/assets/images/mail.png" alt="" />
                    </div>
                </div>
                <div className="flex justify-between px-10 py-11 shadow-round rounded-xl w-600 h-248 grow shrink-0">
                    <div className="w-160 h-160 rounded-full bg-blue grid place-items-center">
                        <img src="src/assets/images/local.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-end gap-2 w-3/5">
                        <h2 className="text-3xl font-medium">Blog Posts</h2>
                        <p className="text-xl text-justify">The great thing about using your blog posts to promote an offer is that you can tailor the entire piece to the end goal.</p>
                    </div>
                </div>
                <div className="flex justify-between px-10 py-11 shadow-round rounded-xl w-600 h-248 grow shrink-0">
                    <div className="flex flex-col justify-between gap-2 w-3/5">
                        <h2 className="text-3xl font-medium">Ads & Retargeting</h2>
                        <p className="text-xl text-justify">The sole purpose of an ad is to get people to take an action. Otherwise, why spend the money?</p>
                    </div>
                    <div className="w-160 h-160 rounded-full bg-blue grid place-items-center">
                        <img src="src/assets/images/ads.png" alt="" />
                    </div>
                </div>
                <div className="flex justify-between px-10 py-11 shadow-round rounded-xl w-600 h-248 grow shrink-0">
                    <div className="w-160 h-160 rounded-full bg-blue grid place-items-center">
                        <img src="src/assets/images/security.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-end gap-2 w-3/5">
                        <h2 className="text-3xl font-medium">Social Media</h2>
                        <p className="text-xl text-justify">Social media platforms make it easy to guide your followers to take action, like the swipe up option on Instagram stories</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Provide;
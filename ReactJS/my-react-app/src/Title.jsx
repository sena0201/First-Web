
function Title() {
    return (
        <div className="w-3/4 mx-auto flex items-center" style={{ height: 642 }}>
            <div className="w-1/2">
                <h1 className="text-7xl" style={{ color: 'white' }}>Developer</h1>
                <h1 className="text-7xl" style={{ color: 'white' }}>Resources</h1>
                <p className="my-5" style={{ color: '#C4C4C4' }}>A manual for joining the Solana ecossystem. By builders for builders</p>
                <div className="flex">
                    <button className="rounded-3xl text-sm py-2.5 w-32 hover:opacity-80" style={{ background: '#14F195', color: 'black' }}>BUILD NOW</button>
                    <button className="rounded-3xl border-2 border-white text-sm py-2.5 w-40 ml-3" style={{ background: 'black', color: 'white' }}>STACK EXCHANGE</button>
                </div>
            </div>
            <div className="">
                <img src="./src/assets/IMAGE.png" alt="" className="relative z-10"/>
                <div className="rounded-full absolute top-1/4 right-12 opacity-30 blur-3xl z-0" style={{background: '#F087FF', width: 450, height: 450}}></div>
            </div>
        </div>
    )
}

export default Title;


function SideBar({setSubReddit}) {


    return (
        <div className="text-nowrap">
            <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700 cursor-pointer' onClick={() => setSubReddit("HonkaiStarRail")}>
                <div className="flex flex-row text-center items-center space-x-2">
                    <h1 className="text-left text-white text-xl">Image</h1>
                    <h1 className='text-left text-white text-l'>Honkai Star Rail</h1>
                </div>
            </div>
            <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700 cursor-pointer' onClick={() => setSubReddit("WutheringWaves")}>
                <div className="flex flex-row text-center items-center space-x-2">
                    <h1 className="text-left text-white text-xl">Image</h1>
                    <h1 className='text-left text-white text-l'>Wuthering Waves</h1>
                </div>
            </div>

            <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700 cursor-pointer' onClick={() => setSubReddit("ZZZ_Official")}>
                <div className="flex flex-row text-center items-center space-x-2">
                    <h1 className="text-left text-white text-xl">Image</h1>
                    <h1 className='text-left text-white text-l'>Zenless Zone Zero</h1>
                </div>
            </div>
            
        </div>
        
    )
}

export default SideBar;
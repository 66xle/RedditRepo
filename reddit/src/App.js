import { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts.js';
import SideBar from './Components/SideBar.js';

// sticky top-5

function App() {

  const [subReddit, setSubReddit] = useState('');

  return (
    <div className="App h-screen">
      <div className="text-center h-20 bg-slate-900" >
        <h1 className="text-white text-5xl pt-2.5">Reddit App</h1>
      </div>

      <div id="content" className="flex flex-1 flex-col align-top overflow:auto bg-slate-800 lg:flex-row">
        <div id="navBar" className="text-center m-5 shadow-2xl rounded-3xl bg-slate-950 lg:order-2 flex-1 lg:w-2/5 2xl:w-1/5">
            <h2 className="text-slate-600 pt-2.5">SubReddit</h2>
            <SideBar setSubReddit={setSubReddit}/>
        </div>

        <div id="postDisplay" className="text-center m-5 shadow-2xl rounded-3xl bg-slate-850 lg:w-3/5 2xl:max-w-screen-xl">
            <DisplayPosts subReddit={subReddit}/>
        </div>
      </div>
    </div>
  );
}

export default App;


function App() {
  return (
    <div className="App">
      <div className="text-center h-20 bg-slate-900" >
        <h1 className="text-white text-5xl pt-2.5">Reddit App</h1>
      </div>

      <div id="content" className="flex flex-row justify-evenly bg-slate-800">
        <div id="postDisplay" className=" text-center w-4/5 m-5 border">
          <h2 className="text-white">Display</h2>
        </div>

        <div id="navBar" className="text-center w-1/2 h-screen m-5 shadow-2xl rounded-3xl bg-slate-950">
          <h2 className="text-slate-600 pt-2.5">SubReddit</h2>
        </div>
      </div>
      
      

      
    </div>
  );
}

export default App;

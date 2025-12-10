import { useState } from 'react';
import './App.css';
import Header from './Header';
import logo from './Images/bird-colorful-gradient-design-vector_343694-2506.avif'

function App() {
  {/* stage manegment */}
  let [count, setCount] = useState(1);
  let dataView = ()=>{
  setCount(count+1)
  }


  let template = '';
  let [pShow,setpShow]=useState(false);
  if(pShow){
    template=<>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{setpShow(!pShow)}}>
       Hide
      </button>
      <Card/>
    </>
  }
  else{
       template= <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{setpShow(!pShow)}}>
       Show
      </button>
  }


  return (
    <div className="App">
        {template}
       {/* stage manegment */}
       <div><br></br>
      <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded">
       {count}
      </button>
        </div>
      <Header/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={dataView}>
        Button
      </button>

      <img width={200} src={logo}/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;

function Card() {
  return (
    <p>Welcome to Panchagarh</p>
  )
}

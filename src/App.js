
import './App.css';
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>HELLO WORLD</h1>
       <button  onClick={function click(){
        const fs =require('fs');
      fs.writeFile("data.json",'{"name":"John", "age":30, "car":null}',(err)=>{
if(err){
  console.log(err)
}
      });
      
      }}>click me</button>
      </header>
    </div>
  );
}

export default App;

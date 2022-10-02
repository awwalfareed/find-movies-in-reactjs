import { useEffect, useState } from 'react';
import './App.css';


// ======= props ===========
// const Person = (props) => { 
//   return(
//     <>
//     <h1>First Name: {props.name} {props.lastName}, {props.age}</h1>
//     </>
//   )
// }
// function App() {
//   const name = 'Muhammad'
//   return (
//     <div className="App">
//       <h1>Hello </h1>
//       <Person name={name} lastName={'Fareed'} age={'26'}/>
//       <Person />
//     </div>
//   );
// }

//======== useState hooks===========
function App() {
  const [counter, setCounter ] = useState(0);
  const name = 'Muhammad';
  useEffect(()=>{  // this is loading initially
    setCounter(100);
  },[])
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick={() => setCounter((preCount) => preCount - 1)}> + </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((preCount) => preCount + 1)}> + </button>

    </div>
  );
}

export default App;

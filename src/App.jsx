
import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const countriesPromise= fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())

function App() {
  return (
    <>
      <h1>React World On The Go......</h1>
      <Suspense fallback={<h3>Nadir vai going......</h3>}>
      <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add, diff,  mult,  divide} from './utilis/math/math'

function App() {
  const [count, setCount] = useState(0)

  const sum= add(2,2)
  const subs =diff(12,6)
  const multiply=mult(3,3)
  const divided=divide(20,2)

  console.log(sum,subs,multiply,divided)

  return (

    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}




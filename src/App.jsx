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

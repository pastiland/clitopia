{/* 

import './App.css';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
*/}


import './App.css'
import { Suspense, lazy } from "react"
import Loading from "./components/Loading"
//import Home from "./components/Home"
const Home = lazy(() => import('./components/Home'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <div className="App">
      <Home />
    </div>
  </Suspense>
)

export default App

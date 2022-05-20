import { useState, useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import jsonData from './data.json'
import Header from './components/Header'
import {Spinner} from './components/Loading'

const Home = lazy(() => import('./pages/Home'))
const Distination = lazy(() => import('./pages/Distination'))
const Crew = lazy(() => import('./pages/Crew'))
const Technology = lazy(() => import('./pages/Technology'))

function App() {
  const [spaceData, setSpaceData] = useState({})

  useEffect(() => {
    setSpaceData(jsonData)
  }, [])
  
  return (
    <>
      <Header/>
      <Suspense fallback={<Spinner/>} >
        <Routes>
          <Route exact path='/' element={<Home data={spaceData.Home}/>} />
          <Route path='/dist' element={<Navigate to='Moon'/>} />
          <Route path='/dist/:id' element={<Distination data={spaceData.destinations}/>} />
          <Route path='/crew' element={<Navigate to='Douglas-Hurley'/>} />
          <Route path='/crew/:id' element={<Crew data={spaceData.crew}/>} />
          <Route path='/tech' element={<Navigate to='Launch-vehicle'/>} />
          <Route path='/tech/:id' element={<Technology data={spaceData.technology}/>} />
          <Route path='*' element={<p>Not found 404</p>} />
        </Routes>
      </Suspense>      
    </>
  );
}

export default App;

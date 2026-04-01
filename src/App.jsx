import { Suspense } from 'react';
import './App.css';
import Banner from './Components/Banner.jsx';
import Data from './Components/Data.jsx';
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx';
import Pricing from './Components/Pricing.jsx';
import Stats from './Components/Stats.jsx';
import Step from './Components/Step.jsx';
import Workflow from './Components/Workflow.jsx';

const getData = async () => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const dataPromise = getData();

  return (
    <>
      <div className=''>
        {/* <div className="max-w-[1200px] mx-auto">
          <Navbar />
        </div>

        <div className="max-w-[1200px] mx-auto py-20">
          <Banner />
        </div> 

        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <Stats/>
        </div> */}

        <Suspense fallback="Data Loading...">
          <div className="max-w-[1200px] mx-auto">
            <Data dataPromise={dataPromise} />
          </div>
        </Suspense>



        {/*  <div className="max-w-[1200px] mx-auto py-28">
          <Step/>
        </div> 

        <div className="max-w-[1200px] mx-auto py-28">
          <Pricing/>
        </div>

        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <Workflow/>
        </div>

        <div className="bg-[#101727]">
          <Footer/>
        </div> */}

      </div>
    </>
  )
}

export default App

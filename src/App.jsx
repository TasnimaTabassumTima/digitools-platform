import { Suspense, useState } from 'react';
import './App.css';
import Banner from './Components/Banner.jsx';
import Data from './Components/Data.jsx';
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx';
import Pricing from './Components/Pricing.jsx';
import Stats from './Components/Stats.jsx';
import Step from './Components/Step.jsx';
import Workflow from './Components/Workflow.jsx';
import AddedCard from './Components/AddedCard.jsx';
import Tools from './Components/Tools.jsx';

const getData = async () => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const dataPromise = getData();
  const [hide, setHide] = useState("Products")
  const [carts, setCarts] = useState([]);
  // const [add, setAdd] = useState([]);
  // const exists  = carts.some(item => item.id === data.id);
  // console.log(carts);
  return (
    <>
      <div className=''>
        <div className="max-w-[1200px] mx-auto">
          <Navbar carts = {carts}/>
        </div>

        <div className="max-w-[1200px] mx-auto py-20">
          <Banner />
        </div> 

        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <Stats/>
        </div>

        <div className="max-w-[1200px] mx-auto ">
          <Tools setHide={setHide} carts = {carts}/>
        </div>

        {
          hide === "Products" && <Suspense fallback="Data Loading...">
            <Data dataPromise={dataPromise} carts = {carts} setCarts={setCarts}/>
          </Suspense>
        }
        {
          hide === "Cart" && <Suspense fallback="Added Card  Loading...">
            <AddedCard carts = {carts} setCarts={setCarts}/>
          </Suspense>
        }


         <div className="max-w-[1200px] mx-auto py-28">
          <Step />
        </div>

        <div className="max-w-[1200px] mx-auto py-28">
          <Pricing />
        </div>

        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <Workflow />
        </div>

        <div className="bg-[#101727]">
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App

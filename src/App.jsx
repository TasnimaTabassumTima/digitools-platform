import './App.css'
import Banner from './Components/Banner.jsx'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Pricing from './Components/Pricing.jsx'
import Stats from './Components/Stats.jsx'
import Step from './Components/Step.jsx'

function App() {

  return (
    <>
      <div className='space-y-[85px]'>
        {/* <div className="max-w-[1200px] mx-auto">
          <Navbar />
        </div>

        <div className="max-w-[1200px] mx-auto">
          <Banner />
        </div> 

        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <Stats/>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <Step/>
        </div> */}

        <div className="max-w-[1200px] mx-auto">
          <Pricing/>
        </div>



        <div className="bg-[#101727]">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App

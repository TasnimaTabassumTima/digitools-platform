import './App.css'
import Banner from './Components/Banner.jsx'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {

  return (
    <>
      <div className='space-y-[85px]'>
        <div className="max-w-[1200px] mx-auto">
          <Navbar />
        </div>
        <div className="max-w-[1200px] mx-auto">
          <Banner />
        </div>
        <div className="bg-[#101727]">
          <Footer/>
        </div>
      

        
      </div>
    </>
  )
}

export default App

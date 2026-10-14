import './App.css'

import Navitem from './componants/Navitem'
import Sidebar from './componants/Sidebar1'
import Productcard from './componants/Productcard'
import Productsection from './componants/Productsection'
import Footer from './componants/Footer'

function App() {
  return (
    <div className="page">

      {/* Navbar */}
      <div className="navsection">
        <Navitem />
      </div>

      {/* Main Content */}
      <div className="main">

        {/* Sidebar */}
        <div className="sidebar1">
          <Sidebar />
        </div>

        {/* Right Content */}
        <div className="content">
          <Productcard />
          <Productsection />
        </div>

      </div>

      {/* Footer */}
      <div className="footersection">
        <Footer />
      </div>

    </div>
  )
}

export default App
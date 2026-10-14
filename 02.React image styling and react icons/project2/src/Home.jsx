import React from 'react'
// import image1 from './images/image1.jpg'
import { BsBrowserFirefox } from "react-icons/bs";



const Home = () => {
  return (
    <>
    <div className="card" style={{ width: '18rem' }}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/%E9%BB%84%E6%9E%9C%E6%A0%91%E7%80%91%E5%B8%83_2026-07-31_01.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

 <div className="card" style={{ width: '18rem' }}>
  <img src="" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <BsBrowserFirefox  size={30} color="blue"/>
    <BsBrowserFirefox  size={30}/>

    
  </div>
</div>
    
    
    </>
  
  )
}

export default Home
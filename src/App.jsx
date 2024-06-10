import { useState } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from "./Components/Navbar/Navbar";
import Programes from './Components/Programes/Programes';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/Videos/VideoPlayer';

function App() {

  const [play, setPlay] = useState(false)
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle="Our Program" title={"What We Offer"}/>
        <Programes/>
        <About setPlay={setPlay} />
        <Title subTitle="Gallery" title={"Campus Photos"}/>
        <Campus/>
        <Title subTitle="Testimonials" title={'What Student Says'}/>
        <Testimonial/>
        <Title subTitle="Contact Us" title={'Get in Touch'}/>
        <Contact/>
        <Footer/>
        <VideoPlayer play={play} setPlay={setPlay} />
      </div>
    </div>
  )
}
export default App;
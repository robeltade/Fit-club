import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Plans from './components/Plans/Plans';
import Reasons from './components/Reasons/Reasons'
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Testimonial from './components/Testimonials/Testimonial'
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reasons />
          <Plans />
          <Testimonial />
          <Join /> 
          <Footer />   
          
    </div>
  );
}

export default App;

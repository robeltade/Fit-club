import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Plans from './components/Plans/Plans';
import Reasons from './components/Reasons/Reasons'
import Join from './components/Join/Join';
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
          
    </div>
  );
}

export default App;

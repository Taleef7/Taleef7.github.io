import './App.css'
// import About from './components/About'
// import Contact from './components/Contact'
// import Home from './components/Home'
// import Navbar from './components/Navbar'
// import Projects from './components/Projects'
// import Work from './components/Work'

import React, { Suspense } from 'react';

const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Work = React.lazy(() => import('./components/Work'));
const Contact = React.lazy(() => import('./components/Contact'));
const Home = React.lazy(() => import('./components/Home'));
const Navbar = React.lazy(() => import('./components/Navbar'));


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Work defaultColor="bg-cyan-500" />
        <Contact />
      </Suspense>
    </div>
  )
}

export default App

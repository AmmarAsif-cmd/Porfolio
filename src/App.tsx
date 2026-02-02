import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Learning from './components/sections/Learning';
import Education from './components/sections/Education';
import Footer from './components/sections/Footer';

import WorkingStyle from './components/sections/WorkingStyle';

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Learning />
      <WorkingStyle />
      <Footer />
    </main>
  );
}

export default App;

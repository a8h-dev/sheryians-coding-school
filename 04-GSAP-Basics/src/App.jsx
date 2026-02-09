import '/src/App.css'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App = () => {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",
        start: "top top",
        markers: true,
        scrub: true,
        endTrigger: "#section-4",
        end: "top top"
      }
    })

    tl.to('html', {
      backgroundColor: "#e51809"
    })
    .to('html', {
      backgroundColor: '#559955'
    })
    .to('html', {
      backgroundColor: '#2f09c4'
    })
    
  }, [])

  return (
    <main>
      <section id='section-1'>Section 1</section>
      <section id='section-2'>Section 2</section>
      <section id='section-3'>Section 3</section>
      <section id='section-4'>Section 4</section>
    </main>
  );
}

export default App;

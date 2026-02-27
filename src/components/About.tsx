import chef from '../assets/chef.jpg';
import { useState, useEffect, useRef } from 'react';


export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);
    useEffect(() => {
      const el = aboutRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry], observerInstance) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerInstance.unobserve(entry.target); // stop observing
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(el);

      return () => observer.disconnect();
    }, []);
    return (
        <section id='about' ref={aboutRef} className={`container py-16 px-8 text-center ${isVisible ? 'animate-fadeIn' : ''}`}>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
                <div 
                    className={` transition-all duration-700 ease-out 
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                        
                        `}
                >

                    <img src={chef} alt="Chef" className="w-full object-cover h-100 rounded-2xl mb-6" />
                </div>
                
                <div className={` transition-all duration-500 ease-out delay-1000
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`
                }>
                    <p className="text-lg mb-6">At Naija Bites, we are passionate about sharing the vibrant flavors of Nigerian cuisine with the world. Our mission is to provide an authentic dining experience that celebrates the rich culinary traditions of Nigeria.</p>
                    <p className="text-lg">Whether you're craving spicy jollof rice, savory suya, or sweet puff-puff, Naija Bites has something for everyone. Join us on a flavorful journey through Nigeria's diverse food culture!</p>
                </div>
            
            </div>

        </section>
    )
}
import hero from '../assets/hero.jpg';
import { useState, useEffect } from 'react';


export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // Delay of 500ms before showing the hero section

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id='home' className="hero min-h-screen max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2  text-center md:text-left items-center gap-10">
            <div className={` transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Welcome to Naija Bites!</h1>
                <p className="text-lg mb-6">Experience the authentic flavors of Nigeria with our delicious dishes.</p>
                <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                    <a href='https://wa.me/2349163875845' className="btn btn-primary">Order on WhatsApp</a>
                    <a href="#menu" className="btn btn-secondary">Explore menu</a>
                </div>
            </div>
            <div className={` transition-all duration-1000 ease-out delay-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}>
                <img src={hero} alt="Hero" className="w-full object-cover h-72 md:h-96 rounded-2xl" />

            </div>
        </section>
    )
}
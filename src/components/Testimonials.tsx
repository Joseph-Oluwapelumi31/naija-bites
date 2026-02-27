import { testimonials } from "../data/testimonials.ts";
import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
    const [isVisible, setIsVisible] = useState(false);
    const testimonialsRef = useRef(null);

    useEffect(() => {
      const el = testimonialsRef.current;
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
    <section id="testimonials" ref={testimonialsRef} className={`py-16 ${isVisible ? 'animate-fadeIn' : ''}`}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Customer Reviews
        </h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">
          Real feedback from people who’ve tried our meals and desserts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-500 ease-out delay-1000
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`
                }
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border border-rose-200"
                />
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-600">Customer</p>
                </div>
              </div>

              <p className="text-slate-700 mt-4 leading-relaxed">
                “{t.feedback}”
              </p>

              <div className="mt-4 text-rose-600 text-sm font-semibold">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
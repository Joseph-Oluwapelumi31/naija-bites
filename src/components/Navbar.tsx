import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="container flex items-center justify-between py-4">
        
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-slate-900">
          Naija <span className="text-rose-600">Bites</span>
        </a>


        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-slate-700 hover:text-rose-600 transition">
            About
          </a>
          <a href="#menu" className="text-slate-700 hover:text-rose-600 transition">
            Menu
          </a>
          <a href="#contact" className="text-slate-700 hover:text-rose-600 transition">
            Contact
          </a>

          {/* CTA */}
          <a
            href="https://wa.me/2349163875845"
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
          >
            Order Now
          </a>
        </nav>
        {/* Mobile Menu Button */}
         <button
          className="md:hidden flex flex-col gap-1 hover:bg-gray-100 p-2 rounded transition cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-slate-900"></span>
          <span className="w-6 h-0.5 bg-slate-900"></span>
          <span className="w-6 h-0.5 bg-slate-900"></span>
        </button>
         

      </div>
      {isMenuOpen && (
            <div className="md:hidden flex   fixed inset-0 z-50 right-0">
              <div className="w-[55%] bg-black/10 backdrop-blur-sm relative">
                    <button onClick={()=> setIsMenuOpen(false)} className="rounded-full absolute right-4 top-4 bg-white hover:bg-gray-100 p-2 text-center w-10 h-10 cursor-pointer  ">X</button>
            </div>
              <div className="container flex flex-col py-4 gap-4 w-[45%] bg-white ">
                <a href="#home"className="hover:text-rose-600 transition"  onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="hover:text-rose-600 transition" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#menu"className="hover:text-rose-600 transition"  onClick={() => setIsMenuOpen(false)}>Menu</a>
                <a href="#contact"className="hover:text-rose-600 transition"  onClick={() => setIsMenuOpen(false)}>Contact</a>
                <a
                  href="https://wa.me/2349163875845"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Order Now
                </a>
              </div>
            </div>
        )}
    </header>
  );
}
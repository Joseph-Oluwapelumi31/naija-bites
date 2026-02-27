import {menuItems} from '../data/menu.ts'


export default function Menu() {

    
    return (
        <section id="menu" className="menu py-16 text-center">
            <div className='container'>
                <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
                    {menuItems.map((item) => (
                      <div key={item.id} className="bg-white border w-full border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        {/* Image */}
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-48 object-cover"
                        />

                        {/* Content */}
                        <div className="p-5 text-left">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-slate-900">{item.name}</h3>
                            <span className="text-rose-600 font-bold">
                              ₦{item.price.toLocaleString()}
                            </span>
                          </div>
                    
                          <p className="text-sm text-slate-600">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
            
        </section>
    )
}
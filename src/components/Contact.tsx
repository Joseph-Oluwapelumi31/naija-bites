export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Contact Us
        </h2>

        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">
          Freshly prepared meals and desserts for every occasion.
        </p>

        {/* WhatsApp CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/2349163875845"
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
          >
            Chat Us on WhatsApp
          </a>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-left">
            <h4 className="font-semibold text-slate-900 mb-2">Phone</h4>
            <a
              href="tel:+2349163875845"
              className="text-rose-600 hover:text-rose-700"
            >
              +234 916 387 5845
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-left">
            <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
            <a
              href="mailto:joluwapelumi027@gmail.com"
              className="text-rose-600 hover:text-rose-700"
            >
              joluwapelumi027@gmail.com
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-left">
            <h4 className="font-semibold text-slate-900 mb-2">Location</h4>
            <p className="text-slate-600">
              Ikorodu, Lagos, Nigeria
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#edf2f4] relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            #2b2d42 2px,
            #2b2d42 4px
          )`
        }}></div>
      </div>

      <div className="container-vintage relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2b2d42] mb-4 vintage-text">
            OUR SERVICES
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Haircut */}
          <div className="vintage-card p-6 hover:transform hover:scale-105 transition-all duration-300 halftone-shadow">
            <div className="w-20 h-20 mb-6 flex items-center justify-center mx-auto">
              <img 
                src="/images/services/haircut.jpg" 
                alt="Classic Haircut"
                className="w-full h-full object-cover rounded-lg border-2 border-[#8d99ae]/30"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2b2d42] text-center">CLASSIC HAIRCUT</h3>
            <p className="text-sm mb-4 opacity-80 text-center">Professional cuts with attention to detail</p>
            <div className="text-3xl font-black text-[#ef233c] text-center">$25</div>
          </div>

          {/* Beard Trim */}
          <div className="vintage-card p-6 hover:transform hover:scale-105 transition-all duration-300 halftone-shadow">
            <div className="w-20 h-20 mb-6 flex items-center justify-center mx-auto">
              <img 
                src="/images/services/beard-trim.jpg" 
                alt="Beard Trim"
                className="w-full h-full object-cover rounded-lg border-2 border-[#8d99ae]/30"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2b2d42] text-center">BEARD TRIM</h3>
            <p className="text-sm mb-4 opacity-80 text-center">Shape and style your beard to perfection</p>
            <div className="text-3xl font-black text-[#ef233c] text-center">$15</div>
          </div>

          {/* Shave */}
          <div className="vintage-card p-6 hover:transform hover:scale-105 transition-all duration-300 halftone-shadow">
            <div className="w-20 h-20 mb-6 flex items-center justify-center mx-auto">
              <img 
                src="/images/services/hot-shave.jpg" 
                alt="Hot Shave"
                className="w-full h-full object-cover rounded-lg border-2 border-[#8d99ae]/30"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2b2d42] text-center">HOT SHAVE</h3>
            <p className="text-sm mb-4 opacity-80 text-center">Traditional straight razor shave</p>
            <div className="text-3xl font-black text-[#ef233c] text-center">$30</div>
          </div>

          {/* Combo */}
          <div className="vintage-card p-6 hover:transform hover:scale-105 transition-all duration-300 halftone-shadow">
            <div className="w-20 h-20 mb-6 flex items-center justify-center mx-auto">
              <img 
                src="/images/services/combo.jpg" 
                alt="The Works Combo"
                className="w-full h-full object-cover rounded-lg border-2 border-[#8d99ae]/30"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2b2d42] text-center">THE WORKS</h3>
            <p className="text-sm mb-4 opacity-80 text-center">Haircut, beard trim, and hot shave</p>
            <div className="text-3xl font-black text-[#ef233c] text-center">$60</div>
          </div>
        </div>
      </div>
    </section>
  );
} 
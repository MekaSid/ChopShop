export default function Crew() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2b2d42] relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            #8d99ae 2px,
            #8d99ae 4px
          )`
        }}></div>
      </div>

      <div className="container-vintage relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#edf2f4] mb-4 vintage-text">
            MEET JOSH
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Josh's Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#d4af37] shadow-2xl halftone-shadow">
                <img 
                  src="/images/crew/josh.jpg" 
                  alt="Josh - The Chop Shop Barber"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 text-[#ef233c] text-3xl">⚔</div>
              <div className="absolute -bottom-4 -left-4 text-[#ef233c] text-3xl">⚔</div>
            </div>
          </div>

          {/* Josh's Description */}
          <div className="flex-1 text-center lg:text-left">
            <div className="vintage-card p-8 bg-[#edf2f4]">
              <h3 className="text-3xl font-black text-[#2b2d42] mb-6">
                HI, I'M JOSH
              </h3>
              <p className="text-[#2b2d42] text-lg leading-relaxed mb-6">
                I'm the owner and master barber at The Chop Shop. With years of experience in the craft, 
                I specialize in classic cuts, modern fades, and everything in between. Every client who 
                walks through our doors becomes part of our family.
              </p>
              <p className="text-[#2b2d42] text-lg leading-relaxed mb-8">
                I believe in quality over quantity - taking the time to understand what you want and 
                delivering a cut that makes you feel confident and sharp. Whether you're looking for 
                a traditional gentleman's cut or a contemporary style, I'm here to make it happen.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <span className="bg-[#2b2d42] text-[#edf2f4] px-4 py-2 rounded-full text-sm font-bold border-2 border-[#ef233c]">
                  CLASSIC CUTS
                </span>
                <span className="bg-[#2b2d42] text-[#edf2f4] px-4 py-2 rounded-full text-sm font-bold border-2 border-[#ef233c]">
                  MODERN FADES
                </span>
                <span className="bg-[#2b2d42] text-[#edf2f4] px-4 py-2 rounded-full text-sm font-bold border-2 border-[#ef233c]">
                  BEARD TRIMS
                </span>
                <span className="bg-[#2b2d42] text-[#edf2f4] px-4 py-2 rounded-full text-sm font-bold border-2 border-[#ef233c]">
                  HOT SHAVES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
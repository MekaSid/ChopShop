export default function WalkIns() {
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
            WALK-INS WELCOME
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="vintage-card p-8 bg-[#edf2f4]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-[#ef233c] rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-[#d4af37]">
                <div className="text-white text-3xl">✂️</div>
              </div>
              <h3 className="text-3xl font-black text-[#2b2d42] mb-4">
                NO APPOINTMENT NECESSARY
              </h3>
              <p className="text-[#2b2d42] text-lg leading-relaxed">
                Just walk in and get a fresh cut. We're here to serve you with quality cuts and great conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2b2d42] rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-[#ef233c]">
                  <div className="text-[#edf2f4] text-2xl">⚡</div>
                </div>
                <h4 className="text-[#2b2d42] font-black text-lg mb-2">FAST SERVICE</h4>
                <p className="text-[#2b2d42] opacity-80 text-sm">
                  Quick, quality cuts without the wait
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2b2d42] rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-[#ef233c]">
                  <div className="text-[#edf2f4] text-2xl">🎯</div>
                </div>
                <h4 className="text-[#2b2d42] font-black text-lg mb-2">EXPERT CUTS</h4>
                <p className="text-[#2b2d42] opacity-80 text-sm">
                  Professional barber with years of experience
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2b2d42] rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-[#ef233c]">
                  <div className="text-[#edf2f4] text-2xl">💬</div>
                </div>
                <h4 className="text-[#2b2d42] font-black text-lg mb-2">GREAT VIBES</h4>
                <p className="text-[#2b2d42] opacity-80 text-sm">
                  Relaxed atmosphere with good conversation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
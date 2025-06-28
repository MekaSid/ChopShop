export default function Info() {
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
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2b2d42] mb-4 vintage-text">
            VISIT US
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="vintage-card p-8 text-center halftone-shadow">
            <div className="w-20 h-20 bg-[#2b2d42] rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-[#ef233c]">
              <img 
                src="/images/info/location.png" 
                alt="Location"
                className="w-12 h-12 object-contain filter brightness-0 invert"
              />
            </div>
            <h3 className="text-2xl font-black text-[#2b2d42] mb-4">
              LOCATION
            </h3>
            <p className="text-[#2b2d42] leading-relaxed">
              123 Main Street<br />
              San Luis Obispo, CA 93401
            </p>
          </div>

          {/* Hours */}
          <div className="vintage-card p-8 text-center halftone-shadow">
            <div className="w-20 h-20 bg-[#2b2d42] rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-[#ef233c]">
              <img 
                src="/images/info/hours.png" 
                alt="Hours"
                className="w-12 h-12 object-contain filter brightness-0 invert"
              />
            </div>
            <h3 className="text-2xl font-black text-[#2b2d42] mb-4">
              HOURS
            </h3>
            <p className="text-[#2b2d42] leading-relaxed">
              Tue-Fri: 9AM-6PM<br />
              Sat: 9AM-4PM<br />
              Sun-Mon: Closed
            </p>
          </div>

          {/* Walk-ins */}
          <div className="vintage-card p-8 text-center halftone-shadow">
            <div className="w-20 h-20 bg-[#2b2d42] rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-[#ef233c]">
              <img 
                src="/images/info/walkin.png" 
                alt="Walk-ins"
                className="w-12 h-12 object-contain filter brightness-0 invert"
              />
            </div>
            <h3 className="text-2xl font-black text-[#2b2d42] mb-4">
              WALK-INS
            </h3>
            <p className="text-[#2b2d42] leading-relaxed">
              No appointment needed<br />
              Just walk in and get<br />
              that fresh cut!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
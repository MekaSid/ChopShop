'use client';

export default function Hours() {
  const hours = [
    { day: "MONDAY", hours: "CLOSED" },
    { day: "TUESDAY", hours: "9:00 AM - 6:00 PM" },
    { day: "WEDNESDAY", hours: "9:00 AM - 6:00 PM" },
    { day: "THURSDAY", hours: "9:00 AM - 6:00 PM" },
    { day: "FRIDAY", hours: "9:00 AM - 6:00 PM" },
    { day: "SATURDAY", hours: "9:00 AM - 4:00 PM" },
    { day: "SUNDAY", hours: "CLOSED" }
  ];

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
            HOURS OF OPERATION
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="vintage-card p-8">
            <div className="space-y-4">
              {hours.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-[#8d99ae]/30 last:border-b-0">
                  <span className="text-[#2b2d42] font-black text-lg tracking-wider">
                    {item.day}
                  </span>
                  <span className={`font-bold text-lg ${item.hours === "CLOSED" ? "text-[#ef233c]" : "text-[#2b2d42]"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-[#ef233c] text-center">
              <p className="text-[#2b2d42] font-bold text-lg mb-2">
                WALK-INS WELCOME
              </p>
              <p className="text-[#2b2d42] opacity-80">
                No appointment necessary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
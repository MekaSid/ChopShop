export default function Crew() {
  const crew = [
    {
      name: "Mike",
      title: "Mike \"Fade King\"",
      specialty: "Specializes in fades and modern cuts"
    },
    {
      name: "Sarah",
      title: "Sarah \"Razor Queen\"",
      specialty: "Master of straight razor shaves"
    },
    {
      name: "Tony",
      title: "Tony \"Beard Boss\"",
      specialty: "Beard styling and grooming expert"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#edf2f4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-4xl sm:text-5xl font-bold text-[#2b2d42] mb-4">
            Meet the Crew
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#2b2d42] to-transparent"></div>
            <div className="mx-4 text-[#2b2d42] text-xl">•</div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#2b2d42] to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {crew.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-[#8d99ae]/20 border-2 border-[#8d99ae]/30 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <div className="text-[#8d99ae] text-sm font-medium">{member.name}</div>
              </div>
              <h3 className="font-lora text-2xl font-bold text-[#2b2d42] mb-2">{member.title}</h3>
              <p className="text-[#2b2d42] opacity-80">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
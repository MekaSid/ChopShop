export default function Reviews() {
  const reviews = [
    {
      text: "Best men's stylist in SLO, very skilled and personable cool dude too! Convenient location and parking. Easy to book via text.",
      author: "Kent W.",
      initials: "KW"
    },
    {
      text: "Best Barber in town! Josh single handedly runs the Chop Shop and treats every single one of his customers as a friend and a top priority.",
      author: "Luke S.",
      initials: "LS"
    },
    {
      text: "First time customer. Excellent haircut. Josh knows his stuff. Took the time to evaluate my hair and what I wanted. He had great suggestions and executed them spot on. Josh at The Chop Shop is your man. I will be back!",
      author: "Ted W.",
      initials: "TW"
    },
    {
      text: "I can't say enough good things about Josh and his shop. If you're looking for quality, this is the place.",
      author: "Steve W.",
      initials: "SW"
    },
    {
      text: "I've been going to Josh to get my hair cut since I was a freshman at Cal Poly. I would highly recommend Josh to any guys out there looking to get a good quality cut.",
      author: "Kabir W.",
      initials: "KW"
    },
    
    {
      text: "Josh is a master craftsman. He gave me some different options for my thinning hair and I ended up with the best haircut I've had since I had a full head of hair.",
      author: "Dave S.",
      initials: "DS"
    }
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
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="flex overflow-x-auto gap-8 py-4 scrollbar-hide">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="vintage-card p-8 w-80 flex-shrink-0 transform hover:scale-105 transition-transform duration-300 halftone-shadow"
            >
              <div className="flex text-[#ef233c] mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">★</span>
                ))}
              </div>
              <p className="text-[#2b2d42] mb-6 italic leading-relaxed font-medium">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2b2d42] rounded-full mr-4 flex items-center justify-center border-2 border-[#ef233c]">
                  <div className="text-[#edf2f4] text-sm font-bold">{review.initials}</div>
                </div>
                <p className="text-[#2b2d42] font-black text-lg">{review.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
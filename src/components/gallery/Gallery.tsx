export default function Gallery() {
  const galleryItems = [
    { title: "HAIRCUTS", image: "/images/gallery/haircut-1.jpg" },
    { title: "FLASH ART", image: "/images/gallery/flash-1.jpg" },
    { title: "BEHIND THE CHAIR", image: "/images/gallery/behind-chair-1.jpg" },
    { title: "HAIRCUTS", image: "/images/gallery/haircut-2.jpg" },
    { title: "FLASH ART", image: "/images/gallery/flash-2.jpg" },
    { title: "BEHIND THE CHAIR", image: "/images/gallery/behind-chair-2.jpg" }
  ];

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
            GALLERY
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden vintage-card halftone-shadow">
              <div className="aspect-square relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2d42]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-[#edf2f4] font-black text-xl tracking-wider">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
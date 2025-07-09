const badges = [
  { src: '/images/cert1.png', alt: 'cert1' },
  { src: '/images/cert2.png', alt: 'cert2' },
  { src: '/images/cert3.png', alt: 'cert3' },
  { src: '/images/cert5.png', alt: 'cert5' },
  { src: '/images/cert4.png', alt: 'cert4' },
  
];

const Badges = () => {
  return (
    <section className=" py-12 px-6 text-center ">
      <h2 className="text-2xl font-bold mb-8">Trusted & Certified</h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {badges.map(({ src, alt }) => (
          <div
            key={alt}
            className="p-2 rounded-xl shadow-[0_0_15px_3px_rgba(0,191,255,0.2)] transition duration-300  hover:shadow-xl transition"
          >
            <img
              src={src}
              alt={alt}
              className="h-28 md:h-36 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Badges;
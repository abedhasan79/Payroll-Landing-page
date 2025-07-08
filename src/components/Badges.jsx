const badges = [
  { src: '/images/cert1.png', alt: 'cert1' },
  { src: '/images/cert2.png', alt: 'cert2' },
  { src: '/images/cert3.png', alt: 'cert3' },
];

const Badges = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 text-center">
      <h2 className="text-2xl font-bold mb-8">Trusted & Certified</h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {badges.map(({ src, alt }) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className="h-28 md:h-36 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Badges;
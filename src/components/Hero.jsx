import React from 'react';

const Hero = () => {
  const backgroundImage = 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1470&q=80';

  const buttonColor = 'rgb(105, 175, 255)'; // neon pink
  const buttonHoverColor = 'rgb(43, 106, 131)'; // light pink

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: 'white',
    boxShadow: '0 0 10px 3px rgb(105, 175, 255)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: buttonHoverColor,
    color: 'white',
    boxShadow: '0 0 14px 5px rgb(43, 106, 131)',
  };

  const [hover, setHover] = React.useState(false);

  return (
    <section
      className="relative flex flex-col justify-center items-center text-center py-20 px-4 text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        style={{ zIndex: 0 }}
      ></div>

      {/* Content */}
      <div style={{ zIndex: 1, maxWidth: '700px' }}>
        <h1
          className="text-5xl font-bold mb-4"
          style={{ textShadow: '0 0 12px rgb(105, 175, 255)' }}
        >
          Stress-Free Payroll for Canadian Businesses
        </h1>
        <p
          className="text-xl mb-8"
          style={{ textShadow: '0 0 8px rgb(105, 175, 255)' }}
        >
          We manage your entire payroll process from pay runs and direct deposits to ROEs and year-end T4s so you can focus on growing your business.
        </p>
        <a
          href='#contact'
          style={hover ? buttonHoverStyle : buttonStyle}
          className="font-semibold py-3 px-6 rounded shadow"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Book a Free Payroll Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;
import { useState, useEffect, useRef } from 'react';

const SlideshowSection = () => {
  const images = [
    'https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609082/522693189_122255641076027492_3650649105229857777_n_qqlnur.jpg',
    'https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609081/523950962_122255641250027492_8704299748624538310_n_sfpniu.jpg',
    'https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609080/521654740_122255642348027492_6303097874633533415_n_goniov.jpg',
    'https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609080/519614992_122255640944027492_1735523623702535475_n_hiufvs.jpg',
    'https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609080/520405707_122255640770027492_8561631394880404849_n_lywqid.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('slideshow');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible, images.length]);

  return (
    <section id="slideshow" className="relative py-8 bg-background overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={`bg-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                objectPosition: 'top',
                margin: 0,
                padding: 0
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Main Slideshow Container - Centered */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="relative w-full max-w-md">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <img
                src={image}
                alt={`Kenneth and Jeizl moments ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'top',
                  margin: 0,
                  padding: 0
                }}
                loading={index === 0 ? 'eager' : 'lazy'}
                data-testid={`img-slideshow-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Progress indicators */}
      <div className="relative z-10 flex justify-center space-x-2 pt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#ffffff] w-8'
                : 'bg-[#333333]/70 hover:bg-[#ffffff]/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SlideshowSection;
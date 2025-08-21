const StorySection = () => {
  const storyImages = [
    'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332473/1_o2vvio.jpg',
    'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332473/30_qv2pfq.jpg',
    'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332475/FB_IMG_1755006768298_tmg4h6.jpg',
    'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332476/FB_IMG_1755006776306_h1nlot.jpg',
    'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332476/FB_IMG_1755006792327_eybq8j.jpg',
    'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332476/FB_IMG_1755006795248_uyzktq.jpg',
    'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332483/IMG_0055_vj2dbt.jpg',
    'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332483/IMG_0060_bmpm1i.jpg',
    'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332484/IMG_0066_o7tiol.jpg'
  ];

  return (
    <section id="story" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-script italic text-primary mb-8" data-testid="text-story-title">
            Our Story
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Story Text */}
          <div className="space-y-8">
            <div className="max-w-none relative">
              {/* Decorative elements */}
              <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-[#4e403b] to-[#4e403b]/30"></div>

              <div className="bg-card/30 border-l-4 border-[#4e403b]/40 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-intro">
                  We met in the most unexpected way—two lives crossing paths at just the right moment, as if the universe had quietly planned it all along. From that day, our journey has been filled with laughter, adventures, and the kind of love that grows stronger with every challenge and triumph we face together.
                </p>
              </div>

              <div className="bg-card/20 border-l-4 border-[#4e403b]/30 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-details">
                  We've run side by side—sometimes literally, sometimes through life's twists and turns—always cheering each other on. What makes our relationship truly ours is the balance between being each other's safe place and biggest motivator, the way we can be silly one minute and deeply connected the next.
                </p>
              </div>

              <div className="bg-card/30 border-l-4 border-[#4e403b]/40 pl-8 pr-6 py-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground/85 leading-relaxed font-body" data-testid="text-story-courtship">
                  This wedding isn't just a celebration of our love, but a beautiful reminder of the road we've traveled together and the endless path ahead, hand in hand.
                </p>
              </div>


            </div>
          </div>

          {/* Artistic Photo Collage */}
          <div className="relative h-[600px] w-full max-w-4xl mx-auto">
            {/* Background Image - Large */}
            <div className="absolute top-8 left-8 w-64 h-80 animate-fade-scale" style={{ animationDelay: '0.2s' }}>
              <img
                src={storyImages[0]}
                alt="Kenneth and Jeizl story moment 1"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
                data-testid="img-story-collage-1"
              />
            </div>

            {/* Top Right Image - Medium */}
            <div className="absolute top-4 right-12 w-48 h-32 animate-fade-scale" style={{ animationDelay: '0.4s' }}>
              <img
                src="https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332484/IMG_0066_o7tiol.jpg"
                alt="Kenneth and Jeizl story moment 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
                data-testid="img-story-collage-2"
              />
            </div>

            {/* Central Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 bg-background/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-4xl md:text-5xl font-script italic text-primary" data-testid="text-story-quote-main">
                The Vow
              </h3>
            </div>

            {/* Bottom Left Image - Medium */}
            <div className="absolute bottom-8 left-4 w-56 h-40 animate-fade-scale" style={{ animationDelay: '0.6s' }}>
              <img
                src={storyImages[2]}
                alt="Kenneth and Jeizl story moment 3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
                data-testid="img-story-collage-3"
              />
            </div>

            {/* Bottom Right Image - Small accent */}
            <div className="absolute bottom-12 right-8 w-40 h-28 animate-fade-scale" style={{ animationDelay: '0.8s' }}>
              <img
                src={storyImages[3]}
                alt="Kenneth and Jeizl story accent"
                className="w-full h-full object-cover rounded-lg shadow-md opacity-80 grayscale"
                loading="lazy"
                data-testid="img-story-collage-accent"
              />
            </div>

            {/* Additional Image */}
            <div className="absolute top-1/4 right-4 w-36 h-24 animate-fade-scale" style={{ animationDelay: '1s' }}>
              <img
                src={storyImages[4]}
                alt="Kenneth and Jeizl story moment"
                className="w-full h-full object-cover rounded-lg shadow-md"
                loading="lazy"
                data-testid="img-story-collage-additional"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
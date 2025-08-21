const DressCodeSection = () => {
  const dressCodeColors = [
    { color: '#D2B48C', hex: '#D2B48C' },
    { color: '#FFCBBC', hex: '#FFCBBC' },
    { color: '#DDB398', hex: '#DDB398' },
    { color: '#F5F5DC', hex: '#F5F5DC' },
    { color: '#F8C5AD', hex: '#F8C5AD' }
  ];

  return (
    <section id="dresscode" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-[#333333] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-[#333333] rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-[#333333]/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-[#333333]/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-[#333333]/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-[#333333]/30 rounded-full"></div>

          <h2 className="font-script italic text-primary mb-8 text-[48px]" data-testid="text-dresscode-title">
            Gabay sa Kasuotan
          </h2>
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 max-w-sm mx-auto relative">
            <p className="text-lg font-display font-bold text-primary mb-1">
              PORMAL NA KASUOTAN
            </p>
            <p className="text-sm text-muted-foreground">
              Ang elegansya ay walang katumbas na kaganda
            </p>
          </div>
        </div>

        {/* Dress Code Requirements */}
        <div className="space-y-16 mb-16">
          {/* Principal Sponsors */}
          <div className="animate-fade-up">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover-elegant">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-display font-semibold text-primary mb-6">
                  PARA SA MGA NINONG AT NINANG
                </h3>
                <div className="space-y-4 text-left max-w-md mx-auto">
                  <p className="text-lg font-medium text-foreground">
                    <span className="font-bold">Ninong:</span> Barong Tagalog, Itim na Pantalon
                  </p>
                  <p className="text-lg font-medium text-foreground">
                    <span className="font-bold">Ninang:</span> Modernong Filipiñana
                  </p>
                  <p className="text-base text-muted-foreground">Kulay: Beige/Kayumanggi</p>
                </div>
                <img 
                  src="https://res.cloudinary.com/dhasfjr8x/image/upload/v1755613877/4798e8ec-65e6-465e-83f4-243fde834982_z7qxfo.png"
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-2xl mx-auto object-contain mb-6 rounded-lg mt-6"
                />
              </div>
            </div>
          </div>

          {/* Guests */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover-elegant">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-display font-semibold text-primary mb-6">
                  PARA SA MGA KAIBIGAN AT PAMILYA
                </h3>
                <p className="text-lg font-medium text-foreground mb-4">
                  Semi pormal na kasuotan sa kulay na pastel
                </p>
                <img 
                  src="https://res.cloudinary.com/dhasfjr8x/image/upload/v1755698649/886bda6d-dae0-4dae-a66e-f666ced5933c_f49u4d.png"
                  alt="Guests attire guide"
                  className="w-full max-w-2xl mx-auto object-contain mb-6 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="animate-fade-up mb-16" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover-elegant">
            <h3 className="text-2xl font-display font-semibold text-primary mb-6 text-center">
              Mga Inirerekomendang Kulay
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              Isaalang-alang ang mga magagandang kulay na ito sa pagpili ng kasuotan
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto">
              {dressCodeColors.map((colorItem, index) => (
                <div key={index} className="text-center group">
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border-2 border-border shadow-soft group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: colorItem.color }}
                  ></div>
                  <p className="text-xs text-muted-foreground font-mono mt-2">
                    {colorItem.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Guidelines */}
        <div className="bg-primary border border-border rounded-2xl p-8 shadow-soft max-w-3xl mx-auto">
          <h3 className="text-lg font-display font-semibold text-primary-foreground mb-4 text-center">
            Mga Karagdagang Gabay
          </h3>
          <div className="space-y-3 text-primary-foreground">
            <p className="flex items-start gap-2">
              <span className="text-primary-foreground mt-1">•</span>
              <span><strong>Pormal na kasuotan</strong> - Mangyaring magsuot ng elegante para sa espesyal na okasyong ito.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary-foreground mt-1">•</span>
              <span><strong>Walang cocktail dress</strong> - Hindi angkop ang cocktail dress sa pormal na event na ito.</span>
            </p>
            
            <p className="flex items-start gap-2">
              <span className="text-primary-foreground mt-1">•</span>
              <span>Siguraduhin na ang inyong kasuotan ay nararapat at angkop sa relihiyosong seremonya.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
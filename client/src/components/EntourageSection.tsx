const EntourageSection = () => {
  return (
    <section id="entourage" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-[#333333] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#333333] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="md:text-5xl font-script italic text-primary mb-4 text-[48px]" data-testid="text-entourage-title">
            Ang Aming Entourage
          </h2>
        </div>

        <div className="animate-fade-up space-y-12 md:space-y-16">
          {/* Parents */}
          <div className="border border-border rounded-2xl p-6 md:p-8 shadow-elegant bg-card">
            <h3 className="text-2xl md:text-3xl font-script italic text-primary mb-6 text-center" data-testid="text-parents-title">
              Mga Magulang ng Mag-asawa
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-center">
              <div>
                <h4 className="text-lg md:text-xl font-display font-semibold text-foreground mb-4 text-center" data-testid="text-groom-parents">
                  Antonio Cabrera & Evangeline Cabrera
                </h4>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-display font-semibold text-foreground mb-4 text-center" data-testid="text-bride-parents">
                  Teodulo Gerodias & Ma. Theresa Gerodias
                </h4>
              </div>
            </div>
          </div>

          {/* Principal Sponsors */}
          <div className="border border-border rounded-2xl p-6 md:p-8 shadow-elegant bg-card">
            <h3 className="md:text-3xl font-script italic text-primary mb-6 md:mb-8 text-[30px]" data-testid="text-principal-sponsors-title">
              Ninong at Ninang
            </h3>
            <div className="space-y-2 text-center">
              <p className="text-base md:text-lg text-foreground" data-testid="text-principal-sponsor">Abelardo & Marilane Capurihan</p>
              <p className="text-base md:text-lg text-foreground" data-testid="text-principal-sponsor">Narcissus & Florina Banaticla</p>
              <p className="text-base md:text-lg text-foreground" data-testid="text-principal-sponsor">Sonny & Jeannie Peralta</p>
              <p className="text-base md:text-lg text-foreground" data-testid="text-principal-sponsor">Charles Prado & Gemma Alegros</p>
              <p className="text-base md:text-lg text-foreground" data-testid="text-principal-sponsor">Roque Castillo & Myla Lazo</p>
            </div>
          </div>

          

          {/* Wedding Party */}
          <div className="border border-border rounded-2xl p-6 md:p-8 shadow-elegant bg-card">
            <h3 className="text-3xl md:text-4xl font-script italic text-primary mb-8 md:mb-12 text-center" data-testid="text-abay-title">
              Mga Abay
            </h3>
            <h3 className="text-2xl md:text-3xl font-script italic text-primary mb-6 md:mb-8" data-testid="text-groomsmen-title">
              Mga Abay na Lalake
            </h3>
            <div className="text-center mb-6 md:mb-8">
              <p className="md:text-lg text-foreground font-bold mt-[-5px] mb-[-5px] text-[16px]">Joemari Balaoro</p>
              <h4 className="text-xl md:text-2xl font-display font-semibold text-primary mb-6" data-testid="text-best-man-title">Piling Maginoo</h4>
              <div className="space-y-2">
                <p className="text-base md:text-lg text-foreground">Cedric Garcia</p>
                <p className="text-base md:text-lg text-foreground">Michael Cabrera</p>
                <p className="text-base md:text-lg text-foreground">Gedion Uranza</p>
                <p className="text-base md:text-lg text-foreground">Glen Carlo Lalogo</p>
                <p className="text-base md:text-lg text-foreground">Patrick Jeano Avance</p>
                <p className="text-base md:text-lg text-foreground">Sean Gustav Pagaspas</p>
                <p className="text-base md:text-lg text-foreground">Sean Kenneth Fernandez</p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-script italic text-primary mb-6 md:mb-8" data-testid="text-bridesmaids-title">
              Mga Abay na Babae
            </h3>
            <div className="text-center mb-6 md:mb-8">
              <p className="text-base md:text-lg text-foreground font-bold mt-[-5px] mb-[-5px]">Michelle Cabrera</p>
              <h4 className="text-xl md:text-2xl font-display font-semibold text-primary mb-6" data-testid="text-maid-of-honor-title">Binibining Pandangal</h4>
              <div className="space-y-2">
                <p className="text-base md:text-lg text-foreground">Charlotte Cabrera</p>
                <p className="text-base md:text-lg text-foreground">Abigail Cruz</p>
                <p className="text-base md:text-lg text-foreground">Pearlyn Licmuan</p>
                <p className="text-base md:text-lg text-foreground">Amabelle Capurihan</p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-script italic text-primary mb-6 md:mb-8" data-testid="text-special-roles-title">
              Mga Espesyal na Papel
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-center">
              <div>
                <h4 className="text-lg md:text-xl font-display font-semibold text-primary mb-3">Mga Munting Binibini ng Bulaklak</h4>
                <p className="text-base md:text-lg text-foreground">Jilliane Ruin Martin</p>
                <p className="text-base md:text-lg text-foreground">Kelsea Gerodias</p>
                <p className="text-base md:text-lg text-foreground">Kryannah Gerodias</p>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-display font-semibold text-primary mb-3">Munting Ginoo ng Singsing</h4>
                <p className="text-base md:text-lg text-foreground">Rylle Teddy Gerodias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntourageSection;
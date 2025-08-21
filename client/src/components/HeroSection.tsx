import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

const HeroSection = ({ onOpenInvitation }: HeroSectionProps) => {
  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609081/523379358_122255641160027492_4251064602218305496_n_r8zmdp.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        minHeight: '100dvh'
      }}
    >
      {/* Overlay for better text readability - No black tint */}
      <div className="absolute inset-0"></div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="animate-fade-up opacity-0 [animation-delay:0.3s] mb-8">
          <h1 
            className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white tracking-wide leading-tight drop-shadow-lg" 
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400, letterSpacing: '0.05em' }}
            data-testid="text-main-invitation"
          >
            RENZEL<br />
            <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl" style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", cursive' }}>&</span><br />
            KATHY
          </h1>
        </div>

        <div className="animate-fade-up opacity-0 [animation-delay:0.6s]">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 mb-10 max-w-lg mx-auto shadow-2xl">
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white font-light tracking-wide drop-shadow-md" style={{ fontFamily: '"Times New Roman", serif' }} data-testid="text-date">
                  Oktubre 04, 2025
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white font-light tracking-wide drop-shadow-md" style={{ fontFamily: '"Times New Roman", serif' }} data-testid="text-venue">
                  Iglesia Ni Cristo – Lokal ng United Bayanihan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-scale opacity-0 [animation-delay:1s]">
          <div className="relative group">
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('HeroSection button clicked');
                onOpenInvitation();
              }}
              className="bg-primary hover:bg-accent text-primary-foreground font-display font-medium px-8 py-4 text-base shadow-lg border-0 rounded-lg relative overflow-hidden transform transition-all duration-300 group-hover:scale-105 z-20"
              aria-label="Buksan ang Wedding Invitation"
              data-testid="button-open-invitation"
            >
              <span className="relative z-10 font-display font-medium">
                Buksan ang Imbitasyon
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        </div>
      </div>
      {/* Improved mobile responsiveness */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .hero-section h1 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
          .hero-section .bg-white\\/10 {
            padding: 1.5rem !important;
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

import { Heart, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-primary py-16 px-4" style={{ backgroundColor: '#4a3e35' }}>
      <div className="max-w-4xl mx-auto">


        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          {/* Couple Names */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2 text-[#ffffff]">
              Renzel
              <span className="text-[#ffffff] mx-3">&</span>
              Kathy
            </h2>
            <p className="text-lg text-[#ffffff]">
              Oktubre 04, 2025 • Iglesia Ni Cristo – Lokal ng United Bayanihan
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-[#ffffff]/30"></div>
            <Heart className="w-6 h-6 text-[#ffffff] animate-float" />
            <div className="w-16 h-px bg-[#ffffff]/30"></div>
          </div>

          {/* Thank You Message */}
          <div className="max-w-2xl mx-auto">
            <p className="leading-relaxed italic text-[#ffffff]">
              Nagpapasalamat kami na parte kayo ng aming kwento. Ginawa ninyong mas maganda ang aming journey, at hindi namin maantay na ibahagi ang aming special day kasama ninyo.
            </p>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-[#333333]/20 pt-8">
            <p className="text-sm text-[#ffffff]">
              Sa pagmamahal at pasasalamat,
            </p>
            <p className="font-display font-semibold text-[#ffffff]">
              Renzel & Kathy
            </p>
            <p className="text-lg font-semibold text-[#ffffff] mt-4">
              #kayRENZELKATHYnadhana
            </p>
          </div>
        </div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent opacity-50 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
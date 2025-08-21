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
          </div>

          {/* Hashtag */}
          <div>
            <p className="text-lg font-semibold text-[#ffffff]">
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
import { Card, CardContent } from '@/components/ui/card';

const BibleVerseSection = () => {
  const storyImages = [
    'https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609082/523421202_122255641454027492_7397723094292399669_n_ddnbxh.jpg',
    'https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609081/523379358_122255641160027492_4251064602218305496_n_r8zmdp.jpg',
    'https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609081/520708261_122255650070027492_1456892751489759711_n_szw71t.jpg'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-section-title text-foreground mb-6" 
            style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: '0.05em' }}
            data-testid="text-bible-verse-title"
          >
            Pagmamahal na Walang Hanggan
          </h2>
          
          {/* Bible Verse Card */}
          <Card className="max-w-4xl mx-auto mb-12 bg-card border-primary/20 shadow-soft">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground font-script italic leading-relaxed">
                  "Bahay at mga kayamanan ay minamana sa mga magulang: Nguni't ang mabait na asawa ay galing sa Panginoon."
                </blockquote>
                <cite className="text-base md:text-lg text-muted-foreground font-display">
                  — Kawikaan 19:14
                </cite>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {storyImages.map((image, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-soft hover-elegant">
                {/* Polaroid Frame Effect */}
                <div className="bg-white p-4 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={image}
                    alt={`Larawan ${index + 1}`}
                    className="w-full h-64 md:h-80 rounded-sm"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                    data-testid={`img-story-${index + 1}`}
                  />
                  
                  {/* Polaroid Caption */}
                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-600 font-handwriting">
                      {index === 0 && "Mga Sandaling Hindi Malilimutan"}
                      {index === 1 && "Pagmamahal na Walang Hanggan"}
                      {index === 2 && "Simula ng Bagong Kabanata"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BibleVerseSection;
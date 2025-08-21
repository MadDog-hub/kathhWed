import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';

const VenueSection = () => {
  const venues = [
    {
      title: 'Seremonya',
      name: 'Iglesia Ni Cristo – Lokal ng United Bayanihan',
      address: 'Distrito ng Santa Rosa City Laguna',
      image: 'https://res.cloudinary.com/dhasfjr8x/image/upload/v1755749535/unnamed_zgus4q.jpg',
      mapUrl: 'https://maps.app.goo.gl/tvztqJn56XE4dVEx6',
      description: 'Dito namin ipapangako ang aming pagmamahal sa harap ng Panginoon.',
      details: 'Mangyaring dumating ng maaga upang makaupo bago magsimula ang seremonya.',
      additionalInfo: 'UNPLUGGED CEREMONY - Huwag po kayong gumamit ng camera sa seremonya para maging present tayong lahat.',
      startTime: '3:00 PM',
      locationGuide: 'Gabay sa Lokasyon →'
    },
    {
      title: 'Resepsyon',
      name: 'La Faite Home and Country Garden',
      address: 'Santa Rosa City Laguna',
      image: 'https://res.cloudinary.com/dhasfjr8x/image/upload/v1755749534/unnamed_1_tbds4u.jpg',
      mapUrl: 'https://maps.app.goo.gl/2pPVSFhagott85aw7',
      description: 'Samahan ninyo kami sa hapunan, inumin at sayawan!',
      details: 'Pagkatapos ng seremonya, lilipat tayo sa venue ng resepsyon para sa pagdiriwang.',
      website: '',
      startTime: '5:00 PM',
      locationGuide: 'Gabay sa Lokasyon →'
    }
  ];

  return (
    <section id="venue" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.3}s` }}>
              {/* Venue Title */}
              <div className="text-center mb-12">
                <h2 className="text-5xl font-script italic text-primary mb-8" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                  {venue.title}
                </h2>
              </div>

              {/* Venue Content */}
              <div className="max-w-lg mx-auto text-center space-y-6">
                {/* Venue Image */}
                <div className="mb-8">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                </div>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  {venue.description.split('\n').map((line, i) => (
                    <p key={i} className="text-base font-body text-foreground/85 leading-relaxed" data-testid={`text-${venue.title.toLowerCase()}-description-${i + 1}`}>
                      {line}
                    </p>
                  ))}
                </div>

                {/* Details */}
                <p className="text-base font-body text-foreground/85" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>

                

                {venue.website && (
                  <p className="text-base font-body text-foreground/85" data-testid={`text-${venue.title.toLowerCase()}-website`}>
                    {venue.website}
                  </p>
                )}

                {/* Time and Location Guide */}
                <div className="flex justify-between items-center pt-6 border-t border-foreground/10">
                  <div className="text-left">
                    <p className="text-sm font-body text-foreground/70 italic" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                      Start time {venue.startTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <Button
                      asChild
                      variant="ghost"
                      className="text-sm font-body text-foreground/70 hover:text-primary p-0 h-auto"
                      data-testid={`button-${venue.title.toLowerCase()}-location`}
                    >
                      <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer">
                        {venue.locationGuide}
                      </a>
                    </Button>
                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>
        
        {/* Unplugged Ceremony Note */}
        <div className="mt-16 text-center bg-card/30 border border-border rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-display font-semibold text-primary mb-4">Walang Camera sa Seremonya</h3>
          <p className="text-base font-body text-foreground/85 leading-relaxed mb-4">
            Pakisuyo po namin na huwag munang gumamit ng camera sa seremonya para maging present tayong lahat sa sandaling ito. Pagdating natin sa resepsyon, libre po kayong magpicture at mag-video—gusto namin na tulungan ninyo kaming makakuha ng maraming alaala!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
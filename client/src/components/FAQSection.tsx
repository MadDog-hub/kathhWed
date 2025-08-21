import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Ano ang mangyayari sa seremonya?",
      answer: "Nag-hire kami ng mga skilled photographers para makuha ang mga mahalalagang moments ng aming araw, kaya pwede kayong mag-relax, mag-enjoy, at makisama sa amin. Available ang photos namin after ng wedding. Pakisiguro na clear ang aisle para sa bridal entrance. After ng ceremony at throughout sa reception, feel free kayong mag-picture at mag-video. Important sa amin ang inyong memories. Pakisiguro na quiet at respectful ang lahat ng mga bata throughout sa wedding ceremony para manatiling peaceful at meaningful."
    },
    {
      question: "Anong oras dapat ako dumating?",
      answer: "Tulungan ninyo kaming magsimula on time! Recommendation namin na dumating kayo ng one hour or 30 mins before ng ceremony para makatayo ang lahat on time. Isaalang-alang ninyo ang travel time at traffic papunta sa venue."
    },
    {
      question: "Pwede ba akong magdala ng kasama?",
      answer: "Unfortunately, dahil sa space at seating constraints, strictly limited ang guest list namin. Exclusive RSVP basis ang event namin, kaya mga nag-confirm lang ng attendance ang maaccommodate namin. Pakiunawaan ninyo ang policy namin na bawal ang pag-invite ng di namin inimbitahan. Malaking tulong ang cooperation ninyo para comfortable at enjoyable ang experience ng lahat."
    },
    {
      question: "Kailan appropriate time umalis?",
      answer: "Ang presensya ninyo dito kasama namin ay pinakamahalang regalo. Pakisama ninyo kami throughout sa buong reception program. Kung kailangan ninyong umalis ng maaga, gusto naming makakausap kayo para pasalamatan. Pakisama ninyo kami hanggang after ng Thanksgiving Speech namin."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-script italic text-primary mb-8" data-testid="text-faq-title">Mga Paalala</h2>
        </div>

        {/* Important Reminders */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Ang paanyayang ito ay nakalaan lamang para sa nakatalagang bilang ng panauhin",
            "Mangyaring dumating 30 minuto bago magsimula ang seremonya",
            "Mahigpit na sundin ang itinakdang kasuotan (dress code)",
            "Makipag-ugnayan sa amin para sa anumani katanungan o espesyal na pangangailangan"
          ].map((reminder, index) => (
            <div key={index} className={`bg-card border border-border rounded-xl shadow-soft overflow-hidden animate-fade-up`}
              style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="w-full px-8 py-6 text-left flex items-center justify-between">
                <p className="text-base text-foreground/85 leading-relaxed font-body flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary mt-1">
                    {index + 1}
                  </span>
                  {reminder}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SlideshowSection from '@/components/SlideshowSection';
import InvitationSection from '@/components/InvitationSection';
import CountdownSection from '@/components/CountdownSection';
import CoverImageSection from '@/components/CoverImageSection';
import BibleVerseSection from '@/components/BibleVerseSection';
import VideoSection from '@/components/VideoSection';
import TimelineSection from '@/components/TimelineSection';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import EntourageSection from '@/components/EntourageSection';
import GiftSection from '@/components/GiftSection';
import RSVPSection from '@/components/RSVPSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    console.log('handleOpenInvitation called');
    setShowInvitation(true);
    
    // Start background music immediately
    setTimeout(() => {
      if (audioRef.current) {
        const audio = audioRef.current;
        audio.volume = 0.3;
        audio.loop = true;
        
        console.log('Attempting to play background music...');
        audio.play().then(() => {
          console.log('Background music started successfully');
        }).catch((error) => {
          console.log('Music play error:', error);
          console.log('Adding fallback listeners for user interaction');
          
          // Fallback for autoplay restrictions
          const playOnInteraction = () => {
            console.log('Trying to play music on user interaction...');
            audio.play().then(() => {
              console.log('Music started on user interaction');
            }).catch((err) => {
              console.error('Failed to play music on interaction:', err);
            });
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
        });
      } else {
        console.log('Audio element not found');
      }
    }, 100);
  };

  return (
    <>
      {/* Background Music - Always present */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://res.cloudinary.com/dhasfjr8x/video/upload/v1755609158/Palagi_-_Tj_Monterde_Violin_Cover_by_BOJO_mp3cut.net_rscdnj.mp3"
        style={{ display: 'none' }}
        data-testid="background-audio"
      />

      {!showInvitation ? (
        <HeroSection onOpenInvitation={handleOpenInvitation} />
      ) : (
        <div className="min-h-screen bg-background">
          <Navigation />
          
          {/* Main Content Sections */}
          <main>
            <SlideshowSection />
            <InvitationSection />
            <CountdownSection />
            <CoverImageSection imageUrl="https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609084/519071690_122255640776027492_8807557426994641321_n_ctib55.jpg" alt="Cover Image 1" />
            <BibleVerseSection />
            <VideoSection />
            <TimelineSection />
            <CoverImageSection imageUrl="https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609082/522693189_122255641076027492_3650649105229857777_n_qqlnur.jpg" alt="Cover Image 2" />
            <VenueSection />
            <DressCodeSection />
            <CoverImageSection imageUrl="https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609081/523950962_122255641250027492_8704299748624538310_n_sfpniu.jpg" alt="Cover Image 3" />
            <EntourageSection />
            <GiftSection />
            <RSVPSection />
            <CoverImageSection imageUrl="https://res.cloudinary.com/dhasfjr8x/image/upload/v1755609080/520405707_122255640770027492_8561631394880404849_n_lywqid.jpg" alt="Cover Image 4" />
            <FAQSection />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
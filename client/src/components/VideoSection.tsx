import { useRef, useEffect } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      // Pause background music when video starts
      const audio = document.querySelector('audio[data-testid="background-audio"]') as HTMLAudioElement;
      if (audio) {
        audio.pause();
      }
    };

    const handlePause = () => {
      // Resume background music when video pauses
      const audio = document.querySelector('audio[data-testid="background-audio"]') as HTMLAudioElement;
      if (audio) {
        audio.play().catch(() => {
          // Silently handle autoplay restrictions
        });
      }
    };

    const handleEnded = () => {
      // Resume background music when video ends
      const audio = document.querySelector('audio[data-testid="background-audio"]') as HTMLAudioElement;
      if (audio) {
        audio.play().catch(() => {
          // Silently handle autoplay restrictions
        });
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Section Header */}
      <div className="text-center py-8 px-4 bg-background">
        <h2
          className="text-5xl font-script italic text-primary mb-8"
          style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: '0.05em' }}
          data-testid="text-video-title"
        >
          Bidyo ng Pagmamahalan bago ang Kasal
        </h2>
      </div>
      {/* Video Container */}
      <div className="relative w-full overflow-hidden bg-background">
        <video
          ref={videoRef}
          loop
          playsInline
          controls
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'top',
            margin: 0,
            padding: 0
          }}
        >
          <source
            src="https://res.cloudinary.com/dhasfjr8x/video/upload/v1755609377/AQN-nuUV0ikLhZkoUly33sMNcJRyHWgbd3cbRWcYkeHtIzyK0TZkIZ7XNy6cP9aiIAkrvwAII4RT0URswlULsfjEGw0oqutrzNRC7-y-7rIW-g_u2spqw.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
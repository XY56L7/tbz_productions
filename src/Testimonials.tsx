import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import './Testimonials.css';
// Csak a meglévő 3 videó és thumbnail importálása
import vid1 from './videos/bence-test.mp4';
import vid2 from './videos/madbro-test.mp4';
import vid3 from './videos/vade-test.mp4';
import thumb1 from './thumbnails/bence-test.jpg';
import thumb2 from './thumbnails/madbro-test.jpg';
import thumb3 from './thumbnails/vade-test.jpg';

interface TestimonialVideo {
  id: number;
  src: string;
  thumbnail: string;
  name: string;
  company: string;
  position: string;
  description: string;
}

const Testimonials: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<TestimonialVideo | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Vélemény videók adatainak definíciója - csak 3 videóval
  const testimonialVideos = useMemo<TestimonialVideo[]>(() => [
    { 
      id: 1, 
      src: vid1, 
      thumbnail: thumb1,
      name: 'Kovács István',
      company: 'ABC Kft.',
      position: 'Ügyvezető',
      description: 'A TBZ Productions csapata kiemelkedő munkát végzett. A videók minősége és a kommunikáció is kiváló volt.'
    },
    { 
      id: 2, 
      src: vid2, 
      thumbnail: thumb2,
      name: 'Nagy Erika', 
      company: 'XYZ Marketing',
      position: 'Marketing Igazgató',
      description: 'Rendkívül professzionális megközelítés, kreatív ötletek és határidőre elkészült magas minőségű tartalom.'
    },
    { 
      id: 3, 
      src: vid3, 
      thumbnail: thumb3,
      name: 'Szabó Péter', 
      company: 'Startup Kft.',
      position: 'Alapító',
      description: 'A TBZ Productions valóban megértette a vállalkozásunk lényegét, és ezt kiválóan át is adták a videókban.'
    }
  ], []);

  const handleVideoSwipe = useCallback((direction: 'prev' | 'next') => {
    const prevIndex = currentVideoIndex;
    const newIndex = direction === 'next'
      ? (prevIndex === testimonialVideos.length - 1 ? 0 : prevIndex + 1)
      : (prevIndex === 0 ? testimonialVideos.length - 1 : prevIndex - 1);

    setCurrentVideoIndex(newIndex);
    setIsVideoPlaying(false);
  }, [currentVideoIndex, testimonialVideos]);

  const handlePlayVideo = useCallback(() => {
    // Először állítsuk be a lejátszási állapotot, ami rendereli a videó elemet
    setIsVideoPlaying(true);
    
    // Használjunk setTimeout-ot, hogy biztosan létrejöjjön a videó elem, mielőtt lejátszanánk
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src = testimonialVideos[currentVideoIndex].src;
        videoRef.current.load();
        videoRef.current.play().catch(err => {
          console.error('Videó lejátszás hiba:', err);
          setIsVideoPlaying(false); // Ha hiba történik, visszatérünk a thumbnail-hez
        });
      }
    }, 50);
  }, [currentVideoIndex, testimonialVideos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleVideoSwipe('prev');
      } else if (e.key === 'ArrowRight') {
        handleVideoSwipe('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleVideoSwipe]);

  useEffect(() => {
    setCurrentVideo(testimonialVideos[currentVideoIndex]);
  }, [currentVideoIndex, testimonialVideos]);

  return (
    <section className="testimonials-section" id="TESTIMONIALS">
      <div className="section-header">
        <h2 className="section-title">Ügyfeleink Véleménye</h2>
        <p className="section-subtitle">Mit mondanak rólunk partnereink</p>
      </div>
      <div className="video-container">
        <div className="video-wrapper">
          <div className="adjacent-video" onClick={() => handleVideoSwipe('prev')}>
            <img
              src={currentVideoIndex === 0 ? 
                testimonialVideos[testimonialVideos.length - 1].thumbnail : 
                testimonialVideos[currentVideoIndex - 1].thumbnail}
              alt={currentVideoIndex === 0 ? 
                testimonialVideos[testimonialVideos.length - 1].name : 
                testimonialVideos[currentVideoIndex - 1].name}
              className="video-media"
            />
            <div className="status-info"></div>
          </div>
          <div className="phone-frame">
            <div className="status-bar"></div>
            <div className="video-player">
              {isVideoPlaying ? (
                <video ref={videoRef} className="video-media" loop={false} playsInline controls={true} muted={false}>
                  <source src={testimonialVideos[currentVideoIndex].src} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={testimonialVideos[currentVideoIndex].thumbnail} 
                  alt={testimonialVideos[currentVideoIndex].name}
                  className="video-media" 
                />
              )}
              {!isVideoPlaying && (
                <button className="modern-play-button" onClick={handlePlayVideo} aria-label="Vélemény videó lejátszása">
                  <svg className="play-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3l14 9-14 9V3z" fill="white" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div className="adjacent-video" onClick={() => handleVideoSwipe('next')}>
            <img
              src={currentVideoIndex === testimonialVideos.length - 1 ? 
                testimonialVideos[0].thumbnail : 
                testimonialVideos[currentVideoIndex + 1].thumbnail}
              alt={currentVideoIndex === testimonialVideos.length - 1 ? 
                testimonialVideos[0].name : 
                testimonialVideos[currentVideoIndex + 1].name}
              className="video-media"
            />
            <div className="status-info"></div>
          </div>
        </div>
        
        <div className="video-controls">
          <button className="nav-btn prev-btn" onClick={() => handleVideoSwipe('prev')} aria-label="Előző vélemény">←</button>
          <button className="nav-btn next-btn" onClick={() => handleVideoSwipe('next')} aria-label="Következő vélemény">→</button>
        </div>
        <div className="progress-dots">
          {testimonialVideos.map((_, index) => (
            <div 
              key={index} 
              className={`progress-dot ${index === currentVideoIndex ? 'active' : ''}`} 
              onClick={() => setCurrentVideoIndex(index)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
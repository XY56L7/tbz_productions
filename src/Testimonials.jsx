import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import './Testimonials.css';
import vid1 from './videos/bence-test.mp4'; // Replace with your actual video files
import vid2 from './videos/madbro-test.mp4';
import vid3 from './videos/vade-test.mp4';
import thumb1 from './thumbnails/bence-test.jpg';
import thumb2 from './thumbnails/madbro-test.jpg';
import thumb3 from './thumbnails/vade-test.jpg';

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        src: vid1,
        thumbnail: thumb1,
        title: 'Vélemény 1',
        author: 'Kovács Anna',
      },
      {
        id: 2,
        src: vid2,
        thumbnail: thumb2,
        title: 'Vélemény 2',
        author: 'Szabó Péter',
      },
      {
        id: 3,
        src: vid3,
        thumbnail: thumb3,
        title: 'Vélemény 3',
        author: 'Nagy Eszter',
      },
    ],
    []
  );

  const handleTestimonialSwipe = useCallback(
    (direction) => {
      const prevIndex = currentTestimonialIndex;
      const newIndex =
        direction === 'next'
          ? prevIndex === testimonials.length - 1
            ? 0
            : prevIndex + 1
          : prevIndex === 0
          ? testimonials.length - 1
          : prevIndex - 1;

      setCurrentTestimonialIndex(newIndex);
      setIsVideoPlaying(false); // Reset video playback on swipe
    },
    [currentTestimonialIndex, testimonials]
  );

  const handlePlayVideo = useCallback(() => {
    setIsVideoPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src = testimonials[currentTestimonialIndex].src;
        videoRef.current.load();
        videoRef.current.play().catch((err) => {
          console.error('Video play failed:', err);
          setIsVideoPlaying(false);
        });
      }
    }, 50);
  }, [currentTestimonialIndex, testimonials]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handleTestimonialSwipe('prev');
      } else if (e.key === 'ArrowRight') {
        handleTestimonialSwipe('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleTestimonialSwipe]);

  return (
    <section className="video-section">
      <div className="section-header">
        <h2 className="section-title">Vélemények</h2>
        <p className="section-subtitle">Ügyfeleink visszajelzései</p>
      </div>
      <div className="video-container">
        <div className="video-wrapper">
          <div
            className="adjacent-video"
            onClick={() => handleTestimonialSwipe('prev')}
          >
            <img
              src={
                currentTestimonialIndex === 0
                  ? testimonials[testimonials.length - 1].thumbnail
                  : testimonials[currentTestimonialIndex - 1].thumbnail
              }
              alt={
                currentTestimonialIndex === 0
                  ? testimonials[testimonials.length - 1].title
                  : testimonials[currentTestimonialIndex - 1].title
              }
              className="video-media"
            />
            <div className="status-info"></div>
          </div>
          <div className="phone-frame">
            <div className="status-bar"></div>
            <div className="video-player">
              {isVideoPlaying ? (
                <video
                  ref={videoRef}
                  className="video-media"
                  loop={false}
                  playsInline
                  controls={true}
                  muted={false}
                >
                  <source
                    src={testimonials[currentTestimonialIndex].src}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  src={testimonials[currentTestimonialIndex].thumbnail}
                  alt={testimonials[currentTestimonialIndex].title}
                  className="video-media"
                />
              )}
              {!isVideoPlaying && (
                <button
                  className="modern-play-button"
                  onClick={handlePlayVideo}
                  aria-label="Videó lejátszása"
                >
                  <svg
                    className="play-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3l14 9-14 9V3z" fill="white" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div
            className="adjacent-video"
            onClick={() => handleTestimonialSwipe('next')}
          >
            <img
              src={
                currentTestimonialIndex === testimonials.length - 1
                  ? testimonials[0].thumbnail
                  : testimonials[currentTestimonialIndex + 1].thumbnail
              }
              alt={
                currentTestimonialIndex === testimonials.length - 1
                  ? testimonials[0].title
                  : testimonials[currentTestimonialIndex + 1].title
              }
              className="video-media"
            />
            <div className="status-info"></div>
          </div>
        </div>
        <div className="video-controls">
          <button
            className="nav-btn prev-btn"
            onClick={() => handleTestimonialSwipe('prev')}
            aria-label="Előző videó"
          >
            ←
          </button>
          <button
            className="nav-btn next-btn"
            onClick={() => handleTestimonialSwipe('next')}
            aria-label="Következő videó"
          >
            →
          </button>
        </div>
        <div className="progress-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${
                index === currentTestimonialIndex ? 'active' : ''
              }`}
              onClick={() => {
                setCurrentTestimonialIndex(index);
                setIsVideoPlaying(false);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
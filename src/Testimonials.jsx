import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';
import vid1 from './videos/bence-test.mp4';
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
      setIsVideoPlaying(false);
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
    <section className="py-5 bg-black">
      <div className="container text-center mb-5">
        <h2 className="section-title">Vélemények</h2>
        <p className="section-subtitle">Ügyfeleink visszajelzései</p>
      </div>
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center gap-3 mb-4 flex-nowrap testimonial-carousel">
          <div
            className="card border-0 shadow opacity-75 adjacent-card"
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
              className="card-img-top object-fit-cover w-100 h-100"
            />
          </div>
          <div
            className="card border-0 shadow position-relative center-card"
          >
            {isVideoPlaying ? (
              <video
                ref={videoRef}
                className="card-img-top object-fit-cover w-100 h-100"
                loop={false}
                playsInline
                controls
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
                className="card-img-top object-fit-cover w-100 h-100"
              />
            )}
            {!isVideoPlaying && (
              <button
                className="btn btn-primary rounded-circle position-absolute top-50 start-50 translate-middle btn-play"
                style={{ width: '36px', height: '36px' }}
                onClick={handlePlayVideo}
                aria-label="Videó lejátszása"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </button>
            )}
          </div>
          <div
            className="card border-0 shadow opacity-75 adjacent-card"
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
              className="card-img-top object-fit-cover w-100 h-100"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3 mb-4">
          <button
            className="btn btn-outline-light rounded-circle btn-nav"
            style={{ width: '36px', height: '36px' }}
            onClick={() => handleTestimonialSwipe('prev')}
            aria-label="Előző videó"
          >
            ←
          </button>
          <button
            className="btn btn-outline-light rounded-circle btn-nav"
            style={{ width: '36px', height: '36px' }}
            onClick={() => handleTestimonialSwipe('next')}
            aria-label="Következő videó"
          >
            →
          </button>
        </div>
        <div className="d-flex justify-content-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm p-0 rounded-circle ${
                index === currentTestimonialIndex ? 'btn-primary' : 'btn-outline-secondary'
              }`}
              style={{ width: '8px', height: '8px' }}
              onClick={() => {
                setCurrentTestimonialIndex(index);
                setIsVideoPlaying(false);
              }}
              aria-label={`Videó ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
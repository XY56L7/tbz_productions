import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <section className="testimonials-section py-5 bg-black">
      <style jsx>{`
        .testimonials-section {
          /* Scoped styles for this component */
        }

        .testimonials-section .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }

        .testimonials-section .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 340px;
          height: 4px;
          background: linear-gradient(135deg, rgba(0, 89, 69, 0.95), rgba(0, 44, 35, 0.95));
          border-radius: 2px;
        }
        .testimonials-section .section-subtitle {
          color: #888;
          font-size: 1.2rem;
          margin-top: 2rem;
          margin-bottom: 3rem;
        }

        .testimonials-section .testimonial-carousel {
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
          scroll-snap-type: x mandatory;
          display: flex;
          flex-wrap: nowrap;
        }

        .testimonials-section .testimonial-carousel::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .testimonials-section .testimonial-carousel .card {
          scroll-snap-align: center;
          flex-shrink: 0; /* Prevent collapsing */
          min-width: 0; /* Allow override */
        }

        .testimonials-section .card {
          width: 280px;
          height: 450px;
          border-radius: 16px;
          overflow: hidden;
        }

        @media (max-width: 992px) {
          .testimonials-section .card {
            width: 240px;
            height: 384px; /* Maintain ~8:5 ratio (450/280 * 240) */
          }
          .testimonials-section .testimonial-carousel {
            padding: 0 120px; /* Half of 240px */
          }
        }

        @media (max-width: 768px) {
          .testimonials-section .card {
            width: 260px;
            height: 416px; /* Maintain ~8:5 ratio (450/280 * 260) */
          }
          .testimonials-section .testimonial-carousel {
            padding: 0 130px; /* Half of 260px */
          }
          .testimonials-section .section-title {
            font-size: 2.5rem;
          }
          .testimonials-section .section-subtitle {
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .testimonials-section .center-card {
            width: 300px !important;
            height: 480px !important; /* Maintain ~8:5 ratio (450/280 * 300) */
          }
          .testimonials-section .adjacent-card {
            width: 300px !important;
            height: 480px !important;
          }
          .testimonials-section .testimonial-carousel {
            padding: 0 calc(50% - 150px); /* Center 300px card, show 150px of adjacent cards */
          }
          .testimonials-section .btn-nav {
            width: 32px !important;
            height: 32px !important;
            font-size: 0.9rem !important;
          }
          .testimonials-section .btn-play {
            width: 32px !important;
            height: 32px !important;
          }
          .testimonials-section .btn-play svg {
            width: 12px !important;
            height: 12px !important;
          }
          .testimonials-section .section-title {
            font-size: 2rem;
          }
          .testimonials-section .section-subtitle {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div id="test" />
      <div className="container text-center mb-5">
        <h2 className="section-title">Vélemények</h2>
        <p className="section-subtitle">Ügyfeleink visszajelzései a közös munkáról</p>
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
          <div className="card border-0 shadow position-relative center-card">
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
                index === currentTestimonialIndex
                  ? 'btn-primary'
                  : 'btn-outline-secondary'
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
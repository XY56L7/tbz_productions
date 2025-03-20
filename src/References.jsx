import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './References.css';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpg';
import img3 from './images/3.JPG';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import vid1 from './videos/1.mp4';
import vid2 from './videos/2.mp4';
import vid3 from './videos/3.mp4';
import vid4 from './videos/4.mp4';
import vid5 from './videos/5.mp4';

const References = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const prevVideoRef = useRef(null);
  const nextVideoRef = useRef(null);

  const photos = [
    { id: 1, src: img1, title: 'Referencia 1', category: 'Fotózás' },
    { id: 2, src: img2, title: 'Referencia 2', category: 'Videó' },
    { id: 3, src: img3, title: 'Referencia 3', category: 'Fotózás' },
    { id: 4, src: img4, title: 'Referencia 4', category: 'Videó' },
    { id: 5, src: img5, title: 'Referencia 5', category: 'Fotózás' },
  ];

  const videos = [
    { 
      id: 1, 
      src: vid1, 
      title: 'Esküvői Videó', 
      category: 'Esküvő',
      description: 'Egy csodálatos esküvői pillanat megörökítése'
    },
    { 
      id: 2, 
      src: vid2, 
      title: 'Rendezvény Aftermovie', 
      category: 'Rendezvény',
      description: 'Energikus aftermovie egy fantasztikus rendezvényről'
    },
    { 
      id: 3, 
      src: vid3, 
      title: 'Promóciós Videó', 
      category: 'Marketing',
      description: 'Modern promóciós videó egy innovatív termékről'
    },
    { 
      id: 4, 
      src: vid4, 
      title: 'Koncert Felvétel', 
      category: 'Zene',
      description: 'Lenyűgöző koncertfelvétel professzionális minőségben'
    },
    { 
      id: 5, 
      src: vid5, 
      title: 'Termék Bemutató', 
      category: 'Marketing',
      description: 'Elegáns termékbemutató videó prémium kivitelezésben'
    },
  ];

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsZoomed(false);
    document.body.style.overflow = 'auto';
  };

  const handleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const handleModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const handleVideoSwipe = (direction) => {
    const prevIndex = currentVideoIndex;
    const newIndex = direction === 'next'
      ? (prevIndex === videos.length - 1 ? 0 : prevIndex + 1)
      : (prevIndex === 0 ? videos.length - 1 : prevIndex - 1);

    setCurrentVideoIndex(newIndex);
    setIsVideoPlaying(false);

    if (videoRef.current) {
      videoRef.current.src = videos[newIndex].src;
      videoRef.current.load();
    }

    if (prevVideoRef.current) {
      const prevIdx = newIndex === 0 ? videos.length - 1 : newIndex - 1;
      prevVideoRef.current.src = videos[prevIdx].src;
      prevVideoRef.current.load();
      prevVideoRef.current.currentTime = 0;
    }

    if (nextVideoRef.current) {
      const nextIdx = newIndex === videos.length - 1 ? 0 : newIndex + 1;
      nextVideoRef.current.src = videos[nextIdx].src;
      nextVideoRef.current.load();
      nextVideoRef.current.currentTime = 0;
    }
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true);
      }).catch(err => console.error('Video play failed:', err));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedPhoto) {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        handleVideoSwipe('prev');
      } else if (e.key === 'ArrowRight') {
        handleVideoSwipe('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  useEffect(() => {
    const loadInitialVideos = () => {
      if (videoRef.current) {
        videoRef.current.src = videos[currentVideoIndex].src;
        videoRef.current.load();
      }

      if (prevVideoRef.current) {
        const prevIndex = currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1;
        prevVideoRef.current.src = videos[prevIndex].src;
        prevVideoRef.current.load();
        prevVideoRef.current.currentTime = 0;
      }

      if (nextVideoRef.current) {
        const nextIndex = currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1;
        nextVideoRef.current.src = videos[nextIndex].src;
        nextVideoRef.current.load();
        nextVideoRef.current.currentTime = 0;
      }
    };

    loadInitialVideos();
  }, [currentVideoIndex]);

  useEffect(() => {
    const handleVideoEnd = () => {
      handleVideoSwipe('next');
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentVideoIndex]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setShowAllPhotos(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoadMoreClick = () => {
    setShowAllPhotos(true);
  };

  return (
    <>
      <section className="video-section">
        <div className="section-header">
          <h2 className="section-title">Videó Referenciák</h2>
          <p className="section-subtitle">Prémium videó munkáink</p>
        </div>

        <div className="video-container">
          <div className="video-wrapper">
            <div 
              className="adjacent-video"
              onClick={() => handleVideoSwipe('prev')}
            >
              <video
                ref={prevVideoRef}
                className="video-media"
                muted
                playsInline
                preload="metadata"
              >
                <source src={currentVideoIndex === 0 ? videos[videos.length - 1].src : videos[currentVideoIndex - 1].src} type="video/mp4" />
              </video>
              <div className="status-info"></div>
            </div>

            <div className="phone-frame">
              <div className="status-bar"></div>
              <div className="video-player">
                <video
                  ref={videoRef}
                  className="video-media"
                  loop={false}
                  playsInline
                  controls={isVideoPlaying}
                  muted={false}
                >
                  <source src={videos[currentVideoIndex].src} type="video/mp4" />
                </video>
                {!isVideoPlaying && (
                  <button 
                    className="modern-play-button" 
                    onClick={handlePlayVideo}
                    aria-label="Videó lejátszása"
                  >
                    <svg className="play-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3l14 9-14 9V3z" fill="white"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div 
              className="adjacent-video"
              onClick={() => handleVideoSwipe('next')}
            >
              <video
                ref={nextVideoRef}
                className="video-media"
                muted
                playsInline
                preload="metadata"
              >
                <source src={currentVideoIndex === videos.length - 1 ? videos[0].src : videos[currentVideoIndex + 1].src} type="video/mp4" />
              </video>
              <div className="status-info"></div>
            </div>
          </div>

          <div className="video-controls">
            <button 
              className="nav-btn prev-btn" 
              onClick={() => handleVideoSwipe('prev')}
              aria-label="Előző videó"
            >
              ←
            </button>
            <button 
              className="nav-btn next-btn" 
              onClick={() => handleVideoSwipe('next')}
              aria-label="Következő videó"
            >
              →
            </button>
          </div>

          <div className="progress-dots">
            {videos.map((_, index) => (
              <div 
                key={index}
                className={`progress-dot ${index === currentVideoIndex ? 'active' : ''}`}
                onClick={() => setCurrentVideoIndex(index)}
                role="button"
                aria-label={`${index + 1}. videó`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="photo-section">
        <div className="section-header">
          <h2 className="section-title">Fotó Referenciák</h2>
          <p className="section-subtitle">Válogatott fotóink az elmúlt időszakból</p>
        </div>

        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`photo-item ${isMobile && index >= 2 && !showAllPhotos ? 'hidden' : ''}`}
              onClick={() => handlePhotoClick(photo)}
            >
              <div className="photo-inner">
                <img 
                  src={photo.src} 
                  alt={photo.title} 
                  className="photo-image" 
                  loading="lazy"
                />
                <div className="photo-overlay always-visible">
                  <div className="photo-content">
                    <span className="photo-category">{photo.category}</span>
                    <h3 className="photo-title">{photo.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMobile && !showAllPhotos && photos.length > 2 && (
          <button 
            className="load-more-btn" 
            onClick={handleLoadMoreClick}
            aria-label="További képek megjelenítése"
          >
            További képek megtekintése
          </button>
        )}

        {selectedPhoto && (
          <div className="modal-backdrop" onClick={handleModalClick}>
            <div 
              ref={modalRef}
              className={`modal-container ${isZoomed ? 'zoomed' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-info">
                  <h3>{selectedPhoto.title}</h3>
                  <span className="modal-category">{selectedPhoto.category}</span>
                </div>
                <div className="modal-controls">
                  <button className="control-btn zoom-btn" onClick={handleZoom} aria-label="Nagyítás">
                    {isZoomed ? '🔍-' : '🔍+'}
                  </button>
                  <button className="control-btn close-btn" onClick={closeModal} aria-label="Bezárás">
                    ✕
                  </button>
                </div>
              </div>
              <div className="modal-content">
                <img 
                  src={selectedPhoto.src} 
                  alt={selectedPhoto.title} 
                  className={`modal-media ${isZoomed ? 'zoomed' : ''}`}
                  onClick={handleZoom}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default References;
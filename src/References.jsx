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
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const prevVideoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const prevPhotoRef = useRef(null);
  const nextPhotoRef = useRef(null);

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
    }

    if (nextVideoRef.current) {
      const nextIdx = newIndex === videos.length - 1 ? 0 : newIndex + 1;
      nextVideoRef.current.src = videos[nextIdx].src;
      nextVideoRef.current.load();
    }
  };

  const handlePhotoSwipe = (direction) => {
    const prevIndex = currentPhotoIndex;
    const newIndex = direction === 'next'
      ? (prevIndex === photos.length - 1 ? 0 : prevIndex + 1)
      : (prevIndex === 0 ? photos.length - 1 : prevIndex - 1);

    setCurrentPhotoIndex(newIndex);
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
        handlePhotoSwipe('prev');
      } else if (e.key === 'ArrowRight') {
        handleVideoSwipe('next');
        handlePhotoSwipe('next');
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
        const prevIdx = currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1;
        prevVideoRef.current.src = videos[prevIdx].src;
        prevVideoRef.current.load();
      }
      if (nextVideoRef.current) {
        const nextIdx = currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1;
        nextVideoRef.current.src = videos[nextIdx].src;
        nextVideoRef.current.load();
      }
    };

    loadInitialVideos();
  }, [currentVideoIndex]);

  return (
    <>
      <section className="video-section">
        <div className="section-header">
          <h2 className="section-title">Videó Referenciák</h2>
          <p className="section-subtitle">Prémium videó munkáink</p>
        </div>
        <div className="video-container">
          <div className="video-wrapper">
            <div className="adjacent-video" onClick={() => handleVideoSwipe('prev')}>
              <video ref={prevVideoRef} className="video-media" muted playsInline preload="metadata">
                <source src={currentVideoIndex === 0 ? videos[videos.length - 1].src : videos[currentVideoIndex - 1].src} type="video/mp4" />
              </video>
              <div className="status-info"></div>
            </div>
            <div className="phone-frame">
              <div className="status-bar"></div>
              <div className="video-player">
                <video ref={videoRef} className="video-media" loop={false} playsInline controls={isVideoPlaying} muted={false}>
                  <source src={videos[currentVideoIndex].src} type="video/mp4" />
                </video>
                {!isVideoPlaying && (
                  <button className="modern-play-button" onClick={handlePlayVideo} aria-label="Videó lejátszása">
                    <svg className="play-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3l14 9-14 9V3z" fill="white" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className="adjacent-video" onClick={() => handleVideoSwipe('next')}>
              <video ref={nextVideoRef} className="video-media" muted playsInline preload="metadata">
                <source src={currentVideoIndex === videos.length - 1 ? videos[0].src : videos[currentVideoIndex + 1].src} type="video/mp4" />
              </video>
              <div className="status-info"></div>
            </div>
          </div>
          <div className="video-controls">
            <button className="nav-btn prev-btn" onClick={() => handleVideoSwipe('prev')} aria-label="Előző videó">←</button>
            <button className="nav-btn next-btn" onClick={() => handleVideoSwipe('next')} aria-label="Következő videó">→</button>
          </div>
          <div className="progress-dots">
            {videos.map((_, index) => (
              <div key={index} className={`progress-dot ${index === currentVideoIndex ? 'active' : ''}`} onClick={() => setCurrentVideoIndex(index)} />
            ))}
          </div>
        </div>
      </section>

      <section className="photo-section">
        <div className="section-header">
          <h2 className="section-title">Fotó Referenciák</h2>
          <p className="section-subtitle">Válogatott fotóink az elmúlt időszakból</p>
        </div>
        <div className="photo-container">
          <div className="photo-wrapper">
            <div className="adjacent-photo" onClick={() => handlePhotoSwipe('prev')}>
              <img
                ref={prevPhotoRef}
                src={currentPhotoIndex === 0 ? photos[photos.length - 1].src : photos[currentPhotoIndex - 1].src}
                alt={currentPhotoIndex === 0 ? photos[photos.length - 1].title : photos[currentPhotoIndex - 1].title}
                className="photo-media"
              />
              <div className="photo-overlay">
                <span className="photo-category">{currentPhotoIndex === 0 ? photos[photos.length - 1].category : photos[currentPhotoIndex - 1].category}</span>
                <h3 className="photo-title">{currentPhotoIndex === 0 ? photos[photos.length - 1].title : photos[currentPhotoIndex - 1].title}</h3>
              </div>
            </div>
            <div className="photo-card" onClick={() => handlePhotoClick(photos[currentPhotoIndex])}>
              <img
                src={photos[currentPhotoIndex].src}
                alt={photos[currentPhotoIndex].title}
                className="photo-media"
              />
              <div className="photo-overlay">
                <span className="photo-category">{photos[currentPhotoIndex].category}</span>
                <h3 className="photo-title">{photos[currentPhotoIndex].title}</h3>
              </div>
            </div>
            <div className="adjacent-photo" onClick={() => handlePhotoSwipe('next')}>
              <img
                ref={nextPhotoRef}
                src={currentPhotoIndex === photos.length - 1 ? photos[0].src : photos[currentPhotoIndex + 1].src}
                alt={currentPhotoIndex === photos.length - 1 ? photos[0].title : photos[currentPhotoIndex + 1].title}
                className="photo-media"
              />
              <div className="photo-overlay">
                <span className="photo-category">{currentPhotoIndex === photos.length - 1 ? photos[0].category : photos[currentPhotoIndex + 1].category}</span>
                <h3 className="photo-title">{currentPhotoIndex === photos.length - 1 ? photos[0].title : photos[currentPhotoIndex + 1].title}</h3>
              </div>
            </div>
          </div>
          <div className="photo-controls">
            <button className="nav-btn prev-btn" onClick={() => handlePhotoSwipe('prev')} aria-label="Előző fotó">←</button>
            <button className="nav-btn next-btn" onClick={() => handlePhotoSwipe('next')} aria-label="Következő fotó">→</button>
          </div>
          <div className="progress-dots">
            {photos.map((_, index) => (
              <div key={index} className={`progress-dot ${index === currentPhotoIndex ? 'active' : ''}`} onClick={() => setCurrentPhotoIndex(index)} />
            ))}
          </div>
        </div>

        {selectedPhoto && (
          <div className="modal-backdrop" onClick={handleModalClick}>
            <div ref={modalRef} className={`modal-container ${isZoomed ? 'zoomed' : ''}`} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-info">
                  <h3>{selectedPhoto.title}</h3>
                  <span className="modal-category">{selectedPhoto.category}</span>
                </div>
                <div className="modal-controls">
                  <button className="control-btn zoom-btn" onClick={handleZoom} aria-label="Nagyítás">{isZoomed ? '🔍-' : '🔍+'}</button>
                  <button className="control-btn close-btn" onClick={closeModal} aria-label="Bezárás">✕</button>
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
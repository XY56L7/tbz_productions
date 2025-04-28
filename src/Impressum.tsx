import React, { CSSProperties } from 'react';

interface ImpressumProps {
  show: boolean;
  onHide: () => void;
}

const Impressum: React.FC<ImpressumProps> = ({ show, onHide }) => {
  if (!show) return null;

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
  };

  const modalStyle: CSSProperties = {
    backgroundColor: '#111',
    color: '#fff',
    borderRadius: '8px',
    maxWidth: '900px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
  };

  const contentStyle: CSSProperties = {
    padding: '30px',
  };

  const closeButtonStyle: CSSProperties = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: '#00D28C',
    border: 'none',
    color: '#111',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={overlayStyle} onClick={onHide}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onHide}>
          Bezárás
        </button>
        <div style={contentStyle}>
          <div className="container">
            <div className="row mb-3">
              <div className="col-md-6">
                <h5 style={{ color: '#00D28C' }}>Alapadatok</h5>
                <p><strong>Webcím:</strong> https://tbzproductions.com/</p>
                <p><strong>Adószám:</strong> 90813595-1-42</p>
                <p><strong>Nyilvántartási szám:</strong> 60155584</p>
                <p><strong>Kamara:</strong> Budapesti Kereskedelmi és Iparkamara</p>
              </div>
              <div className="col-md-6">
                <h5 style={{ color: '#00D28C' }}>Tárhelyszolgáltató</h5>
                <p><strong>Cég neve:</strong> Cloudflare, Inc.</p>
                <p><strong>Székhely:</strong> 101 Townsend St, San Francisco, CA 94107, USA</p>
                <p><strong>E-mail:</strong> support@cloudflare.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
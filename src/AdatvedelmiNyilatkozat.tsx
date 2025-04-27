import React, { CSSProperties } from 'react';

interface AdatvedelmiNyilatkozatProps {
  show: boolean;
  onHide: () => void;
}

const AdatvedelmiNyilatkozat: React.FC<AdatvedelmiNyilatkozatProps> = ({ show, onHide }) => {
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
    maxWidth: '800px',
    width: '100%',
    maxHeight: '70vh',
    overflowY: 'auto',
    position: 'relative',
  };

  const contentStyle: CSSProperties = {
    padding: '30px',
    paddingBottom: '60px',
  };

  const closeButtonStyle: CSSProperties = {
    position: 'sticky',
    top: '15px',
    right: '15px',
    backgroundColor: '#00D28C',
    border: 'none',
    color: '#111',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    float: 'right',
    marginBottom: '20px',
  };

  return (
    <div style={overlayStyle} onClick={onHide}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onHide}>
          Bezárás
        </button>
        <div style={contentStyle}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 style={{ color: '#00D28C' }}>Az Ön által megadott személyes adatokat kezeli:</h5>
                <p>Tököli Bence Zoltán E.V.</p>
                <p>1158 Budapest, Gergő utca 67.</p>
                <p>90813595-1-42</p>
                <p>a továbbiakban: Adatkezelő.</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adatkezelő Felelősségi körök</h5>
                <p>Tököli Bence Zoltán E.V.</p>
                <p>1158 Budapest, Gergő utca 67.</p>
                <p>Reklámügynöki tevékenység</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adatkezelés időtartama:</h5>
                <ul>
                  <li>Direkt marketing célú hozzájárulások tekintetében a felhasználó hozzájárulásának visszavonásáig</li>
                  <li>Profiladatok tekintetében az utolsó bejelentkezéstől számított 4 év</li>
                  <li>Vásárlások adatai tekintetében a Számv. tv. 169. § (2) bekezdése alapján 8 év</li>
                </ul>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adattovábbítás feltételei:</h5>
                <p>Az Adatkezelő az általa kezelt adatokat – a szükséges mértékben – továbbíthatja a következő területeken tevékenykedő, általa kijelölt személyek, valamint társaságok részére:</p>
                <ul>
                  <li>Adatfeldolgozás</li>
                  <li>Jogi képviselet</li>
                  <li>Jogviták kezelésére jogszabály alapján jogosult szervek</li>
                  <li>Kézbesítés</li>
                  <li>Könyvelés</li>
                  <li>Követeléskezelés</li>
                  <li>Marketing</li>
                  <li>Számlázás</li>
                </ul>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adatfeldolgozók:</h5>
                <ul>
                  <li>Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107, USA) - Cache-elés és teljesítményoptimalizálás</li>
                
                  <li>Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA)</li>
                  <li>Facebook Ireland Ltd. (4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland)</li>
                  <li>Twitter International Company (One Cumberland Place, Fenian Street, Dublin 2, D02 AX07 IRELAND)</li>
                </ul>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Cookie-k (sütik) kezelése:</h5>
                <p>Weboldalunkon „cookie"-kat (továbbiakban „süti") alkalmazunk. Ezek olyan fájlok, melyek információt tárolnak webes böngészőjében. Ehhez az Ön hozzájárulása szükséges.</p>

                <h6 style={{ color: '#00D28C' }} className="mt-3">Milyen „sütikkel" találkozhat?</h6>
                <ul>
                  <li>Ideiglenes „sütik"</li>
                  <li>Állandó „sütik"</li>
                  <li>Harmadik féltől származó „sütik"</li>
                </ul>

                <h6 style={{ color: '#00D28C' }} className="mt-3">A „sütik" kezelése, törlése</h6>
                <p>A „sütiket" a használt böngészőprogramokban lehet törölni vagy letiltani. A böngészők alapértelmezett módon engedélyezik a „sütik" elhelyezését.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdatvedelmiNyilatkozat;
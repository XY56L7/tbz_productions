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
                <h5 style={{ color: '#00D28C' }}>Adatvédelmi nyilatkozat</h5>
                <p>Kérjük, figyelmesen olvassa el jelen adatkezelési tájékoztatónkat (a továbbiakban: Tájékoztató), melyben személyes adatai kezelését érintő gyakorlatunkat ismertetjük az Általános Adatvédelmi Rendelet (GDPR, 2016/679/EU rendelet) szerint.</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Az Ön által megadott személyes adatokat kezeli:</h5>
                <p>Tököli Bence Zoltán E.V.</p>
                <p>1158 Budapest, Gergő utca 67.</p>
                <p>Adószám: 90813595-1-42</p>
                <p>a továbbiakban: Adatkezelő.</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adatkezelő felelőssége és elérhetősége</h5>
                <p>Adatvédelmi eljárásainkat érintő észrevétel, kérdés vagy panasz esetén az alábbi elérhetőségeken vagyunk elérhetőek:</p>
                <p>Tököli Bence Zoltán E.V., 1158 Budapest, Gergő utca 67.</p>
                <p>E-mail: info@tbzproductions.com</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adatkezelő felelősségi körök</h5>
                <p>Tököli Bence Zoltán E.V.</p>
                <p>1158 Budapest, Gergő utca 67.</p>
                <p>Reklámügynöki tevékenység</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Kezelt személyes adatok</h5>
                <ul>
                  <li>Vezetéknév, keresztnév, cégnév és kapcsolattartó neve (cég esetén)</li>
                  <li>E-mail cím</li>
                  <li>Telefonszám</li>
                  <li>Kérdés vagy rövid leírás</li>
                  <li>Kért szolgáltatás</li>
                  <li>Rendszer információk (IP-cím, rendszer verzió, felbontás, statisztika a honlapon megtekintett oldalakról, böngészési szokások, viselkedési mintázat)</li>
                </ul>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adatkezelés célja</h5>
                <p>Az adatkezelés célja a szolgáltatások nyújtása, ügyfélkapcsolat fenntartása, marketing tevékenység, valamint a felhasználói élmény javítása.</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adatkezelés időtartama</h5>
                <ul>
                  <li>Direkt marketing célú hozzájárulások tekintetében a felhasználó hozzájárulásának visszavonásáig</li>
                  <li>Profiladatok tekintetében az utolsó bejelentkezéstől számított 4 év</li>
                  <li>Vásárlások adatai tekintetében a Számv. tv. 169. § (2) bekezdése alapján 8 év</li>
                </ul>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adattovábbítás feltételei</h5>
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

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adatfeldolgozók</h5>
                <p>Az adatkezelésben érintett cégek:</p>
                <ul>
               
                  <li>Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107, USA) - Cache-elés és teljesítményoptimalizálás</li>
                  <li>Calendly, LLC (1315 Peachtree St NE, Atlanta, GA 30309, USA) - Időpontfoglalási szolgáltatások</li>
                  <li>Resend, Inc. (2261 Market Street #4207, San Francisco, CA 94114, USA) - E-mail küldési szolgáltatások</li>
                  <li>Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) - Analitika, hirdetések, felhőszolgáltatások</li>
                  <li>Facebook Ireland Ltd. (4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland) - Közösségi média szolgáltatások</li>
                  <li>Twitter International Company (One Cumberland Place, Fenian Street, Dublin 2, D02 AX07 IRELAND) - Közösségi média szolgáltatások</li>
                </ul>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adattulajdonosi jogok és jogérvényesítés</h5>
                <p>Ön jogosult:</p>
                <ul>
                  <li>tájékoztatást kérni az adatkezelésről,</li>
                  <li>személyes adatai helyesbítését, törlését vagy kezelésének korlátozását kérni,</li>
                  <li>adathordozhatósághoz való jogát gyakorolni,</li>
                  <li>tiltakozni az adatkezelés ellen,</li>
                  <li>hozzájárulását bármikor visszavonni.</li>
                </ul>
                <p>Törlési kérelmét írásban szükséges megküldenie az Adatkezelő részére az info@tbzproductions.com e-mail címre vagy postai úton a 1158 Budapest, Gergő utca 67. címre.</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Kiskorúak és korlátozottan cselekvőképes személyes adatainak védelme</h5>
                <p>Weboldalunk nem 13 év alatti kiskorúak részére szól. Nem kezelünk és nem gyűjtünk 13 év alatti gyermekekről személyes adatokat szülői vagy gondviselői hozzájárulás nélkül.</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Cookie-k (sütik) kezelése</h5>
                <p>Weboldalunkon „cookie”-kat alkalmazunk, amelyek információt tárolnak az Ön böngészőjében. Ehhez az Ön hozzájárulása szükséges.</p>
                <h6 style={{ color: '#00D28C' }} className="mt-3">Milyen „sütikkel” találkozhat?</h6>
                <ul>
                  <li>Elengedhetetlen munkamenet (session-id) sütik</li>
                  <li>Analitikai vagy teljesítményfigyelő sütik</li>
                  <li>Funkcionális sütik</li>
                  <li>Célzott vagy reklám sütik</li>
                </ul>
                <h6 style={{ color: '#00D28C' }} className="mt-3">A „sütik” kezelése, törlése</h6>
                <p>A sütiket a böngésző beállításaiban törölheti vagy letilthatja. A letiltás befolyásolhatja a weboldal működését.</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Adatvédelmi incidens</h5>
                <p>Adatvédelmi incidens esetén az Adatkezelő indokolatlan késedelem nélkül, de legkésőbb 72 órán belül értesíti a Nemzeti Adatvédelmi és Információszabadság Hatóságot (1125 Budapest, Szilágyi Erzsébet fasor 22/c., e-mail: ugyfelszolgalat@naih.hu). Amennyiben az adatvédelmi incidens valószínűsíthetően magas kockázatot jelent az érintettek jogaira és szabadságaira nézve, az Adatkezelő haladéktalanul értesíti az érintetteket is.</p>

                <h5 style={{ color: '#00D28C' }} className="mt-4">Fogalmak</h5>
<ul>
  <li><strong>Adatfeldolgozó:</strong> Az adatkezelő nevében személyes adatokat kezelő személy vagy szerv.</li>
  <li><strong>Adatkezelés:</strong> Személyes adatokon végzett bármely művelet (pl. gyűjtés, tárolás, törlés).</li>
  <li><strong>Adattovábbítás:</strong> Személyes adatok harmadik személyek számára történő hozzáférhetővé tétele.</li>
  <li><strong>Adatvédelmi incidens:</strong> A biztonság sérülése, amely a személyes adatok véletlen vagy jogellenes megsemmisítését, elvesztését, megváltoztatását, jogosulatlan közlését vagy hozzáférését eredményezi.</li>
  <li><strong>ÁSZF:</strong> A weboldalon közzétett, az Adatkezelő termék- és szolgáltatás-értékesítési szabályait rögzítő Általános Szerződési Feltételek.</li>
  <li><strong>Címzett:</strong> Természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amellyel a személyes adatot közlik.</li>
  <li><strong>Érintett hozzájárulása:</strong> Az érintett önkéntes, konkrét, megfelelő tájékoztatáson alapuló, egyértelmű kinyilvánítása, amellyel beleegyezését adja a személyes adatok kezeléséhez.</li>
  <li><strong>Érintett:</strong> Azonosítható természetes személy.</li>
  <li><strong>Harmadik fél:</strong> Olyan személy vagy szerv, amely nem azonos az érintettel, az adatkezelővel vagy az adatfeldolgozóval.</li>
  <li><strong>Hatóság:</strong> Nemzeti Adatvédelmi és Információszabadság Hatóság (1125 Budapest, Szilágyi Erzsébet fasor 22/c., e-mail: ugyfelszolgalat@naih.hu).</li>
  <li><strong>Személyes adat:</strong> Az érintettre vonatkozó bármely információ.</li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdatvedelmiNyilatkozat;

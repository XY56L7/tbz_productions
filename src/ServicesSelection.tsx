import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServiceSelection.css";

const ServiceSelection = () => {
  return (
    <div className="my-section container py-5" id="services">
      <div className="row">
        {/* Left-side text (sticky) */}
        <div className="text-content col-md-6 mb-4 mb-md-0">
          <div className="heading mb-3">
            <h2 className="heading-text">Szolgáltatások</h2>
          </div>
          <div className="description">
            <p className="desc-text">
              A mai világban elengedhetetlenné vált az online jelenlét, hiszen ha NEM
              LÁTSZOL = NEM JÁTSZOL. Kreatív csapatunk küldetése, hogy ebben segítséget
              nyújtson Neked és a márkád/céged számára.
            </p>
          </div>
          <div className="button-container mt-3">
            <a
              href="#referenciak"
              tabIndex={0}
              className="btn btn-light custom-btn ref-btn"
            >
              Referenciák
            </a>
          </div>
        </div>

        {/* Right-side cards */}
        <div className="cards col-md-6">
          {/* Card 1 */}
          <div className="card-item mb-4">
            <div
              className="card-img"
              style={{
                backgroundImage:
                  "url(https://via.placeholder.com/400x300?text=Card+1)",
              }}
            ></div>
            <div className="card-content p-3">
              <h3 className="card-title">
                Teljeskörű tartalomgyártás a tervezéstől a posztolásig
              </h3>
              <p className="card-desc">
                Figyelemfelkeltő rövid videós tartalmak, amelyek hatékonyan vonzzák be a
                közönséget, miközben stílusosan képviselik márkádat. Érzelmeket váltanak
                ki és hatékonyan közvetítik az üzenetedet. Ezek a videók ideálisak arra,
                hogy elérd közönségedet ott, ahol a legtöbb időt töltik: a közösségi médián.
              </p>
              <a href="#" className="btn btn-light custom-btn quote-btn">
                Árajánlat <span className="btn-subtext">(24H)</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-item mb-4">
            <div
              className="card-img"
              style={{
                backgroundImage:
                  "url(https://via.placeholder.com/400x300?text=Card+2)",
              }}
            ></div>
            <div className="card-content p-3">
              <h3 className="card-title">Reklám és Image videók készítése</h3>
              <p className="card-desc">
                Magával ragadó, minőségi reklámfilmek, amelyek hatékonyan mesélik el
                márkád üzenetét és történetét.
              </p>
              <a href="#" className="btn btn-light custom-btn quote-btn">
                Árajánlat <span className="btn-subtext">(24H)</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-item mb-4">
            <div
              className="card-img"
              style={{
                backgroundImage:
                  "url(https://via.placeholder.com/400x300?text=Card+3)",
              }}
            ></div>
            <div className="card-content p-3">
              <h3 className="card-title">Fotózás</h3>
              <p className="card-desc">
                Minőségi és karakteres fotók, amelyek valóban kiemelik márkád
                egyediségét, valamint megmutatják termékeid/szolgáltatásaid értékét.
                Célunk, hogy a legtöbbet hozzuk ki a márkából.
              </p>
              <a href="#" className="btn btn-light custom-btn quote-btn">
                Árajánlat <span className="btn-subtext">(24H)</span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card-item mb-4">
            <div
              className="card-img"
              style={{
                backgroundImage:
                  "url(https://via.placeholder.com/400x300?text=Card+4)",
              }}
            ></div>
            <div className="card-content p-3">
              <h3 className="card-title">Social media management</h3>
              <p className="card-desc">
                Mi gondoskodunk a közösségi médiád sikeréről! Facebook, Instagram, TikTok
                és YouTube profiljaidat aktívan frissítjük, vonzó tartalommal töltjük meg.
              </p>
              <a href="#" className="btn btn-light custom-btn quote-btn">
                Árajánlat <span className="btn-subtext">(24H)</span>
              </a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card-item mb-4">
            <div
              className="card-img"
              style={{
                backgroundImage:
                  "url(https://via.placeholder.com/400x300?text=Card+5)",
              }}
            ></div>
            <div className="card-content p-3">
              <h3 className="card-title">Weboldal tervezés és fejlesztés</h3>
              <p className="card-desc">
                Professzionális, modern, esztétikus, felhasználóbarát weboldalak, amelyek
                megfelelnek céged igényeinek és céljainak.
              </p>
              <a href="#" className="btn btn-light custom-btn quote-btn">
                Árajánlat <span className="btn-subtext">(24H)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;
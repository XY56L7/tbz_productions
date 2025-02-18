import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServiceSelection.css";

const ServiceSelection = () => {
  return (
    <div className="my-section container py-5">
      <div className="row">
        {/* Bal oldali szöveges tartalom */}
        <div className="text-content col-md-6 mb-4 mb-md-0">
          <div className="heading mb-3">
            <h2 className="heading-text">
              Számos valódi problémára nyújtunk megoldást
            </h2>
          </div>
          <div className="description">
            <p className="desc-text">
              Ma már azt a kort éljük ahol szinte elengedhetetlen, hogy aktív
              social média jelenléte legyen a cégednek. A short-form tartalmak
              ehhez pedig a legnagyobb fegyvered lesz!
            </p>
            <p className="desc-text">
              Feltéve ha megfelelő kézben van. Legyen szó organikus márka építésről
              ahol minden a megtekintésekről és a követésekről szól vagy éppen
              konverzió fókuszú hirdetés videókról, állunk rendelkezésedre! Ugyanis
              minden téren több ezer videó tapasztalatunk van. Teljeskörű
              szolgáltatásainkkal célunk, hogy egy kézben megkapj mindent, ami
              tartalomgyártás.
            </p>
            <p className="desc-text">
              Legyen szó a tiktokról, short-form tartalmakról, reklám és image
              filmekről vagy éppen fotózásról. Minden projektet alaposan
              megtervezünk, figyelembe véve az egyedi kéréseket, igényeket és
              célokat, hogy a legjobb végeredményt érjük el.
            </p>
          </div>
          <div className="button-container mt-3">
            <a
              href="#referenciak"
              tabIndex={0}
              className="btn btn-light custom-btn"
            >
              Referenciák
            </a>
          </div>
        </div>

        {/* Jobb oldali kártyák */}
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
              <h3 className="card-title">Card 1 Title</h3>
              <p className="card-desc">
                Description for card 1. Lorem ipsum dolor sit amet.
              </p>
              <a href="#" className="btn btn-light custom-btn">
                Árajánlat <span className="btn-subtext">(24-48H)</span>
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
              <h3 className="card-title">Card 2 Title</h3>
              <p className="card-desc">
                Description for card 2. Lorem ipsum dolor sit amet.
              </p>
              <a href="#" className="btn btn-light custom-btn">
                Árajánlat <span className="btn-subtext">(24-48H)</span>
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
              <h3 className="card-title">Card 3 Title</h3>
              <p className="card-desc">
                Description for card 3. Lorem ipsum dolor sit amet.
              </p>
              <a href="#" className="btn btn-light custom-btn">
                Árajánlat <span className="btn-subtext">(24-48H)</span>
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
              <h3 className="card-title">Card 4 Title</h3>
              <p className="card-desc">
                Description for card 4. Lorem ipsum dolor sit amet.
              </p>
              <a href="#" className="btn btn-light custom-btn">
                Árajánlat <span className="btn-subtext">(24-48H)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;

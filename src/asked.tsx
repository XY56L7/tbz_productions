// FAQ.jsx
import React, { useEffect, useRef } from 'react';
import './FAQ.css';

const processSteps = [
  { subtitle: "Kapcsolatfelvétel", description: "Töltsd ki az űrlapot vagy foglalj egy teljesen díjmentes konzultációt, és 24 órán belül felvesszük veled a kapcsolatot." },
  { subtitle: "Ismerkedés", description: "Online vagy személyes meetingen megismerjük vállalkozásod és céljaid." },
  { subtitle: "Megegyezés", description: "Szerződéskötés után elkezdjük a közös munkát." },
  { subtitle: "Tervezés és forgatás", description: "Stratégiát készítünk, forgatókönyvet írunk, majd professzionális tartalmat forgatunk." },
  { subtitle: "Utómunka és átadás", description: "A kész anyagokat szerkesztjük, átadjuk jóváhagyásra, majd kezeljük a közösségi médiádat, ha kéred." },
];

const FAQ = () => {
  const sectionRef = useRef(null);

  return (
    <section className="faq-section" id="FAQ" ref={sectionRef}>
      <div className="starry-background" />
      <div className="cards-container">
        <ul className="cards">
          {processSteps.map((step, index) => (
            <li key={index} className={`card card-${index + 1}`}>
              <div className="card-body">
                <h2 className="layer-subtitle">{step.subtitle}</h2>
                <p className="layer-description">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
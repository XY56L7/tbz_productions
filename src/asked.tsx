import React, { useEffect, useRef } from "react";
import './FAQ.css';

interface ProcessStep {
  subtitle: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  { subtitle: "Kapcsolatfelvétel", description: "Töltsd ki az űrlapot vagy foglalj egy teljesen díjmentes konzultációt, és 24 órán belül felvesszük veled a kapcsolatot." },
  { subtitle: "Ismerkedés", description: "Online vagy személyes meetingen megismerjük vállalkozásod és céljaid." },
  { subtitle: "Megegyezés", description: "Szerződéskötés után elkezdjük a közös munkát." },
  { subtitle: "Tervezés és forgatás", description: "Stratégiát készítünk, forgatókönyvet írunk, majd professzionális tartalmat forgatunk." },
  { subtitle: "Utómunka és átadás", description: "A kész anyagokat szerkesztjük, átadjuk jóváhagyásra, majd kezeljük a közösségi médiádat, ha kéred." },
];

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isLocked = useRef(false);
  const animationCompleted = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      const mainBox = sectionRef.current.querySelector('.process-main') as HTMLElement;
      const layers = sectionRef.current.querySelectorAll('.process-layer') as NodeListOf<HTMLElement>;

      if (sectionTop < windowHeight && sectionBottom > 0) {
        mainBox.classList.add('visible');

        const scrollProgress = Math.min(1, Math.max(0, (windowHeight - sectionTop) / (windowHeight * 1.5)));

        let allStacked = true;
        let currentIndex = -1;
        layers.forEach((layer, index) => {
          const stackOffset = index * 50; // Távolság fentről
          const triggerPoint = 0.2 + (index * 0.15);
          if (scrollProgress >= triggerPoint) {
            layer.classList.add('visible');
            layer.style.top = `${stackOffset}px`; // Pozícionálás a konténerben
            currentIndex = index;
          } else {
            layer.classList.remove('visible');
            allStacked = false;
          }
        });

        // Stackelés: az előző kártyák csak a címet mutatják
        layers.forEach((layer, index) => {
          if (index < currentIndex) {
            layer.classList.add('stacked');
          } else {
            layer.classList.remove('stacked');
          }
        });

        if (!allStacked && !isLocked.current && !animationCompleted.current) {
          isLocked.current = true;
          const scrollPosition = window.scrollY;
          document.body.style.overflow = 'hidden';
          window.scrollTo(0, scrollPosition);
        } else if (allStacked && isLocked.current) {
          isLocked.current = false;
          animationCompleted.current = true;
          document.body.style.overflow = '';
        }
      } else {
        mainBox.classList.remove('visible');
        layers.forEach(layer => layer.classList.remove('visible', 'stacked'));
        if (isLocked.current && animationCompleted.current) {
          isLocked.current = false;
          document.body.style.overflow = '';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section className="faq-section" id="FAQ" ref={sectionRef}>
      <div className="faq-container">
        <div className="starry-background" />
        
        <div className="process-stack">
          <div className="process-main">
            <h2 className="section-title">Hogy néz ki a közös munka?</h2>
            <div className="layer-container">
              {processSteps.map((step, index) => (
                <div key={index} className="process-layer">
                  <h3 className="layer-subtitle">{step.subtitle}</h3>
                  <p className="layer-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
// FAQ.tsx
import React, { useEffect, useRef, useState } from "react";
import './FAQ.css';

interface ProcessStep {
  subtitle: string;
  description: string;
}

interface InfoBox {
  title: string;
  text: string;
}

const processSteps: ProcessStep[] = [
  { subtitle: "Kapcsolatfelvétel", description: "Töltsd ki az űrlapot vagy foglalj egy teljesen díjmentes konzultációt, és 24 órán belül felvesszük veled a kapcsolatot." },
  { subtitle: "Ismerkedés", description: "Online vagy személyes meetingen megismerjük vállalkozásod és céljaid." },
  { subtitle: "Megegyezés", description: "Szerződéskötés után elkezdjük a közös munkát." },
  { subtitle: "Tervezés és forgatás", description: "Stratégiát készítünk, forgatókönyvet írunk, majd professzionális tartalmat forgatunk." },
  { subtitle: "Utómunka és átadás", description: "A kész anyagokat szerkesztjük, átadjuk jóváhagyásra, majd kezeljük a közösségi médiádat, ha kéred." },
];

const additionalInfo: InfoBox[] = [
  { title: "Mennyibe kerül?", text: "Minden projekt egyedi, személyre szabott árajánlatot készítünk. Kérj ajánlatot!" },
  { title: "Miért éri ez meg nekem?", text: "Leveszünk rólad minden terhet: profi csapatunk mindent egy kézben tart, neked csak jóváhagynod kell a kész anyagokat." },
  { title: "Ki fog szerepelni?", text: "Te vagy céged emberei, de ha kéred, mi is biztosítunk szereplőt." }
];

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openSteps, setOpenSteps] = useState<number[]>([]);

  const toggleStep = (index: number) => {
    setOpenSteps(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const totalItems = processSteps.length + additionalInfo.length + 1;

      // Scroll progress over the entire section
      const scrollProgress = Math.min(1, Math.max(0, (windowHeight - sectionTop) / (sectionHeight * 0.4)));
      
      // Update each element's position
      const elements = sectionRef.current.querySelectorAll('.scroll-item') as NodeListOf<HTMLElement>;
      elements.forEach((element, index) => {
        const itemStart = index / totalItems;
        const itemProgress = Math.min(1, Math.max(0, (scrollProgress - itemStart) / (1 / totalItems)));
        const translateY = (1 - itemProgress) * (windowHeight * 0.5);
        element.style.transform = `translateY(${translateY}px)`;
        element.style.opacity = `${itemProgress}`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="faq-section" id="FAQ" ref={sectionRef}>
      <div className="faq-container">
        <div className="starry-background" />
        
        <div className="process-stack">
          <div className="process-main scroll-item">
            <h2 className="section-title">Hogy néz ki a közös munka?</h2>
            <p className="section-subtitle">Folyamatunk lépésről lépésre</p>
          </div>

          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className={`process-layer scroll-item ${openSteps.includes(index) ? 'open' : ''}`}
              onClick={() => toggleStep(index)}
            >
              <div className="layer-header">
                <h3 className="layer-subtitle">{step.subtitle}</h3>
                <div className="toggle-icon">
                  <span className={`arrow ${openSteps.includes(index) ? 'up' : 'down'}`}>▼</span>
                </div>
              </div>
              <div className={`layer-content ${openSteps.includes(index) ? 'visible' : ''}`}>
                <p className="layer-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="info-grid">
          {additionalInfo.map((item, index) => (
            <div key={index} className="info-box scroll-item">
              <h3 className="info-title">{item.title}</h3>
              <p className="info-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
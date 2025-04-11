import React, { useRef, useEffect, useState } from 'react';
import { CSSProperties } from 'react';

const processSteps = [
  { subtitle: "Kapcsolatfelvétel", description: "Töltsd ki az űrlapot vagy foglalj egy teljesen díjmentes konzultációt, és 24 órán belül felvesszük veled a kapcsolatot." },
  { subtitle: "Ismerkedés", description: "Online vagy személyes meetingen megismerjük vállalkozásod és céljaid." },
  { subtitle: "Megegyezés", description: "Szerződéskötés után elkezdjük a közös munkát." },
  { subtitle: "Tervezés és forgatás", description: "Stratégiát készítünk, forgatókönyvet írunk, majd professzionális tartalmat forgatunk." },
  { subtitle: "Utómunka és átadás", description: "A kész anyagokat szerkesztjük, átadjuk jóváhagyásra, majd kezeljük a közösségi médiádat, ha kéred." },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const rightContainerRef = useRef<HTMLUListElement>(null);
  const [rightCardsVisible, setRightCardsVisible] = useState(false);

  const faqSectionStyle: CSSProperties = {
    background: 'radial-gradient(circle at center, #0a1f1a 0%, #000000 70%)',
    padding: '40px 20px',
    position: 'relative',
    minHeight: 'calc(5 * 40vh + (5 * 7.5em))',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  const starryBackgroundStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"%3E%3Ccircle fill="%23ffffff33" cx="100" cy="100" r="2"/%3E%3Ccircle fill="%23ffffff33" cx="700" cy="200" r="1.5"/%3E%3Ccircle fill="%23ffffff33" cx="400" cy="600" r="2"/%3E%3Ccircle fill="%23ffffff33" cx="200" cy="300" r="1"/%3E%3Ccircle fill="%23ffffff33" cx="600" cy="700" r="1.5"/%3E%3C/svg%3E')`,
    animation: 'twinkle 10s infinite',
    zIndex: 1,
  };

  const twinkleKeyframes = `@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }`;

  const cardsContainerStyle: CSSProperties = {
    width: '45%',
    position: 'relative',
    zIndex: 2,
  };

  const cardsStyleLeft: CSSProperties = {
    ...({
      '--cards': 5,
      '--cardHeight': '20vh',
      '--cardTopPadding': '7.5em',
      '--cardMargin': '4vw',
      listStyle: 'none',
      paddingLeft: 0,
      marginTop: 0,
      marginBottom: '4vw',
      paddingBottom: 'calc(5 * 7.5em)',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(5, 40vh)',
      gap: '4vw',
    } as any),
  };

  const cardsStyleRight: CSSProperties = {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: '4vw',
    display: 'flex',
    flexDirection: 'column',
    gap: '4vw',
    position: 'sticky',
    top: '7.5em',
    opacity: rightCardsVisible ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  const cardStyleLeft: CSSProperties = {
    position: 'sticky',
    top: 'calc(var(--index) * 70px)',
    paddingTop: 'var(--cardTopPadding)',
    backgroundColor: 'transparent',
  };

  const cardStyleRight: CSSProperties = {
    backgroundColor: 'transparent',
  };

  const cardBodyStyle: CSSProperties = {
    boxSizing: 'border-box',
    padding: '1rem',
    borderRadius: '20px',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 179, 143, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    height: '20vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    transition: 'all 0.5s',
    position: 'relative',
    background: '#00362A',
  };

  const layerSubtitleStyle: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#fff',
    margin: '0 0 0.5rem 0',
    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
    textAlign: 'center',
    background: 'transparent',
    width: '100%',
    padding: '10px 0',
    boxSizing: 'border-box',
  };

  const layerDescriptionStyle: CSSProperties = {
    fontSize: '1rem',
    color: '#e6f0ed',
    margin: '0',
    lineHeight: 1.6,
    textAlign: 'center',
    flexGrow: 1,
  };

  const cardIndexStylesLeft = [
    { '--index': 0 } as CSSProperties,
    { '--index': 1 } as CSSProperties,
    { '--index': 2 } as CSSProperties,
    { '--index': 3 } as CSSProperties,
    { '--index': 4 } as CSSProperties,
  ];

  useEffect(() => {
    // Copy leftCardsRef.current to a local variable
    const cards = leftCardsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the first left card becomes visible, show right cards
          if (entry.target === cards[0] && entry.isIntersecting) {
            setRightCardsVisible(true);
          }

          // When the fourth card reaches the fifth card
          if (entry.target === cards[3] && entry.isIntersecting) {
            const fourthCard = cards[3];
            const fifthCard = cards[4];
            if (fourthCard && fifthCard) {
              const fourthRect = fourthCard.getBoundingClientRect();
              const fifthRect = fifthCard.getBoundingClientRect();
              // Check if the fourth card's bottom reaches the fifth card's top
              if (fourthRect.bottom >= fifthRect.top) {
                setRightCardsVisible(false); // Hide right cards
              }
            }
          }
        });
      },
      {
        root: null,
        threshold: [0, 0.1, 0.5, 1], // Multiple thresholds for finer observation
      }
    );

    // Observe left cards
    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup
    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <section style={faqSectionStyle} id="FAQ" ref={sectionRef}>
      <style>{twinkleKeyframes}</style>
      <div style={starryBackgroundStyle} />
      {/* Left Column (5 cards, stacking) */}
      <div style={cardsContainerStyle}>
        <ul style={cardsStyleLeft}>
          {processSteps.map((step, index) => (
            <li
              key={`left-${index}`}
              style={{ ...cardStyleLeft, ...cardIndexStylesLeft[index] }}
              ref={(el) => {
                leftCardsRef.current[index] = el; // Assign ref without returning
              }}
            >
              <div style={cardBodyStyle}>
                <h2 style={layerSubtitleStyle}>{step.subtitle}</h2>
                <p style={layerDescriptionStyle}>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Right Column (3 cards, sticky) */}
      <div style={cardsContainerStyle}>
        <ul style={cardsStyleRight} ref={rightContainerRef}>
          {processSteps.slice(0, 3).map((step, index) => (
            <li key={`right-${index}`} style={cardStyleRight}>
              <div style={cardBodyStyle}>
                <h2 style={layerSubtitleStyle}>{step.subtitle}</h2>
                <p style={layerDescriptionStyle}>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
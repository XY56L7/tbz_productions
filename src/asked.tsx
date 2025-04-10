import React, { useRef } from 'react';

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



  const faqSectionStyle: CSSProperties = {

    background: 'radial-gradient(circle at center, #0a1f1a 0%, #000000 70%)',

    padding: '40px 20px',

    position: 'relative',

    minHeight: 'calc(5 * 40vh + (5 * 7.5em))',

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

    width: '50%',

//     margin: '0 auto',
marginLeft:0,

    position: 'relative',

    zIndex: 2,

  };



  const cardsStyle: CSSProperties = {

    ...(({

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

    }) as any),

  };



  const cardStyle: CSSProperties = {

    position: 'sticky',

    top: 'calc(var(--index) * 70px)',

    paddingTop: 'var(--cardTopPadding)',

    backgroundColor: 'transparent',

  };



  const cardBodyStyle: CSSProperties = {

    boxSizing: 'border-box',

    padding: '1rem', // Csökkentett padding

    borderRadius: '20px',

    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 179, 143, 0.2)',

    border: '1px solid rgba(255, 255, 255, 0.15)',

    height: 'var(--cardHeight)',

    display: 'flex',

    flexDirection: 'column',

    justifyContent: 'flex-start',

    alignItems: 'center',

    transition: 'all 0.5s',

    position: 'relative',

    background: '#00362A', // Teljesen átlátszatlan sötétzöld szín

  };



  const layerSubtitleStyle: CSSProperties = {

    fontSize: '1.5rem',

    fontWeight: 600,

    color: '#fff',

    margin: '0 0 0.5rem 0',

    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',

    textAlign: 'center',

    position: 'sticky',

    top: 0,

    zIndex: 3,

    background: 'transparent', // Háttér eltávolítva vagy átlátszóra állítva

    width: '100%',

    padding: '10px 0', // Csökkentett felső padding

    boxSizing: 'border-box',

  };



  const layerDescriptionStyle: CSSProperties = {

    fontSize: '1rem',

    color: '#e6f0ed',

    margin: '0', // Eltávolított felső margin

    lineHeight: 1.6,

    textAlign: 'center',

    flexGrow: 1,

  };



  const cardIndexStyles = [

    { '--index': 0 } as CSSProperties,

    { '--index': 1 } as CSSProperties,

    { '--index': 2 } as CSSProperties,

    { '--index': 3 } as CSSProperties,

    { '--index': 4 } as CSSProperties,

  ];



  return (

    <section style={faqSectionStyle} id="FAQ" ref={sectionRef}>

      <style>{twinkleKeyframes}</style>

      <div style={starryBackgroundStyle} />

      <div style={cardsContainerStyle}>

        <ul style={cardsStyle}>

          {processSteps.map((step, index) => (

            <li key={index} style={{ ...cardStyle, ...cardIndexStyles[index] }}>

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
import React, { useEffect, useState } from "react";
import "./Section2.css";

function Details() {
  const [active, setactive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const section2 = document.querySelector(".section2");
      var section2_top = section2.getBoundingClientRect().top;

      if (section2_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div className={`section2 ${active && "active"}`} id="Section2">
      <div className="text-content">
        <div className="text text1">
          <h1>
            Creation de <span>Web site</span>
          </h1>
          <h2>
            Équipez-vous d’un site efficace et rentable !
						Vous souhaitez informer, diffuser de l’information, gagner de nouveaux prospects ou vendre des biens ? 
						Notre équipe est disponible pour construire ensemble la solution qui vous permettra d’atteindre vos objectifs.
          </h2>
        </div>

        <div className="text text2">
          <h1>
            <span>Application</span> Web & Mobile
          </h1>
          <h2>
            Vous souhaitez accentuer ou créer un avantage concurrentiel, améliorer l’efficacité et les conditions 
					  de travail de vos équipes. Nous développons des solutions et des applications web sur-mesure, basées
						sur les dernières technologies, garantissant une souplesse d’utilisation, fiabilité et évolutivité
          </h2>
        </div>
      </div>

      <div className="progress">
        <div className="container" style={{ "--x": 1 }}>
          <h2>1</h2>
          <span>Application Web</span>
        </div>

        <div className="container" style={{ "--x": 2 }}>
          <h2>2</h2>
          <span>Application Mobile</span>
        </div>

        <div className="container" style={{ "--x": 3 }}>
          <h2>3</h2>
          <span>Web site</span>
        </div>
      </div>
    </div>
  );
}

export default Details;

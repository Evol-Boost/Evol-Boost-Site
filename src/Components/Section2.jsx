import React, { useEffect, useState } from "react";
import "./Section2.css";
import ImageSlider from "./Slider"
import ActionAreaCard from "./Card";
import img_ecommerce from "../props/template_ecommerce.webp"
import img_vitrine from "../props/template_website.webp"
import img_application from "../props/template_application.webp"

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
          Vous cherchez à faire passer votre entreprise au niveau supérieur ? Notre société de services web propose des sites e-commerce
           et vitrines sur mesure pour vous aider à mettre en valeur votre marque
           et à vendre vos produits en ligne. Notre équipe d'experts travaillera avec vous pour créer un site Web de qualité,
           non seulement visuellement attrayant, mais également optimisé pour les moteurs de recherche. 
          Commencez dès aujourd'hui et regardez votre présence en ligne s'envoler !
          </h2>
        </div>

        <div className="text text2">
          <h1>
            <span>Application</span> Web & Mobile
          </h1>
          <h2>
          Prêt à faire passer votre entreprise au niveau supérieur grâce aux dernières technologies ? Avec nos applications Web, vous pouvez gérer votre entreprise de n'importe où,
           tandis que nos applications mobiles vous permettent de vous connecter avec les clients et de leur offrir une expérience utilisateur transparente.
           Commencez dès aujourd'hui et découvrez la puissance de la technologie innovante pour votre entreprise !
          </h2>
        </div>
      </div>
      <div class="card_container">
        <div class="card1"><ActionAreaCard title={"E-Commerce"} description={<ul>Performances ultra-rapides<br/>Paiement sécurisé<br/>Plateforme intuitive pour le client</ul>} filepath={img_ecommerce}/></div>
        <div class="card2"><ActionAreaCard title={"Site Vitrine"} description={<ul>Intégration d'éléments 3D<br/>Service web sur mesure<br/>Technologie React.js, Node.js</ul>} filepath={img_vitrine}/></div>
        <div class="card3"><ActionAreaCard title={"Application"} description={<ul>Produit Cross-plateform<br/>Design de l'application<br/>Technologie React Native</ul>} filepath={img_application}/></div>
      </div>
      <div class="slider">
        <ImageSlider className="slider_component"/>
      </div>
    </div>
  );
}

export default Details;
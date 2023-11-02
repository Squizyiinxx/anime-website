import logo from "../assets/title1.svg"
import logo2 from "../assets/title2.png"
import logo3 from "../assets/title3.svg"
import logo4 from "../assets/title4.svg"
import logo5 from "../assets/title5.svg"

import img from "../assets/hero.jpg"
import img2 from "../assets/hero2.webp"
import img3 from "../assets/hero3.webp"
import img4 from "../assets/hero4.png"
import img5 from "../assets/hero5.jpeg"


interface InterHero {
  id :number;
  title : string;
  img : string ;
  sinopsis : string;
}


const heroUtils: InterHero[] = [
  {
    id: 21,
    title: logo,
    img: img,
    sinopsis:
      "The late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.",
  },
  {
    id: 40356,
    title: logo2,
    img: img2,
    sinopsis:
      "After defeating the Spirit Tortoise, Naofumi has no time for rest. An attack from the next Guardian Beast is imminent, but the three other Cardinal Heroes have gone missing. So, Naofumi and his party set out to search for the legendary trio.",
  },
  {
    id: 54595,
    title: logo3,
    img: img3,
    sinopsis:
      "Everything has been going according to plan, but the hour of awakening draws near. Cid Kagenou and Shadow Garden investigate the Lawless City, a cesspool where the red moon hangs low in the sky and three powerful monarchs rule the streets. The true draw for Cid, however, is one who can draw blood–the Blood Queen, a vampire who has slumbered in her coffin for eons. Her awakening approaches, and Cid could finally face a day of reckoning.",
  },
  {
    id:50330,
    title: logo4,
    img: img4,
    sinopsis:
      "The Armed Detective Agency is still on the run from the Hunting Dogs, but not all hope is lost. Detective Ranpo Edogawa has a plan to prove the Agency's innocence and save the world from chaos: to find and capture Kamui—the leader of the terrorist organization Decay of the Angel.",
  },
  {
    id:50602,
    title: logo5,
    img: img5,
    sinopsis:
      "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise 'Twilight' fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.",
  },
];

export {heroUtils};
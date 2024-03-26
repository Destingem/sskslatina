

import HeroSection from "/app/components/Universal/HeroSection.js"
import { device } from "app/lib/useDevice"
import Vedeni from "./Vedeni"
import Treneri from "./Treneri"
import Clenove from "./Clenove"
import Rozhodci from "./Rozhodci"
import Profiles from "app/(defaultLayout)/pro-cleny/Profiles"

const clenove = [
  {
    name: "Zdeněk Jeřábek",
    mail: "zdenek.jerabek@sskslatina.cz",
    categories: ["VzPi 60"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Martin Zaplatílek",
    mail: "martin.zaplatilek@sskslatina.cz",
    categories: ["VzPi 60"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Jan Pokorný",
    mail: "jan.pokorny@sskslatina.cz",
    categories: ["VzPi 60"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Kateřina Pokorná",
    mail: "katerina.pokorna@sskslatina.cz",
    categories: ["VzPi 40", "VzPu 40"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Ondřej Zaplatílek",
    mail: "ondrej.zaplatilek@sskslatina.cz",
    categories: ["VzPu 60", "LM 60", "LM 3x20"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Vojtěch Sysel",
    mail: "vojtech.sysel@sskslatina.cz",
    categories: ["VzPu 60", "LM 60", "LM 3x20"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Jaroslav Helešic",
    mail: "jaroslav.helesic@sskslatina.cz",
    categories: ["VzPu 60", "LM 60", "LM 3x20"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Helena Navrátilová",
    mail: "helena.navratilova@sskslatina.cz",
    categories: ["VzPu 60"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Markéta Nykrýnová",
    mail: "marketa.nykrynova@sskslatina.cz",
    categories: ["VzPu 60"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Barbora Jeřábková",
    mail: "barbora.jerabkova@sskslatina.cz",
    categories: ["VzPu 40", "SM 60"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Ema Vašulková",
    mail: "ema.vasulkova@sskslatina.cz",
    categories: ["VzPu 40", "VzPu 60", "SM 60", "SM 3x20"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Erik Viktor Šitavanc",
    mail: "erik.sitavanc@sskslatina.cz",
    categories: ["VzPu 40", "VzPu 60", "SM 60", "SM 3x20"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Jonáš Zaplatílek",
    mail: "jonas.zaplatilek@sskslatina.cz",
    categories: ["VzPu 40", "SM 60"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Albert Srník",
    mail: "albert.srnik@sskslatina.cz",
    categories: ["VzPu 40", "VzPu 60", "SM 60", "SM 3x20"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Jiří Švanda",
    mail: "jiri.svanda@sskslatina.cz",
    categories: ["VzPu 40", "VzPu 30 L"],
    href: "/o-nas/strelci/",
  },
  {
    name: "Filip Kotek",

    categories: ["VzPi 40"],
    href: "/o-nas/strelci/",
  },
  /*
  {
    name: " ",
    mail: "@sskslatina.cz",
    categories: ["VzPi 40"],
    href: "/o-nas/strelci/",
  },*/


]

const vedeni = [
  {
    img: "/images/shooters/1.jpg",
    name: "Ing. Pavel Pěch",
    position: "předseda klubu",
    tel: "+420 667 776 935",
    mail: "predseda@sskslatina.cz",
    categories: ["VzPi 40", "VzPu 40", "VzPi 60", "VzPu 60"],
    href: "/o-nas/strelci/petr-novak",
  },
  {
    img: "/images/shooters/1.jpg",
    name: "David Pokorný",
    position: "místopředseda klubu",
    tel: "+420 667 776 935",
    mail: "mistopredseda@sskslatina.cz",
    categories: [],
    href: "/o-nas/strelci/petr-novak",
  },
  {
    img: "/images/universal/team/martinzaplatilek.jpeg",
    name: "Martin Zaplatílek",
    tel: "+420 667 776 935",
    mail: "jednatel@sskslatina.cz",
    position: "jednatel",
    categories: ["VzPi 60", "LM 60"],
    href: "/o-nas/strelci/petr-novak",
  },
  {
    img: "/images/universal/team/stanislavhlavacek.jpg",
    name: "Stanislav Hlaváček",

    mail: "stanislav.hlavacek@sskslatina.cz",
    position: "čestný předseda",
    categories: ["VzPi 60", "LM 60"],
    href: "/o-nas/strelci/petr-novak",
  },
]
const treneri = [
  {
    img: "/images/shooters/1.jpg",
    name: "Jaroslav Helešic",
    position: "trenér vzduchovkových a malorážních disciplín",
    tel: "+420 667 776 935",
    mail: "predseda@sskslatina.cz",
    categories: ["VzPi 40", "VzPu 40", "VzPi 60", "VzPu 60"],
    href: "/o-nas/strelci/petr-novak",
  },
  {
    img: "/images/universal/team/stanislavhlavacek.jpg",
    name: "Stanislav Hlaváček",
    position: "trenér vzduchovkových a malorážních disciplín",
    tel: "+420 667 776 935",
    mail: "stanislav.hlavacek@sskslatina.cz",
    categories: [],
    href: "/o-nas/strelci/petr-novak",
  },
  {
    img: "/images/universal/team/miracerny.jpg",
    name: "Miroslav Černý",
    tel: "+420 667 776 935",
    mail: "jednatel@sskslatina.cz",
    position: "trenér",
    categories: ["VzPi 60", "LM 60"],
    href: "/o-nas/strelci/petr-novaka",
  },
]
const rozhodci = [
  {
    img: "/images/shooters/1.jpg",
    name: "Jaroslav Helešic",
    position: "trenér vzduchovkových a malorážních disciplín",
    tel: "+420 667 776 935",
    mail: "predseda@sskslatina.cz",
    categories: ["VzPi 40", "VzPu 40", "VzPi 60", "VzPu 60"],
    href: "/o-nas/strelci/petr-novak",
  },
  {
    img: "/images/universal/team/stanislavhlavacek.jpg",
    name: "Stanislav Hlaváček",
    position: "trenér vzduchovkových a malorážních disciplín",
    tel: "+420 667 776 935",
    mail: "stanislav.hlavacek@sskslatina.cz",
    categories: [],
    href: "/o-nas/strelci/petr-novak",
  },
  {
    img: "/images/universal/team/miracerny.jpg",
    name: "Miroslav Černý",
    tel: "+420 667 776 935",
    mail: "jednatel@sskslatina.cz",
    position: "trenér",
    categories: ["VzPi 60", "LM 60"],
    href: "/o-nas/strelci/petr-novaka",
  },
]

async function getData() {
  // URLs to fetch from
  const apiBaseURL = 'http://38.242.151.80:1340/api/';
  const toFetch = [
    {name: "nasiClenove", furl: "clenove-klubu?populate=deep"},
 
  ];

  // Object to store fetched data
  let fetchedData = {};

  // Fetch options
  let options = {
    next: {
      revalidate: 20,
    },
    method: 'GET',
    headers: {
      'User-Agent': 'insomnia/8.6.0',
      Authorization: "Bearer " + process.env.STRAPI
    }
  };

  // Iterate over the toFetch array to perform fetch operations
  for (let item of toFetch) {
    const {name, furl} = item;
    try {
      let url = apiBaseURL + furl;
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${name}`);
      }
      const data = await response.json();
      fetchedData[name] = data.data; // Adjust based on your actual data structure
    } catch (err) {
      console.error(`Error fetching ${name}:`, err);
      fetchedData[name] = []; // Default to empty array on error
    }
  }

  return fetchedData;
}
export default async function Onas(p) {
  var { nasiClenove } = await getData();
 nasiClenove = nasiClenove.map(clen => {return {id: clen.id, ...clen.attributes}})

 var vedeni = []
  var treneri = []
  var rozhodci = []

  for(let clen of nasiClenove){
    if(clen.vedeni){
      vedeni.push(clen)
    
    }
    if(clen.trener){
      treneri.push(clen)
    }
    if(clen.rozhodci){
      rozhodci.push(clen)
    }
  }
  console.log(nasiClenove)
  
  const links = [
    {
      label: "Vedení klubu",
      path: "#vedeni",
      desc: "Kdo jsme a co děláme",
    },
    {
      label: "Trenéři",
      path: "#treneri",
      desc: "Historie našeho klubu a střelby obecně",
    },
    {
      label: "Členové klubu",
      path: "#clenove",
      desc: "Historie našeho klubu a střelby obecně",
    },
  ]

  return (
    <main>
      <HeroSection name="Členové klubu" links={links}>
        Členové našeho sportovního klubu SSK Slatina Brno.
      </HeroSection>
      <div style={{ padding: "4vh 5vw", display: "flex", flexDirection: "column", gap: "5vh" }}>
        <Vedeni id="vedeni" vedeni={vedeni} device={device} nasiClenove={nasiClenove} />
        <Treneri id="treneri" treneri={treneri} device={device} />
        <Rozhodci id="rozhodci" rozhodci={rozhodci} device={device} />
        <Profiles id="profiles" oldProfiles={nasiClenove} device={device} mainLabel={"Členové"} mainText={" "} />
       
      </div>
    </main>
  )
}


import HeroSection from '/app/components/Universal/HeroSection.js'
import Onas from "./Onas"
import Sport from "./Sport"
import Discipliny from "./Discipliny"
import Kategorie from "./Kategorie"
import Rozvoj from "./Rozvoj"
import Zazemi from "./Zazemi"
import Treneri from "./Treneri"
import Strelci from "./Strelci"
import FAQ from "./FAQ"
import CTA from "./CTA"
import { useViewportSize } from '@mantine/hooks'
import { device } from 'app/lib/useDevice'

async function getData() {
  const toFetch = [
    {name: "strelnice", furl: "strelnices?populate=*"}
  ]
  var fetchedData = {}

  for(let item in toFetch){
    const {name, furl} = toFetch[item]
    try{
      let url = 'http://38.242.151.80:1340/api/' + furl;
    
    let options = {
      next: {revalidate: 20},
      method: 'GET',
      headers: {
        'User-Agent': 'insomnia/8.6.0',
        Authorization: "Bearer " + process.env.STRAPI
      }
    };
    
      const res = await fetch(url, options)
      const data = await res.json()
      fetchedData[name] = await data?.data
     }
     catch(err){
      console.log(err)
     }
  }
 return fetchedData
}
export default async function ProCleny(p){
  const data = await getData()
console.log(data)
    const links = [
        {
          label: "O nás",
          path: "#vedeni",
          desc: "Kdo jsme a co děláme",
        },
        {
          label: "Sportovní střelba jako sport",
          path: "#treneri",
          desc: "Historie našeho klubu a střelby obecně",
        },
        {
          label: "Střelecké disciplíny",
          path: "#clenove",
          desc: "Historie našeho klubu a střelby obecně",
        },
        {
            label: "Kategorie závodníků",
            path: "#clenove",
            desc: "Historie našeho klubu a střelby obecně",
          },
          {
            label: "Možnosti rozvoje a další zapojení",
            path: "#clenove",
            desc: "Historie našeho klubu a střelby obecně",
          },
          {
            label: "Naše zázemí",
            path: "#clenove",
            desc: "Historie našeho klubu a střelby obecně",
          },
          {
            label: "Trenéři",
            path: "#clenove",
            desc: "Historie našeho klubu a střelby obecně",
          },
          {
            label: "Střelci",
            path: "#clenove",
            desc: "Historie našeho klubu a střelby obecně",
          },
      ]
      const winShooters = [
        {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
        {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
        {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
        {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
        {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
        {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
        
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
        href: "/o-nas/strelci/petr-novak",
      },
    ]
    return(
        <main>
            <HeroSection name="Pro zájemce" links={links}>
            Zaujala vás sportovní střelba a rádi byste se dozvědeli více? Podívejte se na následující sekce.
            </HeroSection>
            <div style={{ padding: "4vh 5vw", display: "flex", flexDirection: "column", gap: "5vh" }}>
            <Onas id="news"  device={device} />
            <Sport id="training" device={device} />
            <Discipliny id="training" device={device} />
            <Kategorie id="training" device={device} />
            <Rozvoj id="training" device={device} />
            <Zazemi id="training" device={device} strelnice={data?.strelnice} />
            <Treneri treneri={treneri} id="training" device={device} />
            <Strelci shooters={winShooters} id="training" device={device} />
            <FAQ id="training" device={device} />
            <CTA id="training" device={device} />
            </div>
        </main>
    )
}

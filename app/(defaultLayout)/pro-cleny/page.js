"use client"
import { useViewportSize } from '@mantine/hooks';
import HeroSection from '/app/components/Universal/HeroSection.js'
import useDevice from 'app/lib/useDevice';
import Profiles from './Profiles'
import RecommendedCompetitions from './RecommendedCompetitions'
import NewsForMembers from './NewsForMembers'
import TrainingResources from './TrainingResources'

const profiles = [
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
export const meta = {}
export default function ProCleny(p){


/*let json = csvToJson.getJsonFromCsv("/calendarShooting.csv");
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}*/
const { width } = useViewportSize()
const device = useDevice(width)
    return(
        <main>
            <HeroSection name="Pro členy" >
            Najdete zde soutěží pořádaných SSK Slatina Brno. Registrovat se můžete jednoduše po rozkliknutí soutěže.
            </HeroSection>
            <div style={{ padding: "4vh 5vw", display: "flex", flexDirection: "column", gap: "5vh" }}>
            <NewsForMembers id="news"  device={device} />
            <TrainingResources id="training" device={device} />
                <Profiles id="profiles" profiles={profiles} device={device} />
                <RecommendedCompetitions id="profiles" profiles={profiles} device={device} />
               
            </div>
        </main>
    )
}
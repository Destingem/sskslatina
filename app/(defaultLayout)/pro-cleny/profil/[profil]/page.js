"use client"
import { useViewportSize } from "@mantine/hooks";
import HeroSection from "../../../../components/Universal/HeroSection";
import useDevice from "app/lib/useDevice";
import Records from "./Records";
import Sucesses from "./Sucesses";
import Results from "./Results";
import Stats from "./Stats";
export default function Onas(p){
const shooter = {
    fName: "Petr",
    lName: "Novák",
    results: {
        VzPu: {
            40: [
                {name: "Mistrovstí ČR", place: 1, date: "2022-09-01", total:412.7, polozky: [102.3, 103.2, 104.5, 103.2,], ct: 30, link: "/vysledky/mistrovstvi-cr/2022-09-01"},
                {name: "Pohár SSK Slatina Brno", place: 3, date: "2022-09-01", total:410.7, polozky: [100.3, 101.2, 103.5, 103.2,], ct: 35, link: "/vysledky/mistrovstvi-cr/2022-09-01"},
                {name: "Mistrovstí ČR", place: 1, date: "2022-09-01", total:412.7, polozky: [102.3, 103.2, 104.5, 103.2,], ct: 30, link: "/vysledky/mistrovstvi-cr/2022-09-01"},
            ]
        }
    }
}
const { fName, lName } = shooter;

const links = [
    {
      label: "Osobní rekordy",
      path: "#rekordy",
      desc: "Nejlepší výsledky střelce v různých disciplínách",
    },
    {
      label: "Úspěchy",
      path: "#uspechy",
      desc: "Nejlepší umístění střelce v různých soutěžích",
    },
    {
      label: "Výsledky",
      path: "#vysledky",
      desc: "Aktuální výsledky střelce v různých disciplínách",
    },
    {
        label: "Statistiky",
        path: "#statistiky",
        desc: "Statistiky výkonnosti střelce v různých disciplínách",
      },
  ]
  const { width } = useViewportSize()
  const device = useDevice(width)
    return(
        <main>
        <HeroSection name={fName + " " + lName} links={links} >
          Profil střelce
        </HeroSection>
        <div style={{ padding: "4vh 5vw", display: "flex", flexDirection: "column", gap: "5vh" }}>
            <Records id="rekordy" device={device} />
            <Sucesses id="uspechy" device={device} />
            <Results id="vysledky" device={device} />
            <Stats  id="statistiky" device={device} />
        </div>
        </main>
    )
}
export function getStaticPaths() {
  

}
export function getStaticProps({params}) {
    return {
        props: {
            id: params?.profil
        }
    }
}
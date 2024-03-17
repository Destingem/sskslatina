"use client"
import HeroSection from '/app/components/Universal/HeroSection.js'
import Onas from "./Onas"
import FAQ from "./FAQ"
import { useViewportSize } from '@mantine/hooks'
import useDevice from 'app/lib/useDevice'
export const meta = {}

export default function ProCleny(p){
    const { width } = useViewportSize()
const device = useDevice(width)
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
    return(
        <main>
            <HeroSection name="Pro zájemce" links={links}>
            Najdete zde soutěží pořádaných SSK Slatina Brno. Registrovat se můžete jednoduše po rozkliknutí soutěže.
            </HeroSection>
            <div style={{ padding: "4vh 5vw", display: "flex", flexDirection: "column", gap: "5vh" }}>
            <Onas id="news"  device={device} />
            <FAQ id="training" device={device} />
            </div>
        </main>
    )
}
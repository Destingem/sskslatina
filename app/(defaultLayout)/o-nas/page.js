"use client"
import { Text } from "@mantine/core"
import HeroSection from "/app/components/Universal/HeroSection.js"
import SectionHeader from "/app/components/Universal/SectionHeader"
import ShooterCTA from "/app/components/Universal/ShooterCTA"
import Uvod from "./Uvod"
import Historie from "./Historie"
import WhatWeDo from "./WhatWeDo"
import FAQuestions from "./FAQuestions"
import Equipment from "./Equipment"
import OurShooters from "./OurShooters"
import { useViewportSize } from "@mantine/hooks"
import useDevice from "app/lib/useDevice"
export default function Onas(p) {
 
    const device = useDevice()
  const links = [
    {
      label: "Úvod",
      path: "#uvod",
      desc: "Kdo jsme a co děláme",
    },
    {
      label: "Historie",
      path: "#historie",
      desc: "Historie našeho klubu a střelby obecně",
    },
    {
      label: "Co děláme",
      path: "#co-delame",
      desc: "Jaké disciplíny střílíme, kdo jsou naši střelci...",
    },
    {
      label: "Vybavení a zázemí",
      path: "#vybaveni",
      desc: "Kde trénujeme a jaké máme vybavení",
    },
    
    {
      label: "Úspěšní střelci",
      path: "#strelci",
      desc: "Naši úspěšní odchovanci",
    },
    {
        label: "Často kladené dotazy",
        path: "#faq",
        desc: "Naši úspěšní odchovanci",
      },
   
  ]
  return (
    <main>
      <HeroSection name="O nás" links={links}>
        Kdo jsme a co děláme, to se dozvíte níže.
      </HeroSection>
    <div style={{padding: "4vh 5vw", display: "flex", flexDirection: "column", gap: "5vh"}}>
   <Uvod id="uvod" device={device} />
   <Historie id="historie" device={device} />
   <WhatWeDo id="co-delame" device={device} />
   <Equipment id="vybaveni" device={device} />
 
    <OurShooters id="strelci" device={device} />
    <FAQuestions id="faq" device={device} />
    <ShooterCTA device={device} />
    </div>
    </main>
  )
}

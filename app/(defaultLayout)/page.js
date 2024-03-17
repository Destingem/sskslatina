
"use client";
import { Button } from "components/Button/Button"
import  About  from "/app/components/Main/About"
import { LP_GRID_ITEMS } from "lp-items"
import Hero from "/app/components/Main/Hero"
import Competitions from "/app/components/Main/Competitions"
import News from "/app/components/Main/News"
import Shooters from "/app/components/Main/Shooters"
import Shop from "/app/components/Main/Shop"
import ShooterCTA from "/app/components/Universal/ShooterCTA"
import useDevice from "/app/lib/useDevice"
import { useViewportSize } from "@mantine/hooks"
import { useRouter } from "next/navigation";



export default function Web() {
  const {width} = useViewportSize();
  const device = useDevice(width)
  const router = useRouter()
  return (
    <main>
      <Hero />
      <About device={device} />
      <Competitions device={device} />
      <News device={device} />
      <Shooters device={device} />
      <Shop device={device} />
      <ShooterCTA device={device} />
    </main>
  )
}

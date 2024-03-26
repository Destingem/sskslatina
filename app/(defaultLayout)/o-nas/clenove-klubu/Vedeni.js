"use client"
import { SimpleGrid } from "@mantine/core"
import SectionHeader from "../../../components/Universal/SectionHeader"
import ShooterCard from "../../../components/Universal/ShooterCard"
import { useEffect } from "react"
export default function Vedeni({ id, device, vedeni, nasiClenove }) {
  console.log(nasiClenove)
  console.log("Vedení:", vedeni)
  return (
    <section id={id} style={{ maxWidth: "100%" }}>
      <SectionHeader mainText="Vedení klubu" subtitle=""></SectionHeader>

      <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
        {vedeni?.map((shooter, index) => {
          const newShooter = { img: "http://38.242.151.80:1340" + shooter?.photo?.data?.attributes.url,
          name: shooter?.jmeno + " " + shooter?.prijmeni,
          position: shooter?.pozice_vedeni,
          tel: shooter?.multiple_tel,
            mail: shooter?.multiple_mail1,
            href: "/pro-cleny/profil/" + shooter?.id
           }
          return <ShooterCard color={"#E6FDFD"} bacolor={"cyan"} key={index} {...newShooter} device={device} />
        })}
      </SimpleGrid>
    </section>
  )
}

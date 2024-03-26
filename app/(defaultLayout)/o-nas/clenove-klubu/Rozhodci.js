"use client";
import { SimpleGrid } from "@mantine/core"
import SectionHeader from "../../../components/Universal/SectionHeader"
import ShooterCard from "../../../components/Universal/ShooterCard"
export default function Rozhodci({ id, device, rozhodci }) {
  return (
    <section id={id} style={{ maxWidth: "100%" }}>
      <SectionHeader mainText="Rozhodčí" subtitle=""></SectionHeader>

      <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
        {rozhodci?.map((shooter, index) => {
          const newShooter = { img: "http://38.242.151.80:1340" + shooter?.photo?.data?.attributes.url,
          name: shooter?.jmeno + " " + shooter?.prijmeni,
          position: shooter?.pozice_rozhodci,
          tel: shooter?.multiple_tel,
            mail: shooter?.multiple_mail1,
            href: "/pro-cleny/profil/" + shooter?.id
          }
          return(
          <ShooterCard color={"#FDF9E6"} bacolor={"orange"} ic={"orange"} key={index} {...newShooter} device={device} />
        )
        })}
      </SimpleGrid>
    </section>
  )
}

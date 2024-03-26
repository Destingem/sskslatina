"use client"
import isDevice from "app/lib/useDevice"
import SectionHeader from "../../components/Universal/SectionHeader"
import CompetitionCard from "../../components/Universal/CompetitionCard"
import { SimpleGrid } from "@mantine/core"
import formatSlug from "app/lib/formatSlug"

export default function Upcoming({ souteze, nadchazejiciSouteze, ukonceneSouteze }) {
  const device = isDevice()
  console.log(souteze)
  console.log("Nadcházející soutšže", nadchazejiciSouteze)
  console.log("Ukončené", ukonceneSouteze)

  return (
    <section style={{ padding: "2vh 5vw" }}>
      <SectionHeader mainText="Nadcházející soutěže" btnText={"Všechny nadcházející soutěže"} btnLink={"/nadchazejici-zavody"}></SectionHeader>
      <SimpleGrid cols={device !== "m" ? 3 : 1} gap={20}>
        {nadchazejiciSouteze?.map((co, index) => {
          const com = co.attributes
          let discipliny = com?.disciplina.map((disc, i) => {
            return disc?.disciplina?.data?.attributes?.name
          })
          var cardCategorie = []
          for(const disciplina of com?.disciplina){
            for(const kategorie of disciplina?.kategories?.data){
              
              if(!cardCategorie.includes(kategorie?.attributes?.nazev)){
                cardCategorie.push(kategorie?.attributes?.nazev)
              }
            }
          }
          const href = "/souteze/" + formatSlug(com?.nazev + "-" + co?.id)
          return (
            <CompetitionCard
              {...co}
              key={index}
              device={device}
              name={com?.nazev}
              desc={com?.popis}
              date={{ from: com?.termin_od, to: com?.termin_do }}
              discipliny={discipliny}
              categories={cardCategorie}
              
              href={href}
              location={{ url: com?.strelnice?.data?.attributes?.mapa, name: com?.strelnice?.data?.attributes?.nazev, adress: com?.strelnice?.data?.attributes?.adresa}}
            />
          )
        })}
      </SimpleGrid>
    </section>
  )
}

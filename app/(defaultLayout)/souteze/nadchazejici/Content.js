"use client"
import { SimpleGrid } from "@mantine/core"
import formatSlug from 'app/lib/formatSlug';
import CompetitionCard from 'app/components/Universal/CompetitionCard';
export default function Content({nadchazejiciSouteze, device}){

    return(
        <SimpleGrid cols={device == "m" ? 1 : 3} gap={20}>
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
    )
}
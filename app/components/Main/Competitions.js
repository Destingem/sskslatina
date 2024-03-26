"use client"
import { Button, Grid, SimpleGrid, Space, Text, rem } from "@mantine/core";
import SectionHeading from "../Universal/SectionHeading";
import CompetitionCard from "../Universal/CompetitionCard";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import AllButton from "../Universal/AllButton";
import SectionHeader from "../Universal/SectionHeader";
import formatSlug from "../../lib/formatSlug"
import { Carousel } from "@mantine/carousel";
export default function Competitions({device, souteze}) {

    return(
        <section style={{padding: "2vh 5vw"}}>
           <SectionHeader mainText="Naše soutěže" btnText={"Všechny soutěže"} btnLink={"/souteze"}></SectionHeader>
           
            <Carousel slideSize={device !== "m" ? "33%" : "100%"}  slideGap={"lg"} align="start">
            {souteze?.map((co, index) => {
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
                return(
                    <Carousel.Slide key={index}>
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
                    </Carousel.Slide>
                )
            })}
            </Carousel>
        </section>
    )
}
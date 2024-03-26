"use client"
import { Carousel } from "@mantine/carousel";
import SectionHeader from "../../components/Universal/SectionHeader";
import WinnerCard from "../o-nas/WinnerCard";
export default function Strelci({device, id, shooters}){
    return(
        <section id={id} style={{maxWidth: "100%"}}>
        <SectionHeader mainText="Naši střelci" subtitle=""></SectionHeader>
     
<Carousel slideSize={device !== "m" ? "25%" : "100%"}  align="start" slideGap="md" controlSize={33} loop withIndicators>
                {shooters?.map((shooter, index) => <Carousel.Slide key={index}><WinnerCard key={index} {...shooter} device={device} /></Carousel.Slide>)}
               </Carousel>
          

    </section>
    )
}
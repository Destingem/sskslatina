"use client"
import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../Universal/SectionHeader";
import ShooterCard from "../Universal/ShooterCard";
import { Carousel } from "@mantine/carousel";


export default function Shooters({device, nasiClenove}){

    return(
        <section style={{padding: "2vh 5vw"}}>
               <SectionHeader subtitle={"Kdo nás reprezentuje"} mainText="Naši střelci" btnText={"Všichni naši střelci"} btnLink={"/o-nas/nasi-strelci"}></SectionHeader>
               <Carousel slideSize={device !== "m" ? "20%" : "100%"}  slideGap={"lg"} align="start">
                {nasiClenove?.map((shooter, index) => <Carousel.Slide key={index}><ShooterCard key={index} {...shooter} device={device} ic={"#12b886"}  /></Carousel.Slide>)}
               </Carousel>
        </section>
    )
}
"use client"
import { Avatar, Group, Image, SimpleGrid, Space, Text, Title } from "@mantine/core";
import SectionHeader from "../../components/Universal/SectionHeader";
import { RiMapPinRangeLine } from "react-icons/ri";
import { GiRifle, GiWhistle } from "react-icons/gi";
import { Carousel } from "@mantine/carousel";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import Strelnice from "../kontakt/Strelnice";
export default function Zazemi({device, id, strelnice}){
    console.log(strelnice)
    return(
        <section id={id} style={{maxWidth: "100%"}}>
        <SectionHeader mainText="Zázemí" subtitle=""></SectionHeader>
        <Group style={{margin: "3vh 0"}}>
        <Avatar color="green" size={"lg"}><RiMapPinRangeLine /></Avatar>
        <Title order={3} style={{fontSize: "2rem"}}>Střelnice</Title>
       </Group>
     <Strelnice strelnice={strelnice} />
       <Group style={{margin: "3vh 0"}}>
        <Avatar color="green" size={"lg"}><GiWhistle /></Avatar>
        <Title order={3} style={{fontSize: "2rem"}}>Trenéři</Title>
       </Group>
          
       <Group style={{margin: "3vh 0"}}>
        <Avatar color="green" size={"lg"}><GiRifle /></Avatar>
        <Title order={3} style={{fontSize: "2rem"}}>Vybavení</Title>
       </Group>
    </section>
    )
}
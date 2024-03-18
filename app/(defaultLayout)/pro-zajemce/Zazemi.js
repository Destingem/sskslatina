"use client"
import { Avatar, Group, Image, SimpleGrid, Space, Text, Title } from "@mantine/core";
import SectionHeader from "../../components/Universal/SectionHeader";
import { RiMapPinRangeLine } from "react-icons/ri";
import { GiRifle, GiWhistle } from "react-icons/gi";
import { Carousel } from "@mantine/carousel";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
export default function Zazemi({device, id, strelnice}){
    console.log(strelnice)
    return(
        <section id={id} style={{maxWidth: "100%"}}>
        <SectionHeader mainText="Zázemí" subtitle=""></SectionHeader>
        <Group style={{margin: "3vh 0"}}>
        <Avatar color="green" size={"lg"}><RiMapPinRangeLine /></Avatar>
        <Title order={3} style={{fontSize: "2rem"}}>Střelnice</Title>
       </Group>
      {strelnice && <SimpleGrid cols={strelnice.length} >
      {strelnice?.map((strel, index) => {
        var {adresa, fotka, galerie, kuse, malorazka, vzduchovka, mapa, nazev, popis, spravce_strelnice} = strel?.attributes
        fotka = fotka?.data?.attributes
        galerie = galerie?.data?.map(item => {return item?.attributes})
        galerie.unshift(fotka)
        console.log(galerie)
            return(
                <div key={index} style={{backgroundColor: "#F1FDE6"}}>
                   <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                   <div style={{maxWidth: "50%", padding: "2vh 2vw"}}>
                    <Title order={4} size={"1.75rem"}>{nazev}</Title>
                    <Text lh={"175%"}>{popis}</Text>
                   <Text fw={800} tt={"uppercase"} c={"green"} mt={"2vh"}>Pro disciplíny</Text>
                   <Text>
                   {vzduchovka ? "Vzduchová puška": ""} {vzduchovka && <br />}
                   {malorazka ? "Malorážní puška": ""} {malorazka && <br />}
                   {kuse ? "Kuše": ""} <br />
                   
                   </Text>
                   <Text fw={800} tt={"uppercase"} c={"green"} mt={"2vh"}>Adresa</Text>
                   <Text>{adresa}</Text>
                   
                    </div>
                 
                    <Carousel height={"100%"} style={{width: "100%"}} loop>
                        {galerie?.map((gal, index)=> {
                            return(
                                <Carousel.Slide key={index}>
                                    <Image w={"auto"} height={"100%"} fit="cover" fill src={"http://38.242.151.80:1340" + gal?.url} />
                        </Carousel.Slide>
                            )
                        })}
                    </Carousel>
                   
                   </div>
                   <div style={{padding: "2vh 2vw"}}>
                   <Text fw={800} tt={"uppercase"} c={"green"} mt={"2vh"}>Správce střelnice</Text>
                   <div style={{display: "flex", gap: "2vw"}}>
                  {spravce_strelnice?.map((spravce, index)=> {

return(
    <div key={index} style={{backgroundColor: "#D6F9B3", padding: "2vh 1vw", margin: "1vh 0"}}>
        <Text>{spravce?.jmeno + " " + spravce?.prijmeni}</Text>
        <Text fs={"italic"}>{spravce?.pozice}</Text>
        <Space h={"sm"} />
        <Group><Avatar><IoMail /></Avatar><Text>{spravce?.mail}</Text></Group>
        <Space h={"md"} />
        <Group><Avatar><BsFillTelephoneFill /></Avatar><Text>{spravce?.tel}</Text></Group>
    </div>
)
})}
                  </div>
                   </div>
                </div>
            )
        })}
      </SimpleGrid>}
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
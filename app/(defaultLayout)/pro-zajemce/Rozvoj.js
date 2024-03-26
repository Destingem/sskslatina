"use client"
import { Avatar, Group, SimpleGrid, Text, Title } from "@mantine/core";
import SectionHeader from "../../components/Universal/SectionHeader";
import { GiWhistle } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
let treneri = [
    {category: "A", desc: "K trenérství ve sportovní střelbě je potřeba mnoho znalostí a schopností. Každá střelec je individuální jak psychicky tak i fyziologicky. "},
    {category: "B", desc: "K trenérství ve sportovní střelbě je potřeba mnoho znalostí a schopností. Každá střelec je individuální jak psychicky tak i fyziologicky. "},
    {category: "C", desc: "K trenérství ve sportovní střelbě je potřeba mnoho znalostí a schopností. Každá střelec je individuální jak psychicky tak i fyziologicky. "},
]
export default function Rozvoj({device, id}){
    return(
        <section id={id} style={{maxWidth: "100%"}}>
        <SectionHeader mainText="Možnosti dalšího zapojení" subtitle="">
            Střelec se postupně může zapojit do činnosti klubu i jako trenér či rozhodčí a pomáhat dalším střelcům či pomáhat s organizací závodů.
        </SectionHeader>
        
       <div name="treneri">
       <Group>
        <Avatar color="green" size={"lg"}><GiWhistle /></Avatar>
        <Title order={3} style={{fontSize: "2rem"}}>Trenéři</Title>
       </Group>
        <Text mt={"2vh"} size="lg" lh={"175%"} maw={device !== "m" ? "70%" : "100%"}>K trenérství ve sportovní střelbě je potřeba mnoho znalostí a schopností. <br />
        Každá střelec je individuální jak psychicky tak i fyziologicky. Trenér tedy musí mít pevné základy jak v technice tak i psychické přípravě střelce. <br />
        Začátečníky učí zákldy sportovní střelby - poloha, dýchání, míření a spouštění. Se střelcem začínají na tzv. univerzální poloze a postupně polohu upravují. <br />
        S pokročilejšími střelci pak řeší psychickou přípravu, nastavení pušky a vybavení a jemné ladění polohy a střeleckých návyků. <br />
        Trenér by měl mít pro každého střelce na základě jeho metodiky vytvořený tréninkový plán a vyhodnocovat jeho výsledky. <br />
        Práce trenéra tedy rozhodně nekončí na trénincích, naopak by se střelcem měl být i na závodech, jelikož v závodním prostředí i pokročilý střelci vlivem stresu a jiných podmínek dělají začátečnické chyby.
        </Text>
        <Title order={4} lh={"175%"} style={{fontSize: "1.5rem", margin: "1vh 0"}}>Trenérské licence</Title>
        <Text mt={"2vh"} size="lg" lh={"175%"} maw={device !== "m" ? "70%" : "100%"}>
            Trenéři registrovaní pod Českým střeleckým svazem se dělí do kategorií A, B, C.
        </Text>
        <SimpleGrid cols={device !== "m" ? 3 : 1} style={{padding: "3vh 0"}}>
            {treneri?.map((trener, index) => {

                return(
                    <div key={index} style={{backgroundColor: "#FEE6E6", padding: "2vh 2vw"}}>
                    <Text style={{fontSize: "4rem", fontWeight: "500"}}>{trener?.category}</Text>
                    <Text size="xl">{"Trenér kategorie " + trener?.category}</Text>
                    <Text mt={"1vh"} lh={"200%"}>{trener?.desc}</Text>
                    </div>
                )
            })}
        </SimpleGrid>
       </div>
       <div name="rozhodci">
       <Group>
        <Avatar color="green" size={"lg"}><GoLaw /></Avatar>
        <Title order={3} style={{fontSize: "2rem"}}>Rozhodčí</Title>
       </Group>
        <Text mt={"2vh"} size="lg" lh={"175%"} maw={device !== "m" ? "70%" : "100%"}>K trenérství ve sportovní střelbě je potřeba mnoho znalostí a schopností. <br />
        Každá střelec je individuální jak psychicky tak i fyziologicky. Trenér tedy musí mít pevné základy jak v technice tak i psychické přípravě střelce. <br />
        Začátečníky učí zákldy sportovní střelby - poloha, dýchání, míření a spouštění. Se střelcem začínají na tzv. univerzální poloze a postupně polohu upravují. <br />
        S pokročilejšími střelci pak řeší psychickou přípravu, nastavení pušky a vybavení a jemné ladění polohy a střeleckých návyků. <br />
        Trenér by měl mít pro každého střelce na základě jeho metodiky vytvořený tréninkový plán a vyhodnocovat jeho výsledky. <br />
        Práce trenéra tedy rozhodně nekončí na trénincích, naopak by se střelcem měl být i na závodech, jelikož v závodním prostředí i pokročilý střelci vlivem stresu a jiných podmínek dělají začátečnické chyby.
        </Text>
        <Title order={4} lh={"175%"} style={{fontSize: "1.5rem", margin: "1vh 0"}}>Rozhodcovské licence</Title>
        <Text mt={"2vh"} size="lg" lh={"175%"} maw={device !== "m" ? "70%" : "100%"}>
           Rozhodčí registrovaní pod Českým střeleckým svazem se dělí do kategorií A, B, C.
        </Text>
        <SimpleGrid cols={device !== "m" ? 3 : 1} style={{padding: "3vh 0"}}>
            {treneri?.map((trener, index) => {

                return(
                    <div key={index} style={{backgroundColor: "#E6FDFD", padding: "2vh 2vw"}}>
                    <Text style={{fontSize: "4rem", fontWeight: "500"}}>{trener?.category}</Text>
                    <Text size="xl">{"Rozhodčí kategorie " + trener?.category}</Text>
                    <Text mt={"1vh"} lh={"200%"}>{trener?.desc}</Text>
                    </div>
                )
            })}
        </SimpleGrid>
       </div>
    </section>
    )
}
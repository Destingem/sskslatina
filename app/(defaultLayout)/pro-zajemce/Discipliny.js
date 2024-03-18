"use client"
import { Avatar, Group, SimpleGrid, Text, Title, Tooltip } from "@mantine/core";
import SectionHeader from "../../components/Universal/SectionHeader";
import { IoTimer } from "react-icons/io5";
import { TbDiabolo } from "react-icons/tb";
import { FaPerson } from "react-icons/fa6";
import { LuFoldHorizontal } from "react-icons/lu";
export default function Discipliny({device, id}){
    let discipliny = [
        {
            nadpis: "Vzduchová puška",
            text: "Vzduchová puška se střílí na 10m",
            icons: {
                vzdalenost: "10m",
                typ: "vnitřní",
                
            },
            podDiscipliny: [
                {nazev: "VzPu 30 L", popis: "Vzduchová puška 30 ran ležmo", cas: "30 minut", pocet_ran: 30, poloha: "v leže", vek: {from: 10, to: 14}},
                {nazev: "VzPu 40", popis: "Vzduchová puška 40 ran", cas: "50 minut", pocet_ran: 40, poloha: "ve stoje", vek: {from: 14, to: 18}},
                {nazev: "VzPu 60", popis: "Vzduchová puška 60 ran", cas: "75 minut", pocet_ran: 60, poloha: "ve stoje", vek: {from: 18, to: 99}},
            ]
        },
        {
            nadpis: "Malorážní puška",
            text: "Vzduchová puška se střílí na 10m",
            icons: {
                vzdalenost: "50m",
                typ: "venkovní",
                
            },
            podDiscipliny: [
                {nazev: "SM 60", popis: "Sportovní malorážní puška", cas: "60 minut", pocet_ran: 60, poloha: "v leže", vek: {from: 13, to: 18}},
                {nazev: "LM 60", popis: "Libovolná malorážní puška", cas: "60 minut", pocet_ran: 60, poloha: "ve leže", vek: {from: 18, to: 99}},
                {nazev: "3x20", popis: "Standard 3x20 ran", cas: "105 minut", pocet_ran: "60 (3 x 20)", poloha: "v kleče, leže a stoje", vek: {from: 15, to: 99}},
            ]
        }
    ]
    return(
        <section id={id} style={{maxWidth: "100%"}}>
        <SectionHeader mainText="Střelecké disciplíny" subtitle=""></SectionHeader>
       <SimpleGrid cols={device == "m" ? 1 : 2}>
        {discipliny?.map((discipline, index) => {

            return(
                <div key={index} style={{display: "flex", flexDirection: "column", gap: "0vh", backgroundColor: "#D6F9B3",}}>
                   <div style={{padding: "2vh 2vw"}}>
                   <Title order={2}>{discipline.nadpis}</Title>
                    <p>{discipline.text}</p>
                   </div>
                    <SimpleGrid cols={device == "m" ? 1 : 3} style={{padding: "2vh 1vw", backgroundColor: " #F1FDE6"}} >
                    {discipline.podDiscipliny?.map((podDiscipline, index) => {
                        return(
                            <div key={index} style={{borderRight: (index + 1) % 3 !== 0 ? "5px solid #D6F9B3" : "", display: "flex", flexDirection: "column", gap: "1vh" }}>
                                <Title order={4} size={"1.5rem"}>{podDiscipline.nazev}</Title>
                                <p>{podDiscipline.popis}</p>
                                <Group><Tooltip color="teal" label="Čistý čas na závod pro elektronické terče" position="top-start"><Avatar><IoTimer /></Avatar></Tooltip><Text>{podDiscipline.cas}</Text></Group>
                                <Group><Tooltip color="teal" label="Počet soutěžních ran" position="top-start"><Avatar><TbDiabolo /></Avatar></Tooltip><Text>{podDiscipline.pocet_ran + " ran"}</Text></Group>
                                <Group><Tooltip color="teal" label="Poloha kterou střelec zaujímá během střelby" position="top-start"><Avatar><FaPerson /></Avatar></Tooltip><Text>{podDiscipline.poloha}</Text></Group>
                                <Group><Tooltip color="teal" label="Doporučené věkové hranice, závazná je pouze maximální" position="top-start"><Avatar><LuFoldHorizontal /></Avatar></Tooltip><Text>{podDiscipline.vek.from + " - " + podDiscipline.vek.to + " let"}</Text></Group>
                            </div>
                        )
                    })}
                    </SimpleGrid>
                </div>
            )
        })}
       </SimpleGrid>
          

    </section>
    )
}
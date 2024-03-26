"use client";
import { Divider, Group, SimpleGrid, Text, Title } from "@mantine/core";
import SectionHeader from "../../../../components/Universal/SectionHeader";
import { device } from "app/lib/useDevice";
export default function Records({id,  }){

    const columns = [{name: "Vzduchová puška", value: "VzPu", subColums: [{name: "VzPu 40", value: "VzPu 40"}, {name: "VzPu 60", value: "VzPu 60"}]}]
    return(
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText="Osobní rekordy" subtitle="Nejlepší výsledky střelce v různých disciplínách"></SectionHeader>
            <SimpleGrid cols={device !== "m" ? 2 : 1} gap={20}>
               {device !== "m" && device !== undefined && columns?.map((column, index)=> {

                return(
                    <div style={{backgroundColor: "#F1FDE6", padding: "2vh 0"}} key={index}>
                    <Title order={3} ta={"center"} style={{marginBottom: "1rem"}}>{column?.name}</Title>
                    <Divider margins={1} color="green" size={"xl"} />
                    <SimpleGrid cols={2} gap={0}>
                      {column?.subColums?.map((subColumn, i) => {
                        return(
                            <div style={{borderRight: i + 1 % 2 === 1 ? "5px solid #40c057" : "", borderLeft: i + 1 % 2 !== 1 ? "5px solid #40c057" : "", padding: "2vh 2vw", display: "flex", flexDirection: "column", gap: "3vh"}} key={i}>
                            <Title order={4} ta={"center"} style={{marginBottom: "1rem", fontSize: "1.75rem", lineHeight: "100%"}} >{subColumn?.name}</Title>
                          <Group>
                                <Text component="span" fw={700}>Nejlepší výsledek:</Text> 
                                <Text fw={700} c={"teal"} size="1.5rem">412.7</Text>
                               <Text component="em" lh={0} size="sm">Pohár SSK Slatina 2024, 1.2.2024</Text>
                                
                          </Group>
                          <Group>
                                <Text component="span" fw={700}>Nejlepší položka:</Text> 
                                <Text fw={700} c={"teal"} size="1.5rem">103.5</Text>
                               <Text component="em" lh={0} size="sm">4. položka, Pohár SSK Slatina 2024, 1.2.2024</Text>
                                
                          </Group>
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
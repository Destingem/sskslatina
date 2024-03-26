
"use client";
import { Divider, SimpleGrid, Text, Title, rem } from "@mantine/core";
import { useHover, useViewportSize } from "@mantine/hooks";
import Link from "next/link";
import useDevice from "../../../lib/useDevice";



export default function SoutezHero({name, children, map, soutez}){
   
    const device = useDevice()
    console.log(soutez)
        console.log(device)
 
   if(device !== "m"){
    return(
        <section style={{width: "100%", backgroundColor: "#FBFBFB", minHeight: "40vh", display: "flex", justifyContent: "space-between"}}>
            <div style={{minWidth: "60%",maxWidth: "70%", display: "flex", flexDirection: "column", gap: "3vh", padding: "5vh 10vw"}}>
            <Title order={1} size={rem(66)}>{name}</Title>
            <Divider color={"#F76767"} size={"xl"} />
           
            <Text lh={"175%"} size={rem(20)}>{children}</Text>
            </div>
            {map ? <div style={{width: "100%"}} dangerouslySetInnerHTML={{__html: map}}></div> : ""}
        </section>
    )
   } else{
    return(
        <section style={{width: "100%", backgroundColor: "#FBFBFB", minHeight: "40vh", padding: "5vh 10vw", display: "flex", flexDirection: "column", gap: "5vh"}}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3vh"}}>
            <Title order={1} size={rem(66)}>{name}</Title>
            <Divider color={"#F76767"} size={"xl"} />
            
            <Text lh={"175%"} size={rem(20)}>{children}</Text>
            {map ? <div style={{width: "100%"}} dangerouslySetInnerHTML={{__html: map}}></div> : ""}
            </div>
           
        </section>
    )
   }
}
//FEE6E6
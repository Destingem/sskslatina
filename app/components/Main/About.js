"use client"
import { Button, Text, Title, rem } from "@mantine/core";
import SectionHeading from "../Universal/SectionHeading";
import Image from "next/image";
import AboutImg from "/public/images/home/about.png"
import Link from "next/link";
export default function About({device}) {
 if(device == "m"){

  return (
    <section style={{display: "flex", width: "100%", maxHeight: "50vh", justifyContent: "space-between", backgroundColor: "#fff", flexDirection: "column", marginBottom: "50vh"}}>
      <div style={{padding: "2vh 5vw", display: "flex", flexDirection: "column", gap: "3vh"}}>
      <SectionHeading subtitle={"SSK Slatina Brno"}>
        Kdo jsme
      </SectionHeading>
      <Text lh={"150%"} size={"xl"} fw={400}>
      Jsme jihomoravský sportovně střelecký klub. <br /> Střílíme ze sportovních vzduchových a malorážních pušek pod Českým střeleckým svazem.
      </Text>
      <div style={{position: "relative", height: "100%", width: "100%", height: "50vh"}}>
<Image style={{objectFit: "cover"}} fill src={AboutImg} alt="Air rifle" />
      </div>
      <Link href="/o-nas">
     <Button size="lg" variant="outline" color="indigo" radius="xl" style={{marginTop: "2vh", maxWidth: "50%"}}>Více o nás</Button>
     </Link>
      </div>
     
    </section>
  )
 } else{
  return (
    <section style={{display: "flex", width: "100%", maxHeight: "50vh", justifyContent: "space-between", backgroundColor: "#fff"}}>
      <div style={{padding: "2vh 5vw", display: "flex", flexDirection: "column", gap: "3vh"}}>
      <SectionHeading subtitle={"SSK Slatina Brno"}>
        Kdo jsme
      </SectionHeading>
      <Text lh={"150%"} size={"xl"} fw={400}>
      Jsme jihomoravský sportovně střelecký klub. <br /> Střílíme ze sportovních vzduchových a malorážních pušek pod Českým střeleckým svazem.
      </Text>
     <Link href="/o-nas">
     <Button size="lg" variant="filled" type="s" color="teal" radius="xl" style={{marginTop: "2vh", maxWidth: "50%"}}>Více o nás</Button>
     </Link>
      </div>
      <div style={{position: "relative", height: "100%", width: "50%", height: "50vh"}}>
<Image style={{objectFit: "cover"}} fill src={AboutImg} alt="Air rifle" />
      </div>
    </section>
  )
 }
}
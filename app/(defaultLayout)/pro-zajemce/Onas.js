"use client"
import Image from "next/image";
import SectionHeader from "../../components/Universal/SectionHeader";
import teamPhoto from "/public/images/universal/teamPhoto.jpeg";
import { Text } from "@mantine/core";
export default function Onas({device, id}){
    return(
        <section id={id} style={{maxWidth: "100%"}}>
        <SectionHeader mainText="O nás" subtitle=""></SectionHeader>
        <div style={{maxWidth: "100%", display: "flex", gap: "5vw", flexDirection: device !== "m" ? "row" : "column"}}>

<div style={device !== "m" ? {maxWidth: "50%"} : {}}>

<Text size="xl" lh={"200%"}>
Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean. 
<br />
Rutrum adipiscing risus vel interdum euismod dui morbi eget platea. Lectus arcu blandit volutpat egestas et id. Neque tincidunt ullamcorper lorem in eu velit ridiculus tellus tortor. Neque ipsum quis auctor elementum proin sollicitudin. Quis quis quis facilisis lectus vel aliquam quis arcu. Sed sapien tellus nam viverra faucibus ut nec eget.
<br />
Luctus dolor donec proin orci sollicitudin euismod id nisi. Feugiat habitant enim venenatis a viverra nisi odio est fusce id.
</Text>
</div>
<div style={device !== "m" ? {position: "relative", height: "100%", width: "50%", height: "50vh"} : {position: "relative", height: "100%", width: "100%", height: "50vh"}}>
<Image style={{objectFit: "cover"}} fill src={teamPhoto} alt="Air rifle" />
</div>
</div>
          

    </section>
    )
}
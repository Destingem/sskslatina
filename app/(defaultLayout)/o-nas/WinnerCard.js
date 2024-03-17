

import { ActionIcon, Avatar, Badge, SimpleGrid, Text } from "@mantine/core";
import Link from "next/link";
import { FaTrophy } from "react-icons/fa";
export default function WinnerCard({img, name, position, categories, href, device, desc}){

    return(
        <div style={device !== "m" ? {display: "flex", flexDirection: "column", gap: "2vh", backgroundColor: "#F1FDE6", padding: "3vh 1vw"} :
        {display: "flex", flexDirection: "column", gap: "2vh", backgroundColor: "#F1FDE6", padding: "3vh 5vw"}}>
            <Avatar size={"xl"} src={img} alt={name} />
         <div>
         <Text size="xl">{name}</Text>
            <Text component="em">{position}</Text>
         </div>
         <Text>{desc}</Text>
            <SimpleGrid cols={3} >
                {categories.map((category, index)=>{ 
                    let color = "#fff";
                    if(category.place === 1) color = "#FFD700";
                    if(category.place === 2) color = "#C0C0C0";
                    if(category.place === 3) color = "#CD7F32";
                return(
                    <div size="lg"  color="teal" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh", padding: ""}} key={index}>
                    <div>
                    <Avatar color="teal" variant="light" type="s" radius="6rem" size="lg" style={{fontSize: "1.5rem"}}><FaTrophy color={color} /></Avatar>
                    </div>
                    <Text style={{textAlign: "center", lineHeight: "20%"}}>{category?.place ? category?.place + ". místo \n"  : ""}</Text>
                    <Text style={{textAlign: "center", lineHeight: "150%"}}>{category?.desc}</Text>
                </div>
                )
                })}
            </SimpleGrid>
            
            <Link href={href} style={{marginTop: "2vh"}}>
              <svg width="75" height="23" viewBox="0 0 75 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M63.7543 22.1932L61.2827 19.7322L67.7706 13.255H0.75V9.65412H67.7706L61.2827 3.16619L63.7543 0.715909L74.4929 11.4545L63.7543 22.1932Z"
                  fill="black"
                />
              </svg>
            </Link>
        </div>
    )
}
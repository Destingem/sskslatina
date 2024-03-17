import { Button, Card, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function ItemCard({device, img, name, price, href, desc}){

    return(
        <Card shadow="xl">
        <Card.Section style={device !== "m" ? {position: "relative", minHeight: "25vh", borderBottom: "3px solid #F2F2F2", marginBottom: "2vh"}
        : {position: "relative", minHeight: "35vh", borderBottom: "3px solid #F2F2F2", marginBottom: "2vh"}
        }>
            <Image style={{objectFit: "cover"}} fill src={img} alt={name}  />
        </Card.Section>
            <Title c={"gray"} order={4} size={"1.5rem"}>{name}</Title>
            <Text style={{marginTop: "1vh", marginBottom: "1vh"}}>{desc}</Text>
            <div style={device !== "m" ? {display: "flex", alignItems: "center", justifyContent: "space-between"}
            : {display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "2vh"}
            }>
            <Text c={"#B40C04"} size={"1.5rem"} style={{padding: "1vh 0"}} fw={700}>{price}</Text>
            <Link href={href}>
                <Button type="s" color="teal">detail produktu</Button>
            </Link>
            </div>
        </Card>
    )
}
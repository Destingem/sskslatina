import { Button, Grid, SimpleGrid, Space, Text, rem } from "@mantine/core";
import SectionHeading from "../Universal/SectionHeading";
import CompetitionCard from "../Universal/CompetitionCard";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import AllButton from "../Universal/AllButton";
import SectionHeader from "../Universal/SectionHeader";

export default function Competitions({device}) {
const competitions = [
    {
        name: "Gran Prix Praha",
        categories: ["VzPu 40", "VzPu 60", "VzPi 40", "VzPi 60"],
        location: {
            name: "Střelnice SSK Slatina Brno",
            adress: "Cejl 20 Brno",
            url: "https://goo.gl/maps/8U8CZ8n7hY4Lh7zB6"
        },
        date: {
            from: "2022-09-01",
            to: "2022-09-03"
        },
        desc: "Jsme jihomoravský sportovně střelecký klub. Střílíme ze sportovních vzduchových a malorážních pušek pod Českým střeleckým svazem.",
        href: "/zavody/gran-prix-praha"
        },
        {
            name: "Gran Prix Praha",
            categories: ["VzPu 40", "VzPu 60", "VzPi 40", "VzPi 60"],
            location: {
                name: "Střelnice SSK Slatina Brno",
                adress: "Cejl 20 Brno",
                url: "https://goo.gl/maps/8U8CZ8n7hY4Lh7zB6"
            },
            date: {
                from: "2022-09-01",
                to: "2022-09-03"
            },
            desc: "Jsme jihomoravský sportovně střelecký klub. Střílíme ze sportovních vzduchových a malorážních pušek pod Českým střeleckým svazem.",
            href: "/zavody/gran-prix-praha"
            },
            {
                name: "Gran Prix Praha",
                categories: ["VzPu 40", "VzPu 60", "VzPi 40", "VzPi 60"],
                location: {
                    name: "Střelnice SSK Slatina Brno",
                    adress: "Cejl 20 Brno",
                    url: "https://goo.gl/maps/8U8CZ8n7hY4Lh7zB6"
                },
                date: {
                    from: "2022-09-01",
                    to: "2022-09-03"
                },
                desc: "Jsme jihomoravský sportovně střelecký klub. Střílíme ze sportovních vzduchových a malorážních pušek pod Českým střeleckým svazem.",
                href: "/zavody/gran-prix-praha"
                },
    
]
    return(
        <section style={{padding: "2vh 5vw"}}>
           <SectionHeader mainText="Naše závody" btnText={"Všechny závody"} btnLink={"/zavody"}></SectionHeader>
           
            <SimpleGrid cols={device !== "m" ? 3 : 1} gap={20}>
            {competitions?.map((competition, index) => {

                return(
                    <CompetitionCard {...competition} key={index} device={device} />
                )
            })}
            </SimpleGrid>
        </section>
    )
}